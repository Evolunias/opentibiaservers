import fs from 'node:fs';
import path from 'node:path';

const csvPath = path.join(process.cwd(), 'data', 'keyword-research', 'open-tibia-keywords-100000.csv');

function slugifyKeyword(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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

const [headerLine, ...lines] = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).filter(Boolean);
const headers = parseCsvLine(headerLine);
const rows = lines.map((line) => {
  const values = parseCsvLine(line);
  const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
  row.slug = slugifyKeyword(row.keyword);
  return row;
});

const samples = process.argv.slice(2);
const sampleRows = samples.length
  ? samples.map((slug) => rows.find((row) => row.slug === slug)).filter(Boolean)
  : rows.filter((row) => Number(row.priority_score || 0) >= 80).slice(0, 10);

for (const row of sampleRows) {
  const routeFile = path.join(process.cwd(), 'app', 'topics', row.slug, `${row.slug}.jsx`);
  const pageFile = path.join(process.cwd(), 'app', 'topics', row.slug, 'page.jsx');
  const exists = fs.existsSync(routeFile) && fs.existsSync(pageFile);
  const signals = [
    row.keyword,
    row.seed_entity,
    row.cluster,
    row.intent,
    row.page_type,
    row.modifier,
  ].filter(Boolean);
  console.log(`${row.slug}\texists=${exists}\tsignals=${signals.length}\tkeyword=${row.keyword}`);
  if (!exists || signals.length < 4) process.exitCode = 1;
}
