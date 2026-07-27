import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(repoRoot, 'data', 'otland-server-gala-servers.json');
const forumBase = 'https://otland.net/forums/server-gala.43/';
const excludedSlugs = new Set(['evomanias']);

function decodeHtml(value = '') {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
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

    const absoluteUrl = href.startsWith('http') ? href : new URL(href, 'https://otland.net').toString();
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
      source_forum: 'OtLand Server Gala',
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
    throw new Error(`OtLand fetch failed for ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

const pagesArg = process.argv.find((arg) => arg.startsWith('--pages='));
const pages = Math.max(1, Math.min(Number(pagesArg?.split('=')[1] || 3), 50));
const all = [];

for (let page = 1; page <= pages; page += 1) {
  const html = await fetchPage(page);
  const threads = extractThreads(html, page);
  console.log(`otland_page\t${page}\tthreads\t${threads.length}`);
  all.push(...threads);
}

const bySlug = new Map();
for (const item of all) {
  if (excludedSlugs.has(item.slug)) continue;
  let slug = item.slug;
  let suffix = 2;
  while (bySlug.has(slug)) {
    slug = `${item.slug}-${suffix}`;
    suffix += 1;
  }
  bySlug.set(slug, { ...item, slug });
}

const records = [...bySlug.values()].sort((a, b) => {
  const activity = Number(b.replies || 0) - Number(a.replies || 0);
  if (activity !== 0) return activity;
  return Number(b.views || 0) - Number(a.views || 0);
});

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify({
  source: 'https://otland.net/forums/server-gala.43/',
  imported_at: new Date().toISOString(),
  page_count: pages,
  records,
}, null, 2)}\n`, 'utf8');

console.log(`otland_records_written\t${records.length}`);
console.log(`otland_output\t${path.relative(repoRoot, outPath)}`);
