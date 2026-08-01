import fs from 'node:fs';
import path from 'node:path';

const roots = ['app', 'lib'];
const extensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.md']);
const blockedSourceBrands = [
  ['Tibia', 'Wiki'].join(''),
  ['Tibia', ' Wiki'].join(''),
  ['Fan', 'dom'].join(''),
];
const derivativeWikiTerms = [
  ['wiki', '-style'].join(''),
  ['source-linked ', 'wiki'].join(''),
  ['wiki ', 'shell'].join(''),
  ['Wiki ', 'status'].join(''),
];
const weakEmptyStates = [
  ['No official summary has been ', 'collected'].join(''),
  ['No screenshots ', 'yet'].join(''),
  ['No reviews ', 'yet'].join(''),
  ['No conversation ', 'yet'].join(''),
];
const blockedPatterns = [
  { pattern: new RegExp(`\\b(?:${blockedSourceBrands.join('|')})\\b`, 'i'), reason: 'visible source-brand wording' },
  { pattern: new RegExp(derivativeWikiTerms.join('|'), 'i'), reason: 'derivative wiki phrasing' },
  { pattern: /\b(lorem ipsum|dummy content|mock content)\b/i, reason: 'placeholder content' },
  { pattern: new RegExp(weakEmptyStates.join('|'), 'i'), reason: 'thin empty-state copy' },
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (!extensions.has(path.extname(entry.name))) return [];
    return [fullPath];
  });
}

const failures = [];

for (const root of roots) {
  for (const file of walk(root)) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const rule of blockedPatterns) {
        if (rule.pattern.test(line)) {
          failures.push({
            file,
            line: index + 1,
            reason: rule.reason,
            text: line.trim().slice(0, 180),
          });
        }
      }
    });
  }
}

if (failures.length) {
  for (const failure of failures) {
    console.error(`${failure.file}:${failure.line} ${failure.reason}: ${failure.text}`);
  }
  console.error(`Content quality audit failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log('Content quality audit passed.');
