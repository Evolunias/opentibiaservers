import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, value = ''] = arg.replace(/^--/, '').split('=');
    return [key, value || true];
  })
);

const keywordsPath = path.resolve(repoRoot, args.get('keywords') || 'data/keyword-research/open-tibia-keywords-100000.csv');
const volumesPath = args.get('volumes') ? path.resolve(repoRoot, args.get('volumes')) : null;
const source = args.get('source') || 'provider_export';
const country = args.get('country') || 'US';

if (!volumesPath) {
  throw new Error('Usage: node scripts/merge-keyword-volumes.mjs --volumes=data/keyword-research/provider-export.csv --source=dataforseo --country=US');
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row.push(cell);
      cell = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') index += 1;
      row.push(cell);
      if (row.some((value) => value !== '')) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const [headers, ...data] = rows;
  return data.map((values) =>
    Object.fromEntries(headers.map((header, index) => [header.trim(), values[index] ?? '']))
  );
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function pick(row, candidates) {
  for (const candidate of candidates) {
    if (row[candidate] !== undefined && row[candidate] !== '') return row[candidate];
  }
  return '';
}

const keywordRows = parseCsv(fs.readFileSync(keywordsPath, 'utf8'));
const volumeRows = parseCsv(fs.readFileSync(volumesPath, 'utf8'));
const volumeMap = new Map();

for (const row of volumeRows) {
  const keyword = pick(row, ['keyword', 'Keyword', 'search_term', 'Search term', 'query', 'Query']).toLowerCase().trim();
  if (!keyword) continue;
  volumeMap.set(keyword, {
    search_volume: pick(row, ['search_volume', 'Search volume', 'Avg. monthly searches', 'volume', 'Volume']),
    cpc_usd: pick(row, ['cpc_usd', 'CPC', 'Top of page bid (low range)', 'cpc']),
    competition: pick(row, ['competition', 'Competition', 'competition_index', 'Competition Index']),
  });
}

const checkedAt = new Date().toISOString();
let matched = 0;

const merged = keywordRows.map((row) => {
  const found = volumeMap.get(String(row.keyword).toLowerCase().trim());
  if (!found) return row;
  matched += 1;
  return {
    ...row,
    search_volume: found.search_volume,
    volume_source: source,
    volume_country: country,
    volume_checked_at: checkedAt,
    cpc_usd: found.cpc_usd,
    competition: found.competition,
  };
});

const columns = Object.keys(keywordRows[0]);
const outPath = keywordsPath.replace(/\.csv$/i, `-with-volumes-${source}-${country}.csv`);
fs.writeFileSync(
  outPath,
  [columns.join(','), ...merged.map((row) => columns.map((column) => csvEscape(row[column])).join(','))].join('\n')
);

console.log(JSON.stringify({
  keywords: path.relative(repoRoot, keywordsPath),
  volumes: path.relative(repoRoot, volumesPath),
  output: path.relative(repoRoot, outPath),
  source,
  country,
  provider_rows: volumeRows.length,
  matched_keywords: matched,
}, null, 2));
