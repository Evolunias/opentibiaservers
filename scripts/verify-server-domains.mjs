import fs from 'node:fs';
import path from 'node:path';
import { collapseCanonicalServers, getRootDomain, getRootDomainLabel } from '../lib/server-identity.js';

const repoRoot = process.cwd();
const inventory = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'live-server-inventory.json'), 'utf8'));
const research = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'server-source-research.json'), 'utf8'));
const outputPath = path.join(repoRoot, 'data', 'server-domain-status.json');
const previous = fs.existsSync(outputPath)
  ? JSON.parse(fs.readFileSync(outputPath, 'utf8'))
  : { records: [] };

const shouldFetch = process.argv.includes('--fetch');
const shouldWrite = process.argv.includes('--write');
const includeAll = process.argv.includes('--all');
const resumeIncomplete = process.argv.includes('--resume-incomplete');
const scrapingBeeKey = String(process.env.SCRAPINGBEE_API_KEY || '').trim();
const concurrency = Math.max(1, Math.min(6, Number(process.env.DOMAIN_CHECK_CONCURRENCY || 4)));
const timeoutMs = Math.max(5000, Math.min(30000, Number(process.env.DOMAIN_CHECK_TIMEOUT_MS || 12000)));

const DIRECTORY_DOMAINS = new Set([
  'discord.com', 'discord.gg', 'facebook.com', 'github.com', 'instagram.com', 'linkedin.com',
  'opentibiabr.com', 'opentibiaservers.com', 'community_archive.net', 'otservlist.org', 'reddit.com',
  'opentibiaserver.com', 'ots-list.org', 'otserv.com.br', 'otservers.online', 'tibiaking.com',
  'tibia.com', 'tibiaotlist.com', 'twitch.tv', 'x.com', 'youtube.com',
]);
const PARKED_OR_ERROR = /\b(?:domain (?:is )?for sale|buy this domain|parked domain|sedo|hugedomains|default web site page|website not found|404 not found|403 forbidden|index of \/|this site can(?:not|'t) be reached|server not found)\b/i;
const GAME_CONTEXT = /\b(?:open\s*tibia|tibia|ot\s*server|otserver|ots\b|baiak|yurots|mmorpg|pvp|guild|vocation|quest|client|character|world)\b/i;

function compact(value = '') {
  return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function unique(items = []) {
  return [...new Set(items.filter(Boolean))];
}

function isIp(value = '') {
  return /^\d{1,3}(?:\.\d{1,3}){3}$/.test(String(value));
}

function pageText(html = '') {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 4000);
}

function cleanGoogleResult(result = {}) {
  return {
    title: String(result.title || '').slice(0, 220),
    url: String(result.url || result.link || '').slice(0, 1000),
    description: String(result.description || result.snippet || '').slice(0, 500),
  };
}

function organicResults(payload = {}) {
  return (payload.organic_results || payload.results || [])
    .map(cleanGoogleResult)
    .filter((result) => /^https?:\/\//i.test(result.url))
    .slice(0, 10);
}

function sameOrChildDomain(url = '', domain = '') {
  const resultRoot = getRootDomain(url);
  return Boolean(resultRoot && domain && resultRoot === domain);
}

function identityVariants(server = {}) {
  const rootLabel = getRootDomainLabel(server.root_domain || server.host || server.ip || '');
  return unique([server.name, rootLabel, ...(server.identity_aliases || [])])
    .map(compact)
    .filter((value) => value.length >= 5 && !['server', 'global', 'tibia', 'world'].includes(value));
}

function successorResults(results = [], server = {}) {
  const currentRoot = getRootDomain(server.root_domain || server.host || server.ip || '');
  const identities = identityVariants(server);
  return results.filter((result) => {
    const resultRoot = getRootDomain(result.url);
    if (!resultRoot || resultRoot === currentRoot || DIRECTORY_DOMAINS.has(resultRoot)) return false;
    const combined = `${result.title} ${result.description} ${result.url}`;
    const compactCombined = compact(combined);
    return identities.some((identity) => compactCombined.includes(identity)) && GAME_CONTEXT.test(combined);
  }).slice(0, 5);
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
  await Promise.all(Array.from({ length: Math.min(items.length, limit) }, run));
  return results;
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(timer);
  }
}

async function checkCurrentDomain(server) {
  const rootDomain = getRootDomain(server.root_domain || server.host || server.ip || '');
  const attempts = [];
  for (const scheme of ['https', 'http']) {
    const url = `${scheme}://${rootDomain}/`;
    try {
      const response = await fetchWithTimeout(url, {
        headers: {
          'user-agent': 'Mozilla/5.0 (compatible; OpenTibiaServersAvailability/1.0; +https://opentibiaservers.com)',
          accept: 'text/html,application/xhtml+xml',
        },
      });
      const body = await response.text();
      const text = pageText(body);
      const parked = PARKED_OR_ERROR.test(text);
      attempts.push({
        url,
        status: response.status,
        final_url: response.url,
        final_root_domain: getRootDomain(response.url),
        reachable: response.ok,
        parked_or_error_page: parked,
      });
      if (response.ok && !parked) return { reachable: true, parked: false, attempts };
    } catch (error) {
      attempts.push({ url, status: null, reachable: false, error: error?.name || 'fetch_error' });
    }
  }
  return { reachable: false, parked: attempts.some((attempt) => attempt.parked_or_error_page), attempts };
}

async function googleSearch(query) {
  if (!scrapingBeeKey) return { status: null, error: 'missing_scrapingbee_api_key', results: [] };
  const endpoint = new URL('https://app.scrapingbee.com/api/v1/google');
  endpoint.searchParams.set('search', query);
  endpoint.searchParams.set('light_request', 'true');
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetchWithTimeout(endpoint, {
        headers: { Authorization: `Bearer ${scrapingBeeKey}`, accept: 'application/json' },
      });
      const body = await response.text();
      if (response.ok) {
        const payload = JSON.parse(body);
        return { status: response.status, request_id: response.headers.get('spb-request-id'), results: organicResults(payload) };
      }
      lastError = `http_${response.status}`;
      if (![429, 500, 502, 503, 504].includes(response.status)) break;
    } catch (error) {
      lastError = error?.name || 'fetch_error';
    }
    await new Promise((resolve) => setTimeout(resolve, 750 * attempt));
  }
  return { status: null, error: lastError || 'google_search_failed', results: [] };
}

