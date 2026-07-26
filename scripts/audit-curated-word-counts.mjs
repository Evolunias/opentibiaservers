import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { estimateCuratedPageWords } from '../lib/deep-dive-pages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curatedSource = fs.readFileSync(path.resolve(__dirname, '..', 'lib', 'curated-pages.js'), 'utf8');
const objectStart = curatedSource.indexOf('export const curatedPages = ');
const objectEnd = curatedSource.indexOf(';\n\nexport function getCuratedPage');

if (objectStart === -1 || objectEnd === -1) {
  throw new Error('Unable to locate curatedPages object.');
}

const objectLiteral = curatedSource
  .slice(objectStart, objectEnd)
  .replace('export const curatedPages = ', '');
const curatedPages = vm.runInNewContext(`(${objectLiteral})`, {});

const rows = Object.values(curatedPages).map((page) => ({
  slug: page.slug,
  type: page.type,
  target: page.type === 'server' ? 10000 : 0,
  words: estimateCuratedPageWords(page),
}));

for (const row of rows) {
  console.log(`${row.slug}\t${row.type}\t${row.words}\t${row.words >= row.target ? 'pass' : 'needs_expansion'}`);
}

const failing = rows.filter((row) => row.target > 0 && row.words < row.target);
if (failing.length) {
  process.exitCode = 1;
}
