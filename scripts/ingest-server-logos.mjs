import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toManifestEntry, validateLogoCandidate } from './lib/server-logo-assets.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const write = process.argv.includes('--write');
const writeAccepted = process.argv.includes('--write-accepted');
const candidatesArg = process.argv.find((argument) => argument.startsWith('--candidates='));
const candidatesPath = path.resolve(repoRoot, candidatesArg?.slice('--candidates='.length) || 'data/server-logo-candidates.json');
const manifestPath = path.join(repoRoot, 'data', 'server-logo-manifest.json');
const publicLogoRoot = path.join(repoRoot, 'public', 'images', 'server-logos');

const candidateDocument = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
const currentManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const accepted = [];
const rejected = [];
const seenHashes = new Map();

for (const candidate of candidateDocument.candidates || []) {
  const result = validateLogoCandidate(candidate, { repoRoot });
  if (!result.ok) {
    rejected.push({ slug: candidate.slug || '-', reasons: result.reasons });
    continue;
  }

  const duplicate = seenHashes.get(result.metadata.sha256);
  if (duplicate && !candidate.allow_shared_brand) {
    rejected.push({ slug: candidate.slug, reasons: [`duplicate_asset_with_${duplicate}`] });
    continue;
  }
  seenHashes.set(result.metadata.sha256, candidate.slug);

  const destinationName = candidate.target_filename || `${candidate.slug}${result.metadata.extension === '.jpeg' ? '.jpg' : result.metadata.extension}`;
  const destinationPath = path.join(publicLogoRoot, destinationName);
  const src = `/images/server-logos/${destinationName}`;
  accepted.push({ candidate, result, destinationPath, entry: toManifestEntry(candidate, result.metadata, src) });
}

console.log(`candidates\t${(candidateDocument.candidates || []).length}`);
console.log(`accepted\t${accepted.length}`);
console.log(`rejected\t${rejected.length}`);
for (const item of rejected) console.error(`reject\t${item.slug}\t${item.reasons.join(',')}`);

if (rejected.length && !writeAccepted) process.exitCode = 1;

if ((write || writeAccepted) && (!rejected.length || writeAccepted)) {
  fs.mkdirSync(publicLogoRoot, { recursive: true });
  const entries = { ...(currentManifest.entries || {}) };

  for (const item of accepted) {
    if (path.resolve(item.result.filePath) !== path.resolve(item.destinationPath)) {
      if (fs.existsSync(item.destinationPath)) {
        const existing = fs.readFileSync(item.destinationPath);
        const incoming = fs.readFileSync(item.result.filePath);
        if (!existing.equals(incoming)) throw new Error(`Refusing to overwrite different asset: ${item.destinationPath}`);
      } else {
        fs.copyFileSync(item.result.filePath, item.destinationPath, fs.constants.COPYFILE_EXCL);
      }
    }
    entries[item.candidate.slug] = item.entry;
  }

  const nextManifest = { ...currentManifest, entries };
  fs.writeFileSync(manifestPath, `${JSON.stringify(nextManifest, null, 2)}\n`, 'utf8');
  console.log(`manifest_written\t${path.relative(repoRoot, manifestPath)}`);
} else {
  console.log('mode\tdry-run');
}
