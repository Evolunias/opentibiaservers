import fs from 'node:fs';
import path from 'node:path';
import { topOtservlistServers } from '../lib/top-otservlist-servers.js';
import { deriveServerIdentity } from '../lib/server-identity.js';
import {
  applyOfficialMetadataAssessment,
  extractOfficialMetadata,
  officialPageCandidatePriority,
} from '../lib/official-site-research.js';

const repoRoot = process.cwd();
const outputPath = path.join(repoRoot, 'data', 'server-source-research.json');
const excerptManifestPath = path.join(repoRoot, 'data', 'server-excerpt-manifest.json');
const previousResearch = fs.existsSync(outputPath)
  ? JSON.parse(fs.readFileSync(outputPath, 'utf8'))
  : { servers: [] };
const community_archiveData = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'community-archive-servers.json'), 'utf8'));
const liveInventoryPath = path.join(repoRoot, 'data', 'live-server-inventory.json');
const liveInventory = fs.existsSync(liveInventoryPath)
  ? JSON.parse(fs.readFileSync(liveInventoryPath, 'utf8'))
  : { servers: [] };
const discoveredPath = path.join(repoRoot, 'data', 'discovered-community_archive-server-sources.json');
const discovered = fs.existsSync(discoveredPath)
  ? JSON.parse(fs.readFileSync(discoveredPath, 'utf8'))
  : { records: [] };
const verifiedSources = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'verified-server-sources.json'), 'utf8'));
const shouldFetch = process.argv.includes('--fetch');
const dryRun = process.argv.includes('--dry-run');
const fetchThreadPages = !process.argv.includes('--official-only');
const fetchOfficialPages = !process.argv.includes('--threads-only');
const proxyOfficialPages = process.argv.includes('--proxy-official');
const renderOfficialPages = process.argv.includes('--render-official');
const concurrency = Math.max(1, Math.min(8, Number(process.env.RESEARCH_CONCURRENCY || 6)));
const timeoutMs = Math.max(3000, Math.min(45000, Number(process.env.RESEARCH_TIMEOUT_MS || 10000)));
const scrapingBeeKey = String(process.env.SCRAPINGBEE_API_KEY || '').trim();

const featurePatterns = [
  ['custom map', /\bcustom map\b/i], ['real map', /\b(real|global) map\b/i], ['custom vocations', /\bcustom vocations?\b|\b\d+\s+vocations?\b/i],
  ['custom spells', /\bcustom spells?\b/i], ['custom items', /\bcustom items?\b/i], ['quests', /\bquests?\b/i],
  ['task system', /\btask system\b|\btasks?\b/i], ['bosses', /\bbosses?\b/i], ['dungeons', /\bdungeons?\b/i],
  ['crafting', /\bcrafting\b/i], ['mining', /\bmining\b/i], ['fishing', /\bfishing\b/i], ['prestige progression', /\bprestige\b/i],
  ['rebirth progression', /\brebirth\b/i], ['events and raids', /\bevents?\b.*\braids?\b|\braids?\b.*\bevents?\b/i],
  ['PvP events', /\bpvp events?\b/i], ['guild wars', /\bguild wars?\b|\bwar system\b/i], ['party bonuses', /\bparty (share|bonus)/i],
  ['staged experience', /\bexperience stages?\b|\bexp stages?\b|\bstaged experience\b/i], ['Android client', /\bandroid\b/i],
  ['Windows client', /\bwindows\b/i], ['anti-bot protection', /\banti[- ]?bot\b/i], ['daily rewards', /\bdaily (rewards?|tasks?)/i],
  ['upgrade systems', /\b(upgrade|enchanting|equipment merging)\b/i], ['seasonal progression', /\bseason\b|\bseasonal\b/i],
];

