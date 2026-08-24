import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getRootDomain } from '../lib/server-identity.js';
import { validateLogoCandidate } from './lib/server-logo-assets.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const researchPath = path.join(repoRoot, 'data', 'server-source-research.json');
const candidatesPath = path.join(repoRoot, 'data', 'server-logo-candidates.json');
const downloadRoot = path.join(repoRoot, 'data', 'server-logo-downloads');
const shouldFetch = process.argv.includes('--fetch');
const shouldWrite = process.argv.includes('--write');
const scrapingBeeKey = String(process.env.SCRAPINGBEE_API_KEY || '').trim();
const concurrency = Math.max(1, Math.min(5, Number(process.env.LOGO_FETCH_CONCURRENCY || 3)));
const timeoutMs = Math.max(5000, Math.min(45000, Number(process.env.LOGO_FETCH_TIMEOUT_MS || 20000)));

const research = JSON.parse(fs.readFileSync(researchPath, 'utf8'));
const existingDocument = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
const existingBySlug = new Map((existingDocument.candidates || []).map((candidate) => [candidate.slug, candidate]));

function extensionFor(contentType = '', url = '') {
  if (/image\/png/i.test(contentType)) return '.png';
  if (/image\/(?:jpeg|jpg)/i.test(contentType)) return '.jpg';
  if (/image\/webp/i.test(contentType)) return '.webp';
  if (/image\/gif/i.test(contentType)) return '.gif';
  if (/image\/svg\+xml/i.test(contentType)) return '.svg';
  const extension = path.extname(new URL(url).pathname).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(extension) ? (extension === '.jpeg' ? '.jpg' : extension) : '';
}

async function fetchWithTimeout(url, viaProxy = false) {
  const endpoint = viaProxy ? new URL('https://app.scrapingbee.com/api/v1') : new URL(url);
  if (viaProxy) {
    endpoint.searchParams.set('url', url);
    endpoint.searchParams.set('render_js', 'false');
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(endpoint, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersBrandArchive/1.0; +https://opentibiaservers.com)',
        accept: 'image/avif,image/webp,image/png,image/svg+xml,image/jpeg,image/gif,*/*;q=0.5',
        ...(viaProxy ? { Authorization: `Bearer ${scrapingBeeKey}` } : {}),
      },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function mapLimit(items, limit, worker) {
  let cursor = 0;
  async function run() {
    while (cursor < items.length) await worker(items[cursor], cursor++);
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
}

const jobs = (research.servers || []).flatMap((entry) => {
  if (existingBySlug.has(entry.slug)) return [];
  const page = (entry.official_pages || []).find((candidate) => candidate.relevance_status === 'accepted' && candidate.image);
  if (!page) return [];
  const officialRoot = getRootDomain(page.url);
  const expectedRoot = getRootDomain(entry.root_domain);
  if (!officialRoot || !expectedRoot || officialRoot !== expectedRoot) return [];
  return [{ entry, page, expectedRoot }];
});

const accepted = [];
const rejected = [];
if (shouldFetch) fs.mkdirSync(downloadRoot, { recursive: true });

await mapLimit(jobs, concurrency, async ({ entry, page, expectedRoot }, index) => {
  if (!shouldFetch) return;
  let response = null;
  try {
    response = await fetchWithTimeout(page.image, false);
    if (!response.ok && scrapingBeeKey) response = await fetchWithTimeout(page.image, true);
  } catch (error) {
    rejected.push({ slug: entry.slug, reason: error?.name || 'fetch_error', url: page.image });
    return;
  }
  if (!response?.ok) {
    rejected.push({ slug: entry.slug, reason: `http_${response?.status || 'unknown'}`, url: page.image });
    return;
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const extension = extensionFor(response.headers.get('content-type') || '', page.image);
  if (!extension || bytes.length > 8_000_000) {
    rejected.push({ slug: entry.slug, reason: extension ? 'asset_too_large' : 'unsupported_content_type', url: page.image });
    return;
  }
  const downloadedPath = path.join(downloadRoot, `${entry.slug}${extension}`);
  if (fs.existsSync(downloadedPath)) {
    const existing = fs.readFileSync(downloadedPath);
    if (!existing.equals(bytes)) {
      rejected.push({ slug: entry.slug, reason: 'existing_download_differs', url: page.image });
      return;
    }
  } else {
    fs.writeFileSync(downloadedPath, bytes, { flag: 'wx' });
  }
  const candidate = {
    slug: entry.slug,
    downloaded_path: path.relative(repoRoot, downloadedPath).replace(/\\/g, '/'),
    alt: `${entry.name} official logo`,
    kind: 'logo_banner',
    source_type: 'official_website',
    source_url: page.url,
    image_source_url: page.image,
    domains: [expectedRoot],
    aliases: entry.aliases || [],
  };
  const validation = validateLogoCandidate(candidate, { repoRoot });
  if (!validation.ok) {
    fs.unlinkSync(downloadedPath);
    rejected.push({ slug: entry.slug, reason: validation.reasons.join(','), url: page.image });
    return;
  }
  accepted.push(candidate);
  if ((index + 1) % 20 === 0) console.log(`logos\t${index + 1}/${jobs.length}`);
});

const nextCandidates = [...existingBySlug.values(), ...accepted]
  .sort((left, right) => left.slug.localeCompare(right.slug));
if (shouldWrite) {
  const output = {
    ...existingDocument,
    generated_at: new Date().toISOString(),
    candidates: nextCandidates,
  };
  fs.writeFileSync(candidatesPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
}

console.log(JSON.stringify({ discovered_jobs: jobs.length, accepted: accepted.length, rejected: rejected.length, mode: shouldWrite ? 'write' : 'dry_run' }, null, 2));
for (const item of rejected) console.error(`reject\t${item.slug}\t${item.reason}`);
