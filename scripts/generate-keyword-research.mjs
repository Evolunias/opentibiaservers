import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const seedsPath = path.join(repoRoot, 'data', 'keyword-seeds.json');
const patternsPath = path.join(repoRoot, 'data', 'keyword-patterns.json');
const outDir = path.join(repoRoot, 'data', 'keyword-research');

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, value = ''] = arg.replace(/^--/, '').split('=');
    return [key, value || true];
  })
);

const targetCount = Number.parseInt(args.get('count') || process.env.KEYWORD_TARGET_COUNT || '100000', 10);
const seeds = JSON.parse(fs.readFileSync(seedsPath, 'utf8'));
const patterns = JSON.parse(fs.readFileSync(patternsPath, 'utf8'));

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(value) {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function normalizeKeyword(value) {
  return String(value)
    .replace(/\s+/g, ' ')
    .replace(/\s+([?.!,])/g, '$1')
    .trim();
}

function inferIntent(keyword) {
  const text = keyword.toLowerCase();
  if (/(download|client|launcher|register|create account|login|website|official)/.test(text)) return 'navigational';
  if (/(review|reviews|best|top|alternatives|similar|compare|rankings)/.test(text)) return 'commercial_investigation';
  if (/(rules|wiki|guide|history|commands|spells|quests|bosses|map|screenshots|trailer)/.test(text)) return 'informational';
  if (/(online|status|uptime|players online|launch|season|reset)/.test(text)) return 'freshness_check';
  return 'mixed';
}

function pageType(cluster) {
  switch (cluster) {
    case 'server_name':
      return 'server_profile';
    case 'official_world':
      return 'historical_reference';
    case 'client_version':
      return 'client_facet';
    case 'geo':
      return 'country_region_facet';
    case 'ecosystem':
    default:
      return 'wiki_reference';
  }
}

function targetUrl(cluster, seed) {
  if (cluster === 'server_name') return `/servers/${slugify(seed)}`;
  if (cluster === 'official_world') return `/${slugify(seed)}`;
  if (cluster === 'client_version') return `/servers/client/${String(seed).replace(/\./g, '-')}`;
  if (cluster === 'geo') return `/servers/country/${slugify(seed)}`;
  return `/topics/${slugify(seed)}`;
}

function pushKeyword(rows, seen, row) {
  const keyword = normalizeKeyword(row.keyword);
  if (!keyword || keyword.length < 2) return;
  const key = keyword.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  rows.push({
    keyword,
    cluster: row.cluster,
    intent: inferIntent(keyword),
    page_type: pageType(row.cluster),
    target_url: targetUrl(row.cluster, row.seed),
    seed_entity: row.seed,
    modifier: row.modifier || '',
    source: row.source,
    priority_score: row.priority_score,
    search_volume: '',
    volume_source: '',
    volume_country: 'US',
    volume_checked_at: '',
    cpc_usd: '',
    competition: '',
    notes: row.notes || '',
  });
}

function applyNamePattern(pattern, name, modifier = '') {
  const base = pattern.replaceAll('{name}', name);
  return modifier ? `${modifier} ${base}` : base;
}

const rows = [];
const seen = new Set();

for (const name of seeds.server_names) {
  for (const pattern of patterns.server_name_patterns) {
    pushKeyword(rows, seen, {
      keyword: applyNamePattern(pattern, name),
      cluster: 'server_name',
      seed: name,
      source: 'seed_server_name',
      priority_score: 95,
    });
  }
  for (const modifier of patterns.modifiers.filter(Boolean)) {
    for (const pattern of patterns.server_name_patterns.slice(0, 22)) {
      pushKeyword(rows, seen, {
        keyword: applyNamePattern(pattern, name, modifier),
        cluster: 'server_name',
        seed: name,
        modifier,
        source: 'seed_server_name_modifier',
        priority_score: 90,
      });
    }
  }
}

for (const name of seeds.official_worlds) {
  for (const pattern of patterns.world_patterns) {
    pushKeyword(rows, seen, {
      keyword: pattern.replaceAll('{name}', name),
      cluster: 'official_world',
      seed: name,
      source: 'seed_official_world',
      priority_score: name === 'Antica' ? 92 : 75,
    });
  }
}

for (const term of seeds.ecosystem_terms) {
  for (const pattern of patterns.ecosystem_patterns) {
    pushKeyword(rows, seen, {
      keyword: pattern.replaceAll('{term}', term),
      cluster: 'ecosystem',
      seed: term,
      source: 'seed_ecosystem',
      priority_score: /otservlist|otland|open tibia servers/i.test(term) ? 96 : 82,
    });
  }
}

for (const version of seeds.client_versions) {
  for (const pattern of patterns.version_patterns) {
    pushKeyword(rows, seen, {
      keyword: pattern.replaceAll('{version}', version),
      cluster: 'client_version',
      seed: version,
      source: 'seed_client_version',
      priority_score: ['7.4', '8.0', '8.6', '10.98'].includes(version) ? 88 : 70,
    });
  }
}

for (const geo of seeds.countries_regions) {
  for (const pattern of patterns.geo_patterns) {
    pushKeyword(rows, seen, {
      keyword: pattern.replaceAll('{geo}', geo),
      cluster: 'geo',
      seed: geo,
      source: 'seed_geo',
      priority_score: ['Brazil', 'USA', 'Europe', 'Poland', 'Sweden'].includes(geo) ? 84 : 65,
    });
  }
}

const archetypes = [
  'real map',
  'custom map',
  'evo',
  'baiak',
  'high exp',
  'low exp',
  'no reset',
  'fresh start',
  'old school',
  'pvp',
  'non pvp',
  'pvpe',
  'pvp enforced',
  'retro',
  'seasonal',
  'with trainers',
  'with discord',
  'with active players',
  'with screenshots',
  'with reviews',
];
const actions = [
  'server',
  'servers',
  'ot server',
  'open tibia server',
  'tibia private server',
  'server list',
  'download',
  'client',
  'register',
  'wiki',
  'guide',
  'review',
  'status',
  'players online',
  'launch',
  'season',
  'forum',
  'discord',
];

for (const version of seeds.client_versions) {
  for (const archetype of archetypes) {
    for (const action of actions) {
      pushKeyword(rows, seen, {
        keyword: `tibia ${version} ${archetype} ${action}`,
        cluster: 'long_tail',
        seed: version,
        modifier: archetype,
        source: 'synthetic_long_tail_version_archetype',
        priority_score: 55,
      });
    }
  }
}

for (const geo of seeds.countries_regions) {
  for (const archetype of archetypes) {
    for (const action of actions) {
      pushKeyword(rows, seen, {
        keyword: `${archetype} ${action} ${geo}`,
        cluster: 'long_tail_geo',
        seed: geo,
        modifier: archetype,
        source: 'synthetic_long_tail_geo_archetype',
        priority_score: 50,
      });
    }
  }
}

let expansionIndex = 0;
while (rows.length < targetCount) {
  const server = seeds.server_names[expansionIndex % seeds.server_names.length];
  const version = seeds.client_versions[Math.floor(expansionIndex / seeds.server_names.length) % seeds.client_versions.length];
  const geo = seeds.countries_regions[Math.floor(expansionIndex / (seeds.server_names.length * seeds.client_versions.length)) % seeds.countries_regions.length];
  const archetype = archetypes[Math.floor(expansionIndex / (seeds.server_names.length * seeds.client_versions.length * seeds.countries_regions.length)) % archetypes.length];
  const action = actions[Math.floor(expansionIndex / (seeds.server_names.length * seeds.client_versions.length * seeds.countries_regions.length * archetypes.length)) % actions.length];
  const phraseForms = [
    `${server} ${version} ${archetype} ${action}`,
    `${server} ${archetype} ${action} ${geo}`,
    `${titleCase(archetype)} ${server} ${action}`,
    `${server} ${geo} ${action}`,
  ];

  pushKeyword(rows, seen, {
    keyword: phraseForms[expansionIndex % phraseForms.length],
    cluster: 'synthetic_server_long_tail',
    seed: server,
    modifier: `${version} ${geo} ${archetype}`,
    source: 'deterministic_expansion',
    priority_score: 40,
  });
  expansionIndex += 1;

  if (expansionIndex > targetCount * 20) break;
}

rows.sort((a, b) => {
  if (b.priority_score !== a.priority_score) return b.priority_score - a.priority_score;
  return a.keyword.localeCompare(b.keyword);
});
const finalRows = rows.slice(0, targetCount);

fs.mkdirSync(outDir, { recursive: true });
const csvPath = path.join(outDir, `open-tibia-keywords-${finalRows.length}.csv`);
const jsonPath = path.join(outDir, `open-tibia-keywords-${finalRows.length}.json`);
const columns = [
  'keyword',
  'cluster',
  'intent',
  'page_type',
  'target_url',
  'seed_entity',
  'modifier',
  'source',
  'priority_score',
  'search_volume',
  'volume_source',
  'volume_country',
  'volume_checked_at',
  'cpc_usd',
  'competition',
  'notes',
];

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

fs.writeFileSync(
  csvPath,
  [columns.join(','), ...finalRows.map((row) => columns.map((column) => csvEscape(row[column])).join(','))].join('\n')
);
fs.writeFileSync(jsonPath, JSON.stringify(finalRows, null, 2));

const summary = {
  generated_at: new Date().toISOString(),
  target_count: targetCount,
  actual_count: finalRows.length,
  csv: path.relative(repoRoot, csvPath),
  json: path.relative(repoRoot, jsonPath),
  clusters: finalRows.reduce((acc, row) => {
    acc[row.cluster] = (acc[row.cluster] || 0) + 1;
    return acc;
  }, {}),
  volume_note:
    'search_volume is intentionally blank until imported from a deterministic provider such as Google Ads Keyword Planner, DataForSEO, Ahrefs, or Semrush.',
};

fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
