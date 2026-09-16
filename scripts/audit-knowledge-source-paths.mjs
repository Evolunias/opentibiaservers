import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { knowledgeSourceRegistry } from '../lib/knowledge-sources.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogFiles = ['items.json', 'monsters.json', 'spells.json']
  .map((name) => path.join(root, 'data', 'knowledge', name));
const urls = new Set(Object.values(knowledgeSourceRegistry).map((source) => source.href));
const failures = [];

function collectUrls(value) {
  if (typeof value === 'string') {
    if (/^https?:\/\//i.test(value)) urls.add(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectUrls(item);
    return;
  }
  if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectUrls(item);
  }
}

for (const file of catalogFiles) collectUrls(JSON.parse(fs.readFileSync(file, 'utf8')));

const treeResponse = await fetch('https://api.github.com/repos/otland/forgottenserver/git/trees/v1.6?recursive=1', {
  headers: { 'user-agent': 'OpenTibiaServers knowledge-source audit' },
});
if (!treeResponse.ok) {
  console.error(`Unable to load the official TFS v1.6 tree: HTTP ${treeResponse.status}`);
  process.exit(1);
}
const tree = await treeResponse.json();
const tfsPaths = new Set((tree.tree || []).map((entry) => entry.path));
let githubSources = 0;
let officialTibiaSources = 0;

for (const value of urls) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    failures.push(`${value} -> invalid URL`);
    continue;
  }

  if (['opentibiaservers.com', 'www.opentibiaservers.com'].includes(parsed.hostname) && parsed.pathname.startsWith('//')) {
    failures.push(`${value} -> malformed first-party double-slash path`);
    continue;
  }

  if (parsed.hostname === 'github.com' && parsed.pathname.startsWith('/otland/forgottenserver/')) {
    const match = parsed.pathname.match(/^\/otland\/forgottenserver\/blob\/v1\.6\/(.+)$/);
    if (match) {
      githubSources += 1;
      const sourcePath = decodeURIComponent(match[1]);
      if (!tfsPaths.has(sourcePath)) failures.push(`${value} -> path absent from the official v1.6 tree`);
    } else if (parsed.pathname !== '/otland/forgottenserver/releases/tag/v1.6' &&
               !['/otland/forgottenserver', '/otland/forgottenserver/releases', '/otland/forgottenserver/wiki'].includes(parsed.pathname.replace(/\/$/, ''))) {
      failures.push(`${value} -> unsupported TFS GitHub route`);
    }
  }

  if (parsed.hostname.endsWith('tibia.com')) {
    officialTibiaSources += 1;
    if (!['/gameguides/', '/library/'].includes(parsed.pathname)) {
      failures.push(`${value} -> unsupported official Tibia reference path`);
    }
  }
}

console.log(JSON.stringify({
  status: failures.length ? 'failed' : 'passed',
  uniqueKnowledgeUrls: urls.size,
  tfsBlobUrlsChecked: githubSources,
  officialTibiaUrlsChecked: officialTibiaSources,
  invalidOrMissingTargets: failures.length,
}, null, 2));
for (const failure of failures) console.error(`- ${failure}`);
if (failures.length) process.exitCode = 1;
