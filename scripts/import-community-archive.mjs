import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(repoRoot, 'data', 'community-archive-servers.json');
const forumBase = 'https://opentibiaservers.com/';
const excludedSlugs = new Set(['evomanias']);
const defaultExplicitThreadUrls = [
  'https://opentibiaservers.com/',
];

function decodeHtml(value = '') {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&#8203;/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/https?:\/\//g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 82);
}

function parseNumber(value = '') {
  const text = String(value).replace(/,/g, '').trim().toUpperCase();
  if (!text) return null;
  if (text.endsWith('K')) return Math.round(Number(text.slice(0, -1)) * 1000);
  const parsed = Number(text.replace(/[^0-9.]/g, ''));
  return Number.isFinite(parsed) ? parsed : null;
}

function parseTitleHints(title) {
  const bracketValues = [...title.matchAll(/\[([^\]]+)\]/g)].map((match) => decodeHtml(match[1]));
  const version = bracketValues.find((value) => /\d+\.\d+|custom|real-?map|old/i.test(value)) || null;
  const country = bracketValues.find((value) => /^[a-z ,.-]+$/i.test(value) && !/\d|custom|map|pvp|ots|ot$/i.test(value)) || null;
  let serverName = title
    .replace(/\[[^\]]+\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  serverName = serverName.split(/\s[|:-]\s| - | \| /)[0]?.trim() || serverName;
  serverName = serverName
    .replace(/^[|:;,\-\s]+/, '')
    .replace(/^(new|start|launch|official)\s+/i, '')
    .trim();

  return {
    country,
    version,
    serverName: serverName || title,
    bracketValues,
  };
}

function stripTags(html = '') {
  return decodeHtml(String(html)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' '));
}

function normalizeUrl(value = '') {
  const text = decodeHtml(value).trim().replace(/[),.;\]]+$/, '');
  if (!text) return null;
  if (/^https?:\/\//i.test(text)) return text;
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(text)) return `https://${text}`;
  return null;
}

function firstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return decodeHtml(match[1]).trim();
  }
  return null;
}

function extractExternalLinks(html = '') {
  const links = [];
  for (const match of html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = normalizeUrl(match[1]);
    const label = stripTags(match[2]);
    if (!href) continue;
    if (/community_archive\.net/i.test(href)) continue;
    links.push({ href, label: label || href });
  }
  return links.filter((link, index, array) => array.findIndex((item) => item.href === link.href) === index);
}

function isOfficialWebsiteCandidate(url = '') {
  return Boolean(url) && !/github\.com|twitch\.tv|youtube\.com|youtu\.be|discord(?:\.gg|\.com)|facebook\.com|instagram\.com|imgur\.com|gyazo\.com|community_archive\.net|my-aac\.org|znote|xenforo\.com|google\.com|virustotal\.com|reddit\.com|linkedin\.com|whatsapp\.com|x\.com|bsky\.app/i.test(url);
}

function isUsefulSourceLink(url = '') {
  return Boolean(url) && !/github\.com\/community_archive|github\.com\/edubart|github\.com\/mehah|github\.com\/hjnilsson|github\.com\/znote|github\.com\/slawkens|my-aac\.org\/flags|xenforo\.com|google\.com\/chrome|facebook\.com\/sharer|x\.com\/intent|bsky\.app\/intent|linkedin\.com\/sharing|reddit\.com\/submit|api\.whatsapp\.com/i.test(url);
}

function inferServerNameFromTitle(title) {
  return parseTitleHints(title).serverName;
}

