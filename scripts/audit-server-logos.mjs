import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import logoManifest from '../data/server-logo-manifest.json' with { type: 'json' };
import liveInventory from '../data/live-server-inventory.json' with { type: 'json' };
import { collapseCanonicalServers } from '../lib/server-identity.js';
import { buildServerLogoFallback, getServerLogo } from '../lib/server-logos.js';
import { classifyLogoFilename, validateLogoCandidate } from './lib/server-logo-assets.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicLogoRoot = path.join(repoRoot, 'public', 'images', 'server-logos');
const failures = [];
const hashes = new Map();

function fail(condition, message) {
  if (!condition) failures.push(message);
}

const manifestAssets = new Set();
for (const [slug, entry] of Object.entries(logoManifest.entries || {})) {
  const downloadedPath = path.join('public', entry.src.replace(/^\//, ''));
  const result = validateLogoCandidate({ slug, downloaded_path: downloadedPath, ...entry }, { repoRoot });
  fail(result.ok, `${slug}: ${result.reasons.join(',')}`);
  if (!result.ok) continue;

  fail(entry.width === result.metadata.width && entry.height === result.metadata.height, `${slug}: manifest dimensions do not match file`);
  fail(entry.sha256 === result.metadata.sha256, `${slug}: manifest SHA-256 does not match file`);
  manifestAssets.add(entry.src);

  const duplicate = hashes.get(entry.sha256);
  fail(!duplicate || entry.allow_shared_brand, `${slug}: duplicates ${duplicate} without allow_shared_brand`);
  hashes.set(entry.sha256, slug);
}

const excludedAssets = new Set(Object.keys(logoManifest.excluded_assets || {}));
for (const src of excludedAssets) {
  fail(fs.existsSync(path.join(repoRoot, 'public', src.replace(/^\//, ''))), `${src}: excluded asset is missing`);
  fail(!manifestAssets.has(src), `${src}: excluded asset is also eligible`);
}

for (const file of fs.readdirSync(publicLogoRoot, { withFileTypes: true }).filter((entry) => entry.isFile())) {
  const src = `/images/server-logos/${file.name}`;
  fail(manifestAssets.has(src) || excludedAssets.has(src), `${src}: unclassified local logo asset`);
}

const filenamePolicyTests = [
  ['pixel.gif', true],
  ['favicon.png', true],
  ['loading-spinner.webp', true],
  ['server-screenshot.jpg', true],
  ['realera-logo.png', false],
];
for (const [filename, shouldReject] of filenamePolicyTests) {
  fail(Boolean(classifyLogoFilename(filename)) === shouldReject, `${filename}: filename policy self-test failed`);
}

const canonicalServers = collapseCanonicalServers(liveInventory.servers || []);
const fallbackSignatures = new Set();
let primaryCount = 0;
let fallbackCount = 0;

for (const server of canonicalServers) {
  const resolved = getServerLogo(server);
  if (resolved.type === 'primary') {
    primaryCount += 1;
    fail(manifestAssets.has(resolved.src), `${server.slug}: resolved an asset outside the eligible manifest`);
    fail(!excludedAssets.has(resolved.src), `${server.slug}: resolved an excluded asset`);
    continue;
  }

  fallbackCount += 1;
  const repeated = buildServerLogoFallback(server);
  fail(resolved.signature === repeated.signature, `${server.slug}: fallback is not deterministic`);
  fail(!fallbackSignatures.has(resolved.signature), `${server.slug}: fallback signature is not distinct`);
  fallbackSignatures.add(resolved.signature);
}

fail(primaryCount + fallbackCount === canonicalServers.length, 'not every canonical server resolved a logo');

console.log(`manifest_primary_assets\t${manifestAssets.size}`);
console.log(`excluded_assets\t${excludedAssets.size}`);
console.log(`canonical_live_servers\t${canonicalServers.length}`);
console.log(`primary_logo_resolutions\t${primaryCount}`);
console.log(`deterministic_fallbacks\t${fallbackCount}`);
console.log(`distinct_fallback_signatures\t${fallbackSignatures.size}`);
console.log(`failures\t${failures.length}`);

for (const failure of failures) console.error(`failure\t${failure}`);
if (failures.length) process.exitCode = 1;
