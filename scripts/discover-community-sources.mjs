import fs from 'node:fs';
import path from 'node:path';
import { collapseCanonicalServers, deriveServerIdentity } from '../lib/server-identity.js';
import { rankcommunity_archiveCandidates, selectcommunity_archiveCandidate } from '../lib/community_archive-source-candidate.js';

const repoRoot = process.cwd();
const inventory = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'live-server-inventory.json'), 'utf8'));
const existing = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'community-archive-servers.json'), 'utf8'));
const excerptManifestPath = path.join(repoRoot, 'data', 'server-excerpt-manifest.json');
const excerptManifest = fs.existsSync(excerptManifestPath)
  ? JSON.parse(fs.readFileSync(excerptManifestPath, 'utf8'))
  : {};
const outputPath = path.join(repoRoot, 'data', 'discovered-community_archive-server-sources.json');
const previous = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8')) : { records: [] };
const concurrency = Math.max(1, Math.min(5, Number(process.env.DISCOVERY_CONCURRENCY || 4)));
const timeoutMs = Math.max(3000, Math.min(30000, Number(process.env.DISCOVERY_TIMEOUT_MS || 12000)));
const searchProvider = 'community_archive native forum search v4 exact-domain';

function decodeXml(value = '') {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function nativeSearchItems(html = '') {
  const items = [];
  const blocks = String(html).split(/<li class="block-row[^>]*>/i).slice(1);
  for (const block of blocks) {
    const match = block.match(/contentRow-title[\s\S]*?<a href="(\/threads\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    if (!match) continue;
    const resultUrl = new URL(decodeXml(match[1]), 'https://opentibiaservers.com/');
    resultUrl.pathname = resultUrl.pathname.replace(/\/post-\d+\/?$/, '/');
    resultUrl.hash = '';
    const url = resultUrl.href;
    const title = decodeXml(match[2]);
    if (!title || items.some((item) => item.url === url)) continue;
    const snippet = decodeXml(block.match(/contentRow-snippet[^>]*>([\s\S]*?)<\/div>/i)?.[1] || '');
    const forum = decodeXml(block.match(/Forum:\s*<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] || '');
    const author = decodeXml(block.match(/class="username[^>]*>([\s\S]*?)<\/a>/i)?.[1] || '');
    const postedAt = decodeXml(block.match(/<time[^>]+datetime="([^"]+)"/i)?.[1] || '');
    items.push({ title, url, snippet, forum, author, posted_at: postedAt, position: items.length + 1 });
  }
  return items;
}

function cookieHeader(response) {
  const values = typeof response.headers.getSetCookie === 'function'
    ? response.headers.getSetCookie()
    : [response.headers.get('set-cookie')].filter(Boolean);
  return values.map((value) => value.split(';')[0]).join('; ');
}

async function nativeSearch(term, { titleOnly = true } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), Math.max(timeoutMs, 20000));
  try {
    const headers = { 'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersResearch/1.0)' };
    const searchPage = await fetch(`https://opentibiaservers.com/`, {
      signal: controller.signal,
      headers,
    });
    if (!searchPage.ok) throw new Error(`community_archive search form failed with HTTP ${searchPage.status}`);
    const formHtml = await searchPage.text();
    const token = decodeXml(formHtml.match(/name="_xfToken" value="([^"]+)"/i)?.[1] || '');
    if (!token) throw new Error('community_archive search form did not expose a CSRF token');

    const form = new URLSearchParams({ keywords: term, order: 'relevance', _xfToken: token });
    if (titleOnly) form.set('c[title_only]', '1');
    const response = await fetch('https://opentibiaservers.com/', {
      method: 'POST',
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        ...headers,
        cookie: cookieHeader(searchPage),
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: form,
    });
    if (!response.ok) throw new Error(`community_archive native search failed with HTTP ${response.status}`);
    return nativeSearchItems(await response.text());
  } finally {
    clearTimeout(timer);
  }
}

async function mapLimit(items, limit, worker) {
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
}

const canonicalServers = collapseCanonicalServers(inventory.servers || []);
const knownSlugs = new Set((existing.records || []).map((record) => deriveServerIdentity({
  name: record.server_name,
  slug: record.slug,
  host: record.host,
  website_url: record.official_website_url,
}).slug));
const previousBySlug = new Map((previous.records || []).map((record) => [record.canonical_slug, record]));
const archivedCount = canonicalServers.filter((server) => knownSlugs.has(server.slug)).length;
const targets = canonicalServers.filter((server) => (
  excerptManifest[server.slug]?.research_status === 'insufficient'
  && !previousBySlug.get(server.slug)?.selected_url
  && server.root_domain
  && server.root_domain.includes('.')
  && !/^\d{1,3}(?:\.\d{1,3}){3}$/.test(server.root_domain)
));

await mapLimit(targets, concurrency, async (server, index) => {
  const query = server.root_domain;
  let searchResults = [];
  let searchError = null;
  try {
    searchResults = await nativeSearch(query, { titleOnly: false });
  } catch (error) {
    searchError = error instanceof Error ? error.message : String(error);
  }
  const candidates = rankcommunity_archiveCandidates(searchResults, server, 5);
  const selected = selectcommunity_archiveCandidate(candidates);

  previousBySlug.set(server.slug, {
    canonical_slug: server.slug,
    server_name: server.name,
    root_domain: server.root_domain || null,
    query,
    search_provider: searchProvider,
    search_error: searchError,
    searched_at: new Date().toISOString(),
    selection_policy: 'exact canonical brand or exact root domain in the matched post, plus server launch archive owner-profile evidence or explicit player-experience evidence; development, support, trade, and ambiguous matches are retained only as rejected provenance',
    candidates,
    selected_url: selected?.url || null,
    selected_title: selected?.title || null,
    selected_snippet: selected?.snippet || null,
    selected_role: selected?.role || null,
  });

  if ((index + 1) % 20 === 0) {
    console.log(`discovery\t${index + 1}/${targets.length}`);
    fs.writeFileSync(outputPath, `${JSON.stringify({ records: [...previousBySlug.values()] }, null, 2)}\n`, 'utf8');
  }
});

const liveSlugs = new Set(canonicalServers.map((server) => server.slug));
const records = [...previousBySlug.values()]
  .filter((record) => liveSlugs.has(record.canonical_slug))
  .sort((a, b) => a.server_name.localeCompare(b.server_name));
const output = {
  generated_at: new Date().toISOString(),
  search_provider: searchProvider,
  records,
  stats: {
    live_canonical_servers: canonicalServers.length,
    already_in_community_archive_archive: archivedCount,
    searched: records.length,
    with_candidate: records.filter((record) => record.selected_url).length,
    rejected_candidate_records: records.filter((record) => !record.selected_url && record.candidates?.length).length,
  },
};
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(output.stats, null, 2));