function extractThreadDetails(html, sourceUrl) {
  const normalized = html.replace(/\r?\n/g, ' ');
  const title = stripTags(
    normalized.match(/<h1[^>]*class="[^"]*p-title-value[^"]*"[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
      || normalized.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
      || '',
  ).replace(/\s*\|\s*community_archive\s*$/i, '');
  const hints = parseTitleHints(title);
  const firstPost = normalized.match(/<article[^>]+class="[^"]*message[^"]*message--post[^"]*"[\s\S]*?<\/article>/i)?.[0] || normalized;
  const firstPostText = stripTags(firstPost);
  const fullText = stripTags(normalized);
  const detailsText = `${fullText} ${firstPostText}`;
  const links = extractExternalLinks(normalized);
  const labeledWebsite = normalizeUrl(firstMatch(detailsText, [
    /Server\s+Website\/AAC\s+(https?:\/\/[^\s]+|[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s]*)?)/i,
    /Website\s*:\s*(https?:\/\/[^\s]+|[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s]*)?)/i,
  ]));
  const websiteCandidate = isOfficialWebsiteCandidate(labeledWebsite)
    ? labeledWebsite
    : links.find((link) => isOfficialWebsiteCandidate(link.href))?.href || null;
  const address = firstMatch(detailsText, [
    /Server\s+Address\s+([a-z0-9.-]+\.[a-z]{2,})/i,
    /\bIP\s+([a-z0-9.-]+\.[a-z]{2,})/i,
  ]);
  const port = firstMatch(detailsText, [/Server\s+Port\s+(\d{2,5})/i, /\bPort\s+(\d{2,5})/i]);
  const protocol = firstMatch(detailsText, [/Client\s+Protocol\s+([0-9.]+)/i, /\bClient\s+([0-9.]+)/i]) || hints.version;
  const discord = links.find((link) => /discord(?:\.gg|\.com)/i.test(link.href))?.href || null;
  const screenshots = links.filter((link) => /imgur|gyazo|postimg|ibb\.co|prnt\.sc|youtube|youtu\.be/i.test(link.href));

  return {
    title,
    server_name: inferServerNameFromTitle(title),
    country_hint: hints.country,
    version_hint: protocol || hints.version,
    title_hints: hints.bracketValues,
    official_website_url: websiteCandidate,
    host: address || (websiteCandidate ? new URL(websiteCandidate).hostname.replace(/^www\./, '') : null),
    port: port ? Number(port) : null,
    client_protocol: protocol,
    contact_discord: discord,
    external_links: links.filter((link) => isUsefulSourceLink(link.href)),
    media_links: screenshots,
    first_post_excerpt: firstPostText.slice(0, 1400),
    source_url: sourceUrl,
  };
}

function extractThreads(html, pageNumber) {
  const normalized = html.replace(/\r?\n/g, ' ');
  const blockPattern = /<div[^>]+class="[^"]*structItem[^"]*structItem--thread[^"]*"[\s\S]*?(?=<div[^>]+class="[^"]*structItem[^"]*structItem--thread|<div[^>]+class="[^"]*pageNav|<\/main>)/g;
  const blocks = normalized.match(blockPattern) || [];

  return blocks.map((block) => {
    const titleMatch = block.match(/<a[^>]+href="([^"]+)"[^>]*data-tp-primary="on"[^>]*>([\s\S]*?)<\/a>/)
      || block.match(/<a[^>]+data-tp-primary="on"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
    if (!titleMatch) return null;

    const href = decodeHtml(titleMatch[1]);
    const title = decodeHtml(titleMatch[2].replace(/<[^>]+>/g, ''));
    if (!title || /^post thread$/i.test(title) || /board rules/i.test(title)) return null;

    const authorMatch = block.match(/data-author="([^"]+)"/) || block.match(/class="[^"]*username[^"]*"[^>]*>([^<]+)<\/a>/);
    const timeMatch = block.match(/<time[^>]+datetime="([^"]+)"/);
    const repliesMatch = block.match(/data-xf-init="tooltip"[^>]*>\s*Replies\s*<\/dt>\s*<dd[^>]*>([^<]+)<\/dd>/i)
      || block.match(/<dt[^>]*>\s*Replies\s*<\/dt>\s*<dd[^>]*>([^<]+)<\/dd>/i);
    const viewsMatch = block.match(/data-xf-init="tooltip"[^>]*>\s*Views\s*<\/dt>\s*<dd[^>]*>([^<]+)<\/dd>/i)
      || block.match(/<dt[^>]*>\s*Views\s*<\/dt>\s*<dd[^>]*>([^<]+)<\/dd>/i);

    const absoluteUrl = href.startsWith('http') ? href : new URL(href, 'https://opentibiaservers.com/').toString();
    const hints = parseTitleHints(title);
    const slugBase = slugify(hints.serverName);
    const slug = slugBase || slugify(title);

    return {
      slug,
      title,
      server_name: hints.serverName,
      country_hint: hints.country,
      version_hint: hints.version,
      title_hints: hints.bracketValues,
      source_url: absoluteUrl,
      source_forum: 'community_archive server launch archive',
      source_page: pageNumber,
      author: authorMatch ? decodeHtml(authorMatch[1]) : null,
      posted_at: timeMatch ? timeMatch[1] : null,
      replies: repliesMatch ? parseNumber(repliesMatch[1]) : null,
      views: viewsMatch ? parseNumber(viewsMatch[1]) : null,
      imported_at: new Date().toISOString(),
    };
  }).filter(Boolean);
}

