import fs from 'node:fs';
import path from 'node:path';
import { buildAbsoluteUrl } from '@/lib/seo';

const KEYWORD_CSV_PATH = path.join(process.cwd(), 'data', 'keyword-research', 'open-tibia-keywords-100000.csv');
const QUALITY_INDEX_THRESHOLD = 80;

let keywordCache = null;

export function slugifyKeyword(value = '') {
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

function loadKeywordRows() {
  if (keywordCache) return keywordCache;
  if (!fs.existsSync(KEYWORD_CSV_PATH)) {
    keywordCache = { bySlug: new Map(), rows: [] };
    return keywordCache;
  }

  const [headerLine, ...lines] = fs.readFileSync(KEYWORD_CSV_PATH, 'utf8').split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(headerLine);
  const rows = [];
  const bySlug = new Map();

  for (const line of lines) {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
    row.slug = slugifyKeyword(row.keyword);
    row.priority_score = Number(row.priority_score || 0);
    if (!bySlug.has(row.slug)) bySlug.set(row.slug, row);
    rows.push(row);
  }

  keywordCache = { bySlug, rows };
  return keywordCache;
}

export function getKeywordPageBySlug(slug) {
  return loadKeywordRows().bySlug.get(slug) || null;
}

export function getIndexableKeywordPages(limit = 1000) {
  return loadKeywordRows().rows
    .filter((row) => shouldIndexKeywordPage(row))
    .slice(0, limit);
}

export function getRelatedKeywordPages(page, limit = 12) {
  const { rows } = loadKeywordRows();
  return rows
    .filter((row) => row.slug !== page.slug && (row.seed_entity === page.seed_entity || row.cluster === page.cluster))
    .slice(0, limit);
}

export function shouldIndexKeywordPage(page) {
  return Number(page?.priority_score || 0) >= QUALITY_INDEX_THRESHOLD && page?.source !== 'deterministic_expansion';
}

export function buildKeywordPageTitle(page) {
  return `${page.keyword} | Open Tibia Server Research - OpenTibiaServers.com`;
}

export function buildKeywordPageDescription(page) {
  const seed = page.seed_entity || page.keyword;
  if (page.cluster === 'server_name') {
    return `${page.keyword} research page with live Open Tibia listings, official links, reviews, screenshots, uptime, and community discussion for ${seed}.`.slice(0, 158);
  }
  return `${page.keyword} reference page for Open Tibia players comparing active servers, versions, rates, communities, screenshots, and owner-managed listings.`.slice(0, 158);
}

export function buildKeywordArticle(page) {
  const keyword = page.keyword;
  const seed = page.seed_entity || keyword;
  const isServer = page.page_type === 'server_profile' || page.cluster === 'server_name';
  const isWorld = page.page_type === 'historical_reference' || page.cluster === 'official_world';

  return {
    slug: page.slug,
    keyword,
    seed,
    isIndexable: shouldIndexKeywordPage(page),
    label: isServer ? 'Server Research Page' : isWorld ? 'Historical Reference Page' : 'Open Tibia Topic Page',
    h1: isServer
      ? `${seed}: ${keyword} Research, Reviews, Screenshots, and Live Server Signals`
      : `${keyword}: Open Tibia Research, Server Discovery, and Community Context`,
    dek: isServer
      ? `A structured research page for ${seed}, built to collect public listing data, owner-managed details, screenshots, player reviews, uptime history, and community discussion.`
      : `A structured Open Tibia reference page for players researching ${keyword}, with links into active server listings, community discussion, reviews, and related topics.`,
    sections: [
      {
        eyebrow: 'Search Intent',
        heading: `What players searching "${keyword}" usually want`,
        body: isServer
          ? [
              `A search for "${keyword}" is usually high-intent. Players are trying to find the official website, determine whether the server is active, compare online count and uptime, check rules, inspect screenshots, and decide whether the community is worth joining.`,
              'OpenTibiaServers.com is designed to turn that intent into a durable record instead of a thin server-list row. The goal is to combine public listing data, owner-verified information, community discussion, and historical signals in one place.',
            ]
          : [
              `A search for "${keyword}" may be informational, navigational, or comparison-driven. Players may want a definition, a current server list, active alternatives, community resources, or a guide to choosing the right server.`,
              'This page is part of a broader keyword map. It exists to organize intent and route players toward active listings, exact-match server pages, forums, reviews, screenshots, and owner-managed records.',
            ],
      },
      {
        eyebrow: 'Quality Standard',
        heading: 'How this page avoids thin keyword spam',
        body: [
          'Every generated topic page is treated as a research shell first. Pages with enough priority, source context, and user value can be indexed; thinner long-tail pages can remain discoverable internally while staying out of search indexes until they are enriched.',
          'The durable value comes from live data, official links, screenshots, community posts, reviews, uptime history, and owner claims. That is the difference between a useful Open Tibia rolodex and a mass of empty keyword pages.',
        ],
      },
      {
        eyebrow: 'Community',
        heading: 'What players and server owners can add',
        body: [
          'Registered players can review servers, ask questions, participate in community boards, and help surface outdated or missing information.',
          'Server owners and managers can claim listings, add official websites, launcher links, Discord or forum details, screenshots, FAQs, custom sections, and support contact information.',
        ],
      },
    ],
    facts: [
      { label: 'Keyword', value: keyword },
      { label: 'Cluster', value: page.cluster },
      { label: 'Intent', value: page.intent },
      { label: 'Page Type', value: page.page_type },
      { label: 'Indexing', value: shouldIndexKeywordPage(page) ? 'Eligible after quality checks' : 'Internal/noindex until enriched' },
    ],
  };
}

export function buildKeywordJsonLd(page) {
  const article = buildKeywordArticle(page);
  const url = buildAbsoluteUrl(`/topics/${page.slug}`);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.h1,
      description: buildKeywordPageDescription(page),
      mainEntityOfPage: url,
      about: [
        { '@type': 'Thing', name: page.keyword },
        { '@type': 'Thing', name: page.seed_entity },
        { '@type': 'Thing', name: 'Open Tibia servers' },
      ].filter((item) => item.name),
      author: {
        '@type': 'Organization',
        name: 'OpenTibiaServers.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.keyword, item: url },
      ],
    },
  ];
}
