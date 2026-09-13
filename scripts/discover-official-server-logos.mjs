import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import liveInventory from '../data/live-server-inventory.json' with { type: 'json' };
import { collapseCanonicalServers, getRootDomain } from '../lib/server-identity.js';
import { validateLogoCandidate } from './lib/server-logo-assets.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const researchPath = path.join(repoRoot, 'data', 'server-source-research.json');
const candidatesPath = path.join(repoRoot, 'data', 'server-logo-candidates.json');
const manifestPath = path.join(repoRoot, 'data', 'server-logo-manifest.json');
const downloadRoot = path.join(repoRoot, 'data', 'server-logo-downloads');
const reportPath = path.join(repoRoot, 'reports', 'official-server-logo-discovery.json');
const shouldFetch = process.argv.includes('--fetch');
const shouldWrite = process.argv.includes('--write');
const retryExisting = process.argv.includes('--retry-existing');
const limitArgument = process.argv.find((argument) => argument.startsWith('--limit='));
const limit = limitArgument ? Math.max(1, Number(limitArgument.slice('--limit='.length)) || 1) : Infinity;
const concurrency = Math.max(1, Math.min(16, Number(process.env.LOGO_FETCH_CONCURRENCY || 8)));
const timeoutMs = Math.max(5000, Math.min(45000, Number(process.env.LOGO_FETCH_TIMEOUT_MS || 15000)));

const research = JSON.parse(fs.readFileSync(researchPath, 'utf8'));
const candidateDocument = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const reviewDecisionsPath = path.join(repoRoot, "data", "server-logo-review-decisions.json");
const reviewDecisions = fs.existsSync(reviewDecisionsPath) ? JSON.parse(fs.readFileSync(reviewDecisionsPath, "utf8")) : { rejected_sources: [] };
const manuallyRejectedSources = new Set((reviewDecisions.rejected_sources || []).map((entry) => entry.url));
const existingBySlug = new Map((candidateDocument.candidates || []).map((candidate) => [candidate.slug, candidate]));
const canonicalServers = collapseCanonicalServers(liveInventory.servers || []);
const researchByRoot = new Map();

for (const entry of research.servers || []) {
  const root = getRootDomain(entry.root_domain || '');
  if (!root) continue;
  if (!researchByRoot.has(root)) researchByRoot.set(root, []);
  researchByRoot.get(root).push(entry);
}