async function fetchPage(pageNumber) {
  const url = pageNumber === 1 ? forumBase : `${forumBase}page-${pageNumber}`;
  const response = await fetch(url, {
    headers: {
      'user-agent': 'OpenTibiaServersBot/1.0 (+https://opentibiaservers.com; source-indexing)',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) {
    throw new Error(`community_archive fetch failed for ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function fetchThreadDetails(sourceUrl) {
  const response = await fetch(sourceUrl, {
    headers: {
      'user-agent': 'OpenTibiaServersBot/1.0 (+https://opentibiaservers.com; source-indexing)',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) return null;
  const html = await response.text();
  return extractThreadDetails(html, sourceUrl);
}

async function checkWebsite(url) {
  if (!url) return { ok: false, status: null, checked_at: new Date().toISOString() };
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(9000),
      headers: {
        'user-agent': 'OpenTibiaServersBot/1.0 (+https://opentibiaservers.com; source-indexing)',
        accept: 'text/html,application/xhtml+xml',
      },
    });
    return {
      ok: response.ok,
      status: response.status,
      final_url: response.url,
      checked_at: new Date().toISOString(),
    };
  } catch (error) {
    return {
      ok: false,
      status: null,
      error: error.message,
      checked_at: new Date().toISOString(),
    };
  }
}

const pagesArg = process.argv.find((arg) => arg.startsWith('--pages='));
const detailLimitArg = process.argv.find((arg) => arg.startsWith('--detail-limit='));
const explicitArg = process.argv.find((arg) => arg.startsWith('--thread-url='));
const pages = Math.max(1, Math.min(Number(pagesArg?.split('=')[1] || 3), 50));
const detailLimit = Math.max(0, Math.min(Number(detailLimitArg?.split('=')[1] || 0), 500));
const explicitThreadUrls = [
  ...defaultExplicitThreadUrls,
  ...(explicitArg ? explicitArg.split('=')[1].split(',').map((url) => url.trim()).filter(Boolean) : []),
];
const all = [];

for (let page = 1; page <= pages; page += 1) {
  const html = await fetchPage(page);
  const threads = extractThreads(html, page);
  console.log(`community_archive_page\t${page}\tthreads\t${threads.length}`);
  all.push(...threads);
}

for (const sourceUrl of explicitThreadUrls) {
  const detail = await fetchThreadDetails(sourceUrl);
  if (!detail?.title) continue;
  all.push({
    slug: slugify(detail.server_name || detail.title),
    title: detail.title,
    server_name: detail.server_name,
    country_hint: detail.country_hint,
    version_hint: detail.version_hint,
    title_hints: detail.title_hints,
    source_url: sourceUrl,
    source_forum: 'community_archive server launch archive',
    source_page: 'explicit_thread',
    author: null,
    posted_at: null,
    replies: null,
    views: null,
    imported_at: new Date().toISOString(),
    ...detail,
  });
}

const bySlug = new Map();
for (const item of all) {
  if (excludedSlugs.has(item.slug)) continue;
  let slug = item.slug;
  let suffix = 2;
  while (bySlug.has(slug)) {
    if (slug === item.slug) {
      const existing = bySlug.get(slug);
      bySlug.set(slug, {
        ...existing,
        ...Object.fromEntries(Object.entries(item).filter(([, value]) => value !== null && value !== undefined && value !== '')),
        replies: existing.replies ?? item.replies,
        views: existing.views ?? item.views,
        author: existing.author || item.author,
        posted_at: existing.posted_at || item.posted_at,
      });
      slug = null;
      break;
    }
    slug = `${item.slug}-${suffix}`;
    suffix += 1;
  }
  if (!slug) continue;
  bySlug.set(slug, { ...item, slug });
}

let records = [...bySlug.values()].sort((a, b) => {
  const activity = Number(b.replies || 0) - Number(a.replies || 0);
  if (activity !== 0) return activity;
  return Number(b.views || 0) - Number(a.views || 0);
});

const enrichTargets = records
  .filter((record) => record.source_url && (!record.official_website_url || !record.first_post_excerpt))
  .slice(0, detailLimit);

for (const record of enrichTargets) {
  const detail = await fetchThreadDetails(record.source_url);
  if (!detail) continue;
  Object.assign(record, {
    ...detail,
    slug: record.slug,
    title: record.title || detail.title,
    server_name: record.server_name || detail.server_name,
    source_url: record.source_url,
  });
}

const websiteTargets = records.filter((record) => record.official_website_url);
for (const record of websiteTargets) {
  record.official_website_check = await checkWebsite(record.official_website_url);
}

records = records.sort((a, b) => {
  if (Boolean(b.official_website_check?.ok) !== Boolean(a.official_website_check?.ok)) {
    return Boolean(b.official_website_check?.ok) - Boolean(a.official_website_check?.ok);
  }
  const activity = Number(b.replies || 0) - Number(a.replies || 0);
  if (activity !== 0) return activity;
  return Number(b.views || 0) - Number(a.views || 0);
});

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify({
  source: 'https://opentibiaservers.com/',
  imported_at: new Date().toISOString(),
  page_count: pages,
  records,
}, null, 2)}\n`, 'utf8');

console.log(`community_archive_records_written\t${records.length}`);
console.log(`community_archive_records_with_working_website\t${records.filter((record) => record.official_website_check?.ok).length}`);
console.log(`community_archive_output\t${path.relative(repoRoot, outPath)}`);