function decodeHtml(value = '') {
  return String(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;|&#8203;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&middot;/gi, '·');
}

function cleanHtml(value = '') {
  return decodeHtml(String(value)
    .replace(/<blockquote[\s\S]*?<\/blockquote>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '. ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

function words(value = '', limit = 24) {
  const tokens = String(value).trim().split(/\s+/).filter(Boolean);
  return `${tokens.slice(0, limit).join(' ')}${tokens.length > limit ? '…' : ''}`;
}

function parsePosts(html = '', sourceUrl = '') {
  const posts = [];
  const pattern = /data-lb-id="post-(\d+)"[\s\S]*?data-lb-caption-desc="([^"]+?)(?:\s+&middot;|\s+·)\s*([^"]+)"[\s\S]*?<article class="message-body[^>]*>([\s\S]*?)<\/article>/gi;
  for (const match of html.matchAll(pattern)) {
    const postId = match[1];
    const author = decodeHtml(match[2]).trim();
    const postedAt = decodeHtml(match[3]).trim();
    const text = cleanHtml(match[4]);
    if (!author || text.length < 45) continue;
    posts.push({
      post_id: postId,
      author,
      posted_at_label: postedAt,
      excerpt: words(text, 24),
      signals: signalsFor(text),
      source_url: `${sourceUrl.replace(/#.*$/, '').replace(/\/$/, '')}/#post-${postId}`,
    });
    if (posts.length >= 8) break;
  }
  return posts;
}

function sourceHost(record = {}) {
  return record.host || record.official_website_url || null;
}

function threadKey(url = '') {
  return String(url).match(/\/threads\/[^/]*\.(\d+)/i)?.[1] || String(url).replace(/#.*$/, '').replace(/\/$/, '');
}

function officialPageKey(url = '') {
  try {
    return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return String(url).replace(/\/$/, '');
  }
}

function signalsFor(text = '') {
  return featurePatterns.filter(([, pattern]) => pattern.test(text)).map(([label]) => label).slice(0, 8);
}

function communityScore(post = {}) {
  const text = String(post.excerpt || '');
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  let score = Math.min(wordCount, 32) / 8;
  if (/\b(?:i|i'm|i've|we|my|our)\b/i.test(text)) score += 4;
  if (/\b(?:played|playing|recommend|experience|friends?|community|staff|balance|rates?|pvp|war|lag|bot|difficult|easy|slow|fast|pay.?to.?win)\b/i.test(text)) score += 4;
  if (/\b(?:because|while|but|however|although|seems?|feels?)\b/i.test(text)) score += 2;
  if (/^(?:good luck|nice|bump|up|join|when launch|maybe add)\b/i.test(text)) score -= 5;
  return score;
}

function evidenceSummary(entry) {
  const official = entry.official_pages.find((page) => page.description);
  if (official) return official.description;
  // Directory prose is not promoted to evidence. Without accepted official
  // metadata, attributed owner/community excerpts remain separate verbatim
  // evidence instead of being rewritten into an unsupported summary.
  return null;
}

function normalizedArchivedPost(thread = {}) {
  const excerpt = words(cleanHtml(thread.first_post_excerpt || ''), 24);
  const author = cleanHtml(thread.author || '');
  if (!author || excerpt.length < 45) return null;
  return {
    post_id: null,
    author,
    posted_at_label: thread.posted_at || null,
    excerpt,
    signals: signalsFor(excerpt),
    source_url: thread.source_url || null,
    archived_fallback: true,
  };
}

function attributedExcerpt(post = {}) {
  if (!post?.author || !post?.excerpt) return null;
  return `${post.author}${post.posted_at_label ? ` (${post.posted_at_label})` : ''}: “${post.excerpt}”`;
}

function addToGroup(groups, raw, kind) {
  const identity = deriveServerIdentity(raw);
  if (!identity.slug) return;
  const entry = groups.get(identity.slug) || {
    slug: identity.slug,
    name: identity.name,
    root_domain: identity.rootDomain || null,
    aliases: [],
    community_archive_threads: [],
    official_pages: [],
    directory_summaries: [],
  };
  entry.aliases.push(raw.slug, raw.name, raw.server_name);
  if (kind === 'community_archive') entry.community_archive_threads.push(raw);
  if (raw.website_url) entry.official_pages.push({
    url: raw.website_url,
    candidate_source: kind === 'community_archive' ? 'community_archive_owner_record' : 'directory_listing',
  });
  if (kind === 'directory' && raw.official_summary && !/currently needs owner-confirmed|verified starting point instead of a blank page/i.test(raw.official_summary)) {
    entry.directory_summaries.push(raw.official_summary);
  }
  groups.set(identity.slug, entry);
}

async function fetchText(url, { forceProxy = false, renderJs = false } = {}) {
  const targetUrl = String(url || '').replace(/#.*$/, '');
  const useScrapingBee = scrapingBeeKey && (forceProxy || /^https?:\/\/(?:www\.)?community_archive\.net\//i.test(targetUrl));
  const requestUrl = useScrapingBee
    ? (() => {
        const endpoint = new URL('https://app.scrapingbee.com/api/v1');
        endpoint.searchParams.set('url', targetUrl);
        endpoint.searchParams.set('block_resources', 'true');
        endpoint.searchParams.set('render_js', renderJs ? 'true' : 'false');
        return endpoint.href;
      })()
    : targetUrl;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), useScrapingBee ? Math.max(timeoutMs, 40000) : timeoutMs);
  try {
    const response = await fetch(requestUrl, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersResearch/1.0; +https://opentibiaservers.com)',
        accept: 'text/html,application/xhtml+xml',
        ...(useScrapingBee ? { Authorization: `Bearer ${scrapingBeeKey}` } : {}),
      },
    });
    if (!response.ok) return {
      html: '',
      finalUrl: targetUrl,
      status: response.status,
      fetched_via: useScrapingBee ? 'scrapingbee_html_api' : 'direct',
    };
    return {
      html: await response.text(),
      finalUrl: useScrapingBee ? (response.headers.get('spb-resolved-url') || targetUrl) : response.url,
      status: response.status,
      fetched_via: useScrapingBee ? 'scrapingbee_html_api' : 'direct',
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function mapLimit(items, limit, worker) {
  let cursor = 0;
  const results = new Array(items.length);
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

const groups = new Map();
for (const server of liveInventory.servers || []) addToGroup(groups, server, 'directory');
for (const server of topOtservlistServers) addToGroup(groups, server, 'directory');
for (const record of community_archiveData.records || []) {
  addToGroup(groups, {
    ...record,
    name: record.server_name,
    website_url: record.official_website_url,
    host: sourceHost(record),
    thread_role: 'owner_launch',
  }, 'community_archive');
}
for (const [slug, record] of Object.entries(verifiedSources)) {
  addToGroup(groups, {
    ...record,
    slug,
    server_name: record.name,
    thread_role: 'owner_launch',
  }, 'community_archive');
}
for (const record of discovered.records || []) {
  if (!record.selected_url) continue;
  addToGroup(groups, {
    slug: record.canonical_slug,
    name: record.server_name,
    server_name: record.server_name,
    title: record.selected_title,
    source_url: record.selected_url,
    first_post_excerpt: record.selected_snippet,
    discovery_score: record.candidates?.[0]?.score ?? null,
    discovery_query: record.query,
    discovered_via: record.search_provider || discovered.search_provider || null,
    thread_role: record.selected_role || 'owner_launch',
    host: record.root_domain,
    imported_at: record.searched_at,
  }, 'community_archive');
}

const entries = [...groups.values()].sort((a, b) => a.name.localeCompare(b.name));
const previousBySlug = new Map((previousResearch.servers || []).map((entry) => [entry.slug, entry]));
for (const entry of entries) {
  entry.aliases = [...new Set(entry.aliases.filter(Boolean))];
  entry.community_archive_threads = [...new Map(entry.community_archive_threads
    .filter((thread) => thread.source_url)
    .map((thread) => [thread.source_url, thread])).values()]
    .sort((a, b) => String(b.posted_at || '').localeCompare(String(a.posted_at || '')))
    .slice(0, 8);
  const officialPagesByUrl = new Map();
  for (const page of entry.official_pages.filter((candidate) => candidate.url)) {
    const existingPage = officialPagesByUrl.get(page.url);
    const candidateSources = [...new Set([
      ...(existingPage?.candidate_sources || [existingPage?.candidate_source].filter(Boolean)),
      ...(page.candidate_sources || [page.candidate_source].filter(Boolean)),
    ])];
    officialPagesByUrl.set(page.url, { ...existingPage, ...page, candidate_sources: candidateSources });
  }
  entry.official_pages = [...officialPagesByUrl.values()];
  if (!entry.official_pages.length && entry.root_domain && !/^\d{1,3}(?:\.\d{1,3}){3}$/.test(entry.root_domain)) {
    entry.official_pages.push({
      url: `https://${entry.root_domain}/`,
      derived_from_root_domain: true,
      candidate_source: 'derived_root_domain',
      candidate_sources: ['derived_root_domain'],
    });
  }
  entry.official_pages = entry.official_pages
    .map((page) => ({ ...page, candidate_priority: officialPageCandidatePriority(page, entry) }))
    .sort((left, right) => right.candidate_priority - left.candidate_priority)
    .slice(0, 3);

  const prior = previousBySlug.get(entry.slug);
  const priorThreads = new Map((prior?.community_archive_threads || []).map((thread) => [threadKey(thread.source_url), thread]));
  entry.community_archive_threads = entry.community_archive_threads.map((thread) => {
    const cached = priorThreads.get(threadKey(thread.source_url));
    return cached ? { ...thread, posts: cached.posts || [], fetch_status: cached.fetch_status ?? null, fetch_provider: cached.fetch_provider || null } : thread;
  });
  const priorPages = new Map((prior?.official_pages || []).flatMap((page) => [
    [page.url, page],
    [officialPageKey(page.url), page],
  ]));
  entry.official_pages = entry.official_pages.map((page) => {
    const cached = priorPages.get(page.url) || priorPages.get(officialPageKey(page.url));
    return cached ? { ...page, ...cached } : page;
  }).map((page) => applyOfficialMetadataAssessment(page, entry));
}

if (shouldFetch) {
  const threadJobs = fetchThreadPages
    ? entries.flatMap((entry) => entry.community_archive_threads.slice(0, 2)
      .filter((thread) => thread.fetch_status !== 200)
      .map((thread) => ({ entry, thread })))
    : [];
  await mapLimit(threadJobs, concurrency, async ({ thread }, index) => {
    const result = await fetchText(thread.source_url);
    thread.posts = result ? parsePosts(result.html, thread.source_url) : [];
    thread.fetch_status = result?.status || null;
    thread.fetch_provider = result?.fetched_via || null;
    if ((index + 1) % 20 === 0) console.log(`community_archive\t${index + 1}/${threadJobs.length}`);
  });

  const officialJobs = fetchOfficialPages
    ? entries.map((entry) => ({
      entry,
      pages: entry.official_pages
        .filter((page) => renderOfficialPages
          ? page.fetch_status === 200 && !page.description
          : proxyOfficialPages ? !page.description : page.fetch_status !== 200)
        .slice(0, proxyOfficialPages ? 2 : 1),
    })).filter(({ entry, pages }) => pages.length && !entry.official_pages.some((page) => page.relevance_status === 'accepted'))
    : [];
  await mapLimit(officialJobs, concurrency, async ({ entry, pages }, index) => {
    for (const page of pages) {
      const result = await fetchText(page.url, { forceProxy: proxyOfficialPages, renderJs: renderOfficialPages });
      Object.assign(page, result ? extractOfficialMetadata(result.html, result.finalUrl, entry) : {
        title: '', description: '', image: '', metadata_schema_version: 2, extraction_status: 'fetch_failed',
      });
      page.fetch_status = result?.status || null;
      page.fetch_provider = result?.fetched_via || null;
      Object.assign(page, applyOfficialMetadataAssessment(page, entry));
      if (page.relevance_status === 'accepted') break;
    }
    if ((index + 1) % 20 === 0) console.log(`official\t${index + 1}/${officialJobs.length}`);
  });
}

for (const entry of entries) {
  entry.official_pages = entry.official_pages.map((page) => applyOfficialMetadataAssessment(page, entry));
  const ownerThreads = entry.community_archive_threads.filter((thread) => thread.thread_role !== 'community_discussion');
  const ownerThreadAuthors = new Set(ownerThreads
    .map((thread) => thread.author || thread.posts?.[0]?.author)
    .filter(Boolean));
  entry.owner_excerpt = ownerThreads
    .flatMap((thread) => (thread.posts?.length ? thread.posts : [normalizedArchivedPost(thread)].filter(Boolean)))
    .find((post) => ownerThreadAuthors.has(post.author)) || null;
  const communityPosts = entry.community_archive_threads.flatMap((thread) => {
    const posts = thread.posts || [];
    if (thread.thread_role === 'community_discussion') return posts;
    const owner = thread.author || posts[0]?.author;
    return posts.filter((post) => post.author !== owner);
  });
  entry.community_excerpts = communityPosts
    .map((post) => ({ ...post, relevance_score: Number(communityScore(post).toFixed(2)) }))
    // A normal-length post scores at most four points on length alone. Requiring
    // seven keeps short reactions and generic bumps out while retaining posts
    // that contain first-person or concrete gameplay/community language.
    .filter((post) => post.relevance_score >= 7)
    .sort((left, right) => right.relevance_score - left.relevance_score)
    .slice(0, 3);
  entry.source_signals = [...new Set(signalsFor([
    ...entry.official_pages.map((page) => page.description || ''),
    ...entry.community_archive_threads.flatMap((thread) => [
      thread.title || '',
      thread.first_post_excerpt || '',
      ...(thread.posts || []).map((post) => post.excerpt || ''),
    ]),
  ].join(' ')))].slice(0, 10);
  entry.summary = evidenceSummary(entry);
  entry.source_status = entry.official_pages.some((page) => page.description)
    ? 'official'
    : entry.owner_excerpt
      ? 'owner_thread'
      : entry.community_excerpts.length
        ? 'community_thread'
        : 'insufficient';
  if (entry.source_status === 'insufficient') entry.summary = null;
}

const output = {
  generated_at: new Date().toISOString(),
  policy: 'Official metadata and attributed community_archive posts only. No unsourced claims or synthetic player experiences.',
  stats: {
    canonical_servers: entries.length,
    with_summary: entries.filter((entry) => entry.summary).length,
    with_owner_thread: entries.filter((entry) => entry.community_archive_threads.some((thread) => thread.thread_role !== 'community_discussion')).length,
    with_community_excerpts: entries.filter((entry) => entry.community_excerpts.length).length,
    with_official_metadata: entries.filter((entry) => entry.official_pages.some((page) => page.description)).length,
    insufficient: entries.filter((entry) => entry.source_status === 'insufficient').length,
  },
  servers: entries,
};

if (!dryRun) fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
const excerptManifest = Object.fromEntries(entries.map((entry) => {
  const official = entry.official_pages.find((page) => page.description);
  const ownerThread = entry.community_archive_threads.find((thread) => thread.thread_role !== 'community_discussion');
  const thread = ownerThread || entry.community_archive_threads[0];
  const owner = entry.owner_excerpt;
  const community = entry.community_excerpts[0];
  const researchSources = [
    official?.url ? { type: 'official_website', url: official.url, label: `${entry.name} official website` } : null,
    ...entry.community_archive_threads.slice(0, 3).map((item) => item.source_url ? {
      type: item.thread_role === 'community_discussion' ? 'community_forum' : 'owner_thread',
      url: item.source_url,
      label: item.thread_role === 'community_discussion' ? `${entry.name} community_archive discussion` : `${entry.name} owner thread on community_archive`,
    } : null),
    ...entry.community_excerpts.map((post) => post.source_url ? {
      type: 'community_post',
      url: post.source_url,
      label: `community_archive post by ${post.author}`,
    } : null),
  ].filter(Boolean).filter((source, index, all) => all.findIndex((candidate) => candidate.url === source.url) === index);
  return [entry.slug, {
    name: entry.name,
    official_summary: entry.summary,
    official_excerpt: official?.description || null,
    official_summary_source_url: official?.url || null,
    official_excerpt_source_url: official?.url || null,
    owner_excerpt: attributedExcerpt(owner),
    source_owner_name: owner?.author || ownerThread?.author || null,
    community_excerpt: attributedExcerpt(community),
    community_excerpts: entry.community_excerpts.map((post) => ({
      author: post.author,
      posted_at_label: post.posted_at_label || null,
      excerpt: post.excerpt,
      source_url: post.source_url,
    })),
    community_excerpt_author: community?.author || null,
    community_excerpt_date: community?.posted_at_label || null,
    source_features: entry.source_signals || [],
    source_url: thread?.source_url || official?.url || null,
    website_url: official?.url || entry.official_pages[0]?.url || null,
    research_sources: researchSources,
    research_status: entry.source_status,
    official_last_researched_at: output.generated_at,
  }];
}));
if (!dryRun) fs.writeFileSync(excerptManifestPath, `${JSON.stringify(excerptManifest, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ ...output.stats, dry_run: dryRun }, null, 2));
