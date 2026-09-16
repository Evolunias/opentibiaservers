import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = new URL(process.argv[2] || process.env.LINK_AUDIT_BASE_URL || 'http://127.0.0.1:3019');
const manifestPath = path.join(root, '.next', 'prerender-manifest.json');
const concurrency = Math.max(1, Number(process.env.LINK_AUDIT_CONCURRENCY || 24));
const ownHosts = new Set(['opentibiaservers.com', 'www.opentibiaservers.com', baseUrl.hostname]);

if (!fs.existsSync(manifestPath)) {
  console.error('Missing .next/prerender-manifest.json. Run npm run build first.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const seedRoutes = Object.keys(manifest.routes)
  .filter((route) => route !== '/_not-found')
  .sort();
const internalTargets = new Set(seedRoutes);
const sourceByTarget = new Map();
const malformed = [];
const routeFailures = [];
const hrefPattern = /\bhref=(?:&quot;|["'])(.*?)(?:&quot;|["'])/gi;

function decodeHref(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&#x2F;', '/')
    .replaceAll('&#47;', '/')
    .replaceAll('&quot;', '"')
    .trim();
}

function normalizeInternalHref(raw, sourceRoute) {
  const href = decodeHref(raw);
  if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript|data):/i.test(href)) return null;

  let parsed;
  try {
    parsed = new URL(href, new URL(sourceRoute, baseUrl));
  } catch {
    malformed.push(`${sourceRoute} -> ${href} (invalid URL)`);
    return null;
  }

  if (!ownHosts.has(parsed.hostname.toLowerCase())) return null;
  if (/^\/\//.test(parsed.pathname)) {
    malformed.push(`${sourceRoute} -> ${href} (double-slash path)`);
    return null;
  }
  if (parsed.pathname.startsWith('/_next/') || parsed.pathname.startsWith('/api/')) return null;
  if (/\.(?:avif|css|gif|ico|jpe?g|js|json|map|png|svg|txt|webmanifest|webp|xml)$/i.test(parsed.pathname)) return null;
  return parsed.pathname.replace(/\/$/, '') || '/';
}

async function request(route, method = 'GET') {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(new URL(route, baseUrl), {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'OpenTibiaServers rendered-link audit' },
    });
    return response;
  } finally {
    clearTimeout(timeout);
  }
}

async function mapConcurrent(values, worker) {
  let cursor = 0;
  const results = new Array(values.length);
  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, async () => {
    while (cursor < values.length) {
      const index = cursor++;
      results[index] = await worker(values[index], index);
    }
  }));
  return results;
}

await mapConcurrent(seedRoutes, async (route) => {
  try {
    const response = await request(route);
    if (response.status >= 400) {
      routeFailures.push(`${route} -> HTTP ${response.status}`);
      return;
    }
    const html = await response.text();
    for (const match of html.matchAll(hrefPattern)) {
      const target = normalizeInternalHref(match[1], route);
      if (target) {
        internalTargets.add(target);
        if (!sourceByTarget.has(target)) sourceByTarget.set(target, route);
      }
    }
  } catch (error) {
    routeFailures.push(`${route} -> ${error.name === 'AbortError' ? 'timeout' : error.message}`);
  }
});

const allTargets = [...internalTargets].sort();
const discoveredTargets = allTargets.filter((route) => !seedRoutes.includes(route));
await mapConcurrent(discoveredTargets, async (route) => {
  try {
    const response = await request(route);
    if (response.status >= 400) routeFailures.push(`${route} -> HTTP ${response.status} (linked from ${sourceByTarget.get(route) || 'unknown'})`);
  } catch (error) {
    routeFailures.push(`${route} -> ${error.name === 'AbortError' ? 'timeout' : error.message} (linked from ${sourceByTarget.get(route) || 'unknown'})`);
  }
});

const uniqueFailures = [...new Set(routeFailures)].sort();
const uniqueMalformed = [...new Set(malformed)].sort();
console.log(JSON.stringify({
  status: uniqueFailures.length || uniqueMalformed.length ? 'failed' : 'passed',
  prerenderedRoutesChecked: seedRoutes.length,
  uniqueInternalTargetsChecked: allTargets.length,
  malformedInternalLinks: uniqueMalformed.length,
  failedInternalTargets: uniqueFailures.length,
}, null, 2));

for (const issue of uniqueMalformed) console.error(`Malformed: ${issue}`);
for (const issue of uniqueFailures) console.error(`Broken: ${issue}`);
if (uniqueFailures.length || uniqueMalformed.length) process.exitCode = 1;