function researchHasEvidence(entry = {}) {
  return entry.source_status && entry.source_status !== 'insufficient';
}

const researchBySlug = new Map((research.servers || []).map((entry) => [entry.slug, entry]));
const previousBySlug = new Map((previous.records || []).map((entry) => [entry.slug, entry]));
const canonicalServers = collapseCanonicalServers(inventory.servers || []);
const candidates = canonicalServers.filter((server) => {
  if (includeAll) return true;
  return !researchHasEvidence(researchBySlug.get(server.slug));
});

const records = await mapLimit(candidates, concurrency, async (server, index) => {
  const rootDomain = getRootDomain(server.root_domain || server.host || server.ip || '');
  const prior = previousBySlug.get(server.slug);
  if (resumeIncomplete && prior && prior.status !== 'verification_incomplete') return prior;
  if (!shouldFetch && prior) return prior;
  if (!rootDomain || isIp(rootDomain)) {
    return {
      slug: server.slug,
      name: server.name,
      root_domain: rootDomain || null,
      status: 'manual_review_ip_or_missing_domain',
      exclude_from_directory: false,
      checked_at: new Date().toISOString(),
    };
  }

  const availability = await checkCurrentDomain(server);
  if (availability.reachable) {
    const finalRoot = availability.attempts.find((attempt) => attempt.reachable)?.final_root_domain;
    const changedDomain = finalRoot && finalRoot !== rootDomain ? finalRoot : null;
    return {
      slug: server.slug,
      name: server.name,
      root_domain: rootDomain,
      status: changedDomain ? 'active_redirected_domain' : 'active_current_domain',
      successor_domain: changedDomain,
      exclude_from_directory: false,
      availability,
      checked_at: new Date().toISOString(),
    };
  }

  const siteSearch = await googleSearch(`site:${rootDomain}`);
  const indexedCurrent = siteSearch.results.filter((result) => sameOrChildDomain(result.url, rootDomain));
  let identitySearch = { status: null, results: [] };
  let successors = [];
  if (!indexedCurrent.length && siteSearch.status === 200) {
    identitySearch = await googleSearch(`\"${server.name}\" \"Open Tibia\" OR OTServer`);
    successors = successorResults(identitySearch.results, server);
  }

  let status = 'verification_incomplete';
  if (indexedCurrent.length) status = 'inactive_but_google_indexed';
  else if (successors.length) status = 'successor_candidate';
  else if (siteSearch.status === 200 && identitySearch.status === 200) status = 'verified_inactive_no_successor';

  const record = {
    slug: server.slug,
    name: server.name,
    root_domain: rootDomain,
    status,
    successor_domain: successors[0] ? getRootDomain(successors[0].url) : null,
    exclude_from_directory: status === 'verified_inactive_no_successor',
    availability,
    google_site_search: siteSearch,
    google_identity_search: identitySearch,
    successor_candidates: successors,
    checked_at: new Date().toISOString(),
  };
  if ((index + 1) % 20 === 0) console.log(`verified\t${index + 1}/${candidates.length}`);
  return record;
});

const untouched = includeAll
  ? []
  : (previous.records || []).filter((record) => !records.some((candidate) => candidate.slug === record.slug));
const allRecords = [...untouched, ...records].sort((left, right) => left.name.localeCompare(right.name));
const stats = {
  canonical_live_servers: canonicalServers.length,
  checked_records: allRecords.length,
  current_active: allRecords.filter((record) => record.status === 'active_current_domain').length,
  redirected_active: allRecords.filter((record) => record.status === 'active_redirected_domain').length,
  inactive_but_indexed: allRecords.filter((record) => record.status === 'inactive_but_google_indexed').length,
  successor_candidates: allRecords.filter((record) => record.status === 'successor_candidate').length,
  verified_inactive_no_successor: allRecords.filter((record) => record.status === 'verified_inactive_no_successor').length,
  verification_incomplete: allRecords.filter((record) => record.status === 'verification_incomplete').length,
  manual_review_ip_or_missing_domain: allRecords.filter((record) => record.status === 'manual_review_ip_or_missing_domain').length,
};
const output = {
  generated_at: new Date().toISOString(),
  policy: 'Listings are excluded only after both HTTPS and HTTP fail or return parked/error content, Google has no exact-domain result, and a second Google identity search finds no credible successor.',
  stats,
  records: allRecords,
};

if (shouldWrite) fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ ...stats, mode: shouldWrite ? 'write' : 'dry_run' }, null, 2));