function isUsableManifestEntry(slug) {
  const entry = manifest.entries?.[slug];
  if (!entry) return false;
  if (/^https:\/\//i.test(entry.src || '')) return true;
  const localPath = path.join(repoRoot, 'public', String(entry.src || '').replace(/^\//, ''));
  return fs.existsSync(localPath);
}

function isUsableExistingCandidate(slug) {
  const candidate = existingBySlug.get(slug);
  return Boolean(candidate && validateLogoCandidate(candidate, { repoRoot }).ok);
}

function decodeHtml(value = '') {
  return String(value)
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

function attributesFromTag(tag = '') {
  const attributes = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    attributes[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attributes;
}

function normalizeImageUrl(value, pageUrl) {
  let source = decodeHtml(String(value || '').trim());
  if (!source || /^(?:data:|blob:|javascript:|#)/i.test(source)) return null;
  if (source.includes(',')) source = source.split(',')[0].trim().split(/\s+/)[0];
  try {
    const resolved = new URL(source, pageUrl);
    if (!/^https?:$/i.test(resolved.protocol)) return null;
    return resolved.href;
  } catch {
    return null;
  }
}

const rejectedArtwork = /(?:favicon|apple-touch|sprite|spacer|pixel|tracker|loading|spinner|avatar|placeholder|screenshot|screen[-_]?shot|wallpaper|background|hero|cover|social|facebook|discord|youtube|instagram|twitch|banner|slider|carousel|download|payment|paypal|coin|character|outfit|item|monster|guild|flag|button|separator|divider)/i;
const positiveLogo = /(?:logo|logotype|wordmark|branding|brand[-_]|logoartwork)/i;

function identityTerms(server) {
  return [...new Set([
    server.slug,
    server.canonical_slug,
    server.name,
    ...(server.identity_aliases || []),
  ].flatMap((value) => String(value || '').toLowerCase().split(/[^a-z0-9]+/)).filter((value) => value.length >= 4))];
}

function scoreImage(image, server) {
  const source = image.url.toLowerCase();
  if (manuallyRejectedSources.has(image.url)) return -100;
  let pathname = source;
  try {
    pathname = new URL(image.url).pathname.toLowerCase();
  } catch {}
  const context = image.context.toLowerCase();
  if (rejectedArtwork.test(source) || rejectedArtwork.test(context)) return -100;
  let score = 0;
  if (positiveLogo.test(source)) score += 55;
  if (positiveLogo.test(context)) score += 35;
  if (/header|navbar|navigation|masthead|topbar/.test(context)) score += 12;
  if (/\.(?:svg|png|webp)(?:$|\?)/i.test(source)) score += 5;
  const terms = identityTerms(server);
  const explicitIdentity = terms.some((term) => pathname.includes(term) || context.includes(term));
  if (terms.some((term) => pathname.includes(term))) score += 28;
  if (terms.some((term) => context.includes(term))) score += 22;
  if (/tibia[-_]?logo[-_]?artwork|logoartwork/i.test(pathname) && !explicitIdentity) return -100;
  if (/logoartwork/.test(source)) score += 10;
  return score;
}

function extractImageCandidates(html, pageUrl, server) {
  const images = [];
  for (const tag of html.match(/<(?:img|source)\b[^>]*>/gi) || []) {
    const attributes = attributesFromTag(tag);
    const context = [attributes.alt, attributes.title, attributes.id, attributes.class, attributes.itemprop, attributes['aria-label']]
      .filter(Boolean).join(' ');
    for (const key of ['src', 'data-src', 'data-lazy-src', 'data-original', 'srcset', 'data-srcset']) {
      const url = normalizeImageUrl(attributes[key], pageUrl);
      if (url) images.push({ url, context, discovered_from: key });
    }
  }
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    const attributes = attributesFromTag(tag);
    const rel = String(attributes.rel || '').toLowerCase();
    if (!/logo/.test(rel)) continue;
    const url = normalizeImageUrl(attributes.href, pageUrl);
    if (url) images.push({ url, context: rel, discovered_from: 'link' });
  }
  for (const match of html.matchAll(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi)) {
    const url = normalizeImageUrl(match[2], pageUrl);
    if (url && positiveLogo.test(match[2])) images.push({ url, context: 'css logo', discovered_from: 'css' });
  }
  const unique = new Map();
  for (const image of images) {
    const scored = { ...image, score: scoreImage(image, server) };
    const prior = unique.get(image.url);
    if (!prior || scored.score > prior.score) unique.set(image.url, scored);
  }
  return [...unique.values()].filter((image) => image.score >= 45).sort((left, right) => right.score - left.score).slice(0, 8);
}

async function fetchWithTimeout(url, accept) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersBrandArchive/1.1; +https://opentibiaservers.com)',
        accept,
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

function extensionFor(contentType = '', url = '') {
  if (/image\/png/i.test(contentType)) return '.png';
  if (/image\/(?:jpeg|jpg)/i.test(contentType)) return '.jpg';
  if (/image\/webp/i.test(contentType)) return '.webp';
  if (/image\/gif/i.test(contentType)) return '.gif';
  if (/image\/svg\+xml/i.test(contentType)) return '.svg';
  try {
    const extension = path.extname(new URL(url).pathname).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(extension) ? (extension === '.jpeg' ? '.jpg' : extension) : '';
  } catch {
    return '';
  }
}

function pagesFor(server) {
  const root = getRootDomain(server.root_domain || server.host || server.ip || '');
  const pages = [];
  for (const entry of researchByRoot.get(root) || []) {
    for (const page of entry.official_pages || []) {
      if (/^https?:\/\//i.test(page.url || '') && getRootDomain(page.url) === root) pages.push(page.url);
    }
  }
  if (root) pages.push(`https://${root}/`);
  return [...new Set(pages)].slice(0, 4);
}

async function mapLimit(items, size, worker) {
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, run));
}

const jobs = canonicalServers
  .filter((server) => retryExisting || (!isUsableManifestEntry(server.canonical_slug || server.slug) && !isUsableExistingCandidate(server.canonical_slug || server.slug)))
  .map((server) => ({ server, pages: pagesFor(server) }))
  .filter((job) => job.pages.length)
  .slice(0, limit);

if (!shouldFetch) {
  console.log(JSON.stringify({ canonical_servers: canonicalServers.length, discovery_jobs: jobs.length, mode: 'dry_run' }, null, 2));
  process.exit(0);
}

fs.mkdirSync(downloadRoot, { recursive: true });
const accepted = [];
const results = [];

await mapLimit(jobs, concurrency, async ({ server, pages }, index) => {
  const slug = server.canonical_slug || server.slug;
  const result = { slug, name: server.name, root_domain: server.root_domain, pages: [], status: 'not_found' };
  for (const pageUrl of pages) {
    const pageResult = { url: pageUrl, candidates: [] };
    result.pages.push(pageResult);
    try {
      const response = await fetchWithTimeout(pageUrl, 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.5');
      pageResult.http_status = response.status;
      pageResult.final_url = response.url;
      if (!response.ok || getRootDomain(response.url) !== getRootDomain(server.root_domain)) continue;
      const contentType = response.headers.get('content-type') || '';
      if (!/html|xhtml/i.test(contentType)) continue;
      const html = await response.text();
      const images = extractImageCandidates(html.slice(0, 3_000_000), response.url, server);
      for (const image of images) {
        const candidateResult = { ...image };
        pageResult.candidates.push(candidateResult);
        try {
          const imageResponse = await fetchWithTimeout(image.url, 'image/avif,image/webp,image/png,image/svg+xml,image/jpeg,image/gif,*/*;q=0.4');
          candidateResult.http_status = imageResponse.status;
          if (!imageResponse.ok) continue;
          const bytes = Buffer.from(await imageResponse.arrayBuffer());
          const extension = extensionFor(imageResponse.headers.get('content-type') || '', imageResponse.url || image.url);
          if (!extension || bytes.length > 8_000_000) continue;
          const hash = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 10);
          const downloadedPath = path.join(downloadRoot, `${slug}-${hash}${extension}`);
          if (!fs.existsSync(downloadedPath)) fs.writeFileSync(downloadedPath, bytes, { flag: 'wx' });
          const candidate = {
            slug,
            downloaded_path: path.relative(repoRoot, downloadedPath).replace(/\\/g, '/'),
            target_filename: `${slug}${extension}`,
            alt: `${server.name} official logo`,
            kind: 'logo_banner',
            source_type: 'official_website',
            source_url: pageUrl,
            image_source_url: image.url,
            domains: [getRootDomain(server.root_domain)],
            aliases: [...new Set([server.name, ...(server.identity_aliases || [])].filter(Boolean))],
          };
          const validation = validateLogoCandidate(candidate, { repoRoot });
          candidateResult.validation = validation.ok ? 'accepted' : validation.reasons;
          if (!validation.ok) {
            fs.unlinkSync(downloadedPath);
            continue;
          }
          candidateResult.width = validation.metadata.width;
          candidateResult.height = validation.metadata.height;
          accepted.push(candidate);
          result.status = 'accepted';
          result.image_source_url = image.url;
          break;
        } catch (error) {
          candidateResult.error = error?.name || error?.message || 'image_fetch_error';
        }
      }
      if (result.status === 'accepted') break;
    } catch (error) {
      pageResult.error = error?.name || error?.message || 'page_fetch_error';
    }
  }
  results.push(result);
  if ((index + 1) % 20 === 0) console.log(`logos\t${index + 1}/${jobs.length}\taccepted=${accepted.length}`);
});

const acceptedBySlug = new Map(accepted.map((candidate) => [candidate.slug, candidate]));
if (shouldWrite) {
  const nextCandidates = [...existingBySlug.entries()]
    .filter(([slug]) => !acceptedBySlug.has(slug) && (!retryExisting || !jobs.some((job) => (job.server.canonical_slug || job.server.slug) === slug)))
    .map(([, candidate]) => candidate)
    .concat(accepted)
    .sort((left, right) => left.slug.localeCompare(right.slug));
  fs.writeFileSync(candidatesPath, `${JSON.stringify({ ...candidateDocument, generated_at: new Date().toISOString(), candidates: nextCandidates }, null, 2)}\n`, 'utf8');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify({ generated_at: new Date().toISOString(), jobs: jobs.length, accepted: accepted.length, results: results.sort((a, b) => a.slug.localeCompare(b.slug)) }, null, 2)}\n`, 'utf8');
}

console.log(JSON.stringify({ discovery_jobs: jobs.length, accepted: accepted.length, unresolved: jobs.length - accepted.length, mode: shouldWrite ? 'write' : 'dry_run' }, null, 2));
