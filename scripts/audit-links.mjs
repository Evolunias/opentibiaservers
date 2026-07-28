import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assessExternalLink } from '../lib/external-links.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scanRoots = ['app', 'lib', 'scripts'];
const extensions = new Set(['.js', '.jsx', '.mjs']);
const ownDomains = new Set(['opentibiaservers.com', 'www.opentibiaservers.com']);
const ignoredDomains = new Set(['schema.org', 'placeholder.supabase.co']);
const ignoredFiles = new Set([
  path.normalize('lib/external-links.js'),
  path.normalize('scripts/audit-links.mjs'),
]);
const urlPattern = /https?:\/\/[^\s"'`<>)\]}]+/g;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    if (entry.isFile() && extensions.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

const failures = [];
let checked = 0;

for (const rootName of scanRoots) {
  const base = path.join(root, rootName);
  if (!fs.existsSync(base)) continue;
  for (const file of walk(base)) {
    const relative = path.relative(root, file);
    if (ignoredFiles.has(path.normalize(relative))) continue;
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(urlPattern) || [];
    for (const raw of matches) {
      const value = raw.replace(/[.,;:]+$/g, '');
      let parsed;
      try {
        parsed = new URL(value);
      } catch {
        continue;
      }
      const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
      if (ownDomains.has(host) || ignoredDomains.has(host)) continue;
      checked += 1;
      const result = assessExternalLink(value, { allowUntrusted: true });
      if (!result.clickable) {
        failures.push(`${relative}: ${value} -> ${result.reason}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Blocked or unverified outbound links found (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Outbound link audit passed: ${checked} external URLs checked.`);
