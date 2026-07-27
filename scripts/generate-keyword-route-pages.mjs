import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const csvPath = path.join(repoRoot, 'data', 'keyword-research', 'open-tibia-keywords-100000.csv');
const topicsRoot = path.join(repoRoot, 'app', 'topics');
const defaultLimit = 5000;

function parseCsvLine(line) {
  const cells = [];
  let cell = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      cells.push(cell);
      cell = '';
    } else {
      cell += char;
    }
  }
  cells.push(cell);
  return cells;
}

function slugifyKeyword(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function pascalCase(slug) {
  const value = slug
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join('');
  return /^\d/.test(value) ? `Keyword${value}` : value || 'KeywordPage';
}

function componentFile(slug) {
  return `import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('${slug}');
}

export default function ${pascalCase(slug)}KeywordPage() {
  return <StaticKeywordPage slug="${slug}" />;
}
`;
}

function routeFile(slug) {
  return `import ${pascalCase(slug)}KeywordPage, { generateMetadata } from './${slug}';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <${pascalCase(slug)}KeywordPage />;
}
`;
}

function readKeywordRows() {
  const [headerLine, ...lines] = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(headerLine);
  const seen = new Set();
  const rows = [];

  for (const line of lines) {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
    row.slug = slugifyKeyword(row.keyword);
    if (!row.slug || seen.has(row.slug)) continue;
    seen.add(row.slug);
    rows.push(row);
  }

  return rows;
}

const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const offsetArg = process.argv.find((arg) => arg.startsWith('--offset='));
const all = process.argv.includes('--all');
const indexableOnly = process.argv.includes('--indexable-only');
const confirmPhysical = process.argv.includes('--confirm-physical-routes');
const limit = all ? Number.POSITIVE_INFINITY : Number(limitArg?.split('=')[1] || defaultLimit);
const offset = Number(offsetArg?.split('=')[1] || 0);

if (!confirmPhysical) {
  console.error('Refusing to generate physical keyword route folders without --confirm-physical-routes.');
  console.error('Use app/topics/[slug]/page.jsx for scalable SEO rendering and sitemap discovery.');
  process.exit(1);
}

let rows = readKeywordRows();
if (indexableOnly) {
  rows = rows.filter((row) => Number(row.priority_score || 0) >= 80 && row.source !== 'deterministic_expansion');
}

const selected = rows.slice(offset, Number.isFinite(limit) ? offset + limit : undefined);

for (const row of selected) {
  const dir = path.join(topicsRoot, row.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${row.slug}.jsx`), componentFile(row.slug), 'utf8');
  fs.writeFileSync(path.join(dir, 'page.jsx'), routeFile(row.slug), 'utf8');
}

console.log(`keyword_route_pages_written\t${selected.length}`);
console.log(`keyword_route_pages_total_available\t${rows.length}`);
console.log(`offset\t${offset}`);
console.log(`limit\t${Number.isFinite(limit) ? limit : 'all'}`);
