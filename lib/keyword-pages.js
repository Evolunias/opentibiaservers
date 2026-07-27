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
  const keyword = sanitizeKeyword(page.keyword);
  if (page.cluster === 'server_name') return `${keyword} Server Research, Reviews, Screenshots, and Live OT Status`;
  if (page.cluster === 'official_world') return `${keyword} Tibia World History, Guilds, Wars, and OT Alternatives`;
  if (page.cluster === 'client_version') return `${keyword} Open Tibia Servers, Clients, Downloads, and Compatibility`;
  if (page.cluster === 'geo') return `${keyword} Open Tibia Servers, Local Communities, and Player Activity`;
  return `${keyword} Open Tibia Server Research, Listings, Reviews, and Guides`;
}

export function buildKeywordPageDescription(page) {
  const seed = page.seed_entity || page.keyword;
  if (page.cluster === 'server_name') {
    return `${page.keyword} research page with live Open Tibia listings, official links, reviews, screenshots, uptime, and community discussion for ${seed}.`.slice(0, 158);
  }
  return `${page.keyword} reference page for Open Tibia players comparing active servers, versions, rates, communities, screenshots, and owner-managed listings.`.slice(0, 158);
}

function sanitizeKeyword(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

function keywordModifiers(page) {
  const values = [
    page.seed_entity,
    page.modifier,
    page.version,
    page.country,
    page.cluster,
    page.intent,
    page.page_type,
  ].map(sanitizeKeyword).filter(Boolean);
  return [...new Set(values)];
}

function intentExplanation(page) {
  const keyword = sanitizeKeyword(page.keyword);
  const seed = sanitizeKeyword(page.seed_entity || keyword);
  const intent = sanitizeKeyword(page.intent);

  if (intent === 'navigational') {
    return `A navigational search for "${keyword}" usually means the player is trying to reach a specific server, website, client, Discord, account page, download, highscore, or official reference without being sent through unrelated pages.`;
  }
  if (intent === 'commercial_investigation') {
    return `A comparison search for "${keyword}" usually means the player is deciding whether ${seed} is worth time, donations, a download, a new character, or a return visit compared with similar Open Tibia servers.`;
  }
  if (intent === 'freshness_check') {
    return `A freshness search for "${keyword}" usually means the player needs current evidence: online count, uptime, launch or reset status, season age, recent updates, active guilds, Discord activity, and whether the listing is still alive.`;
  }
  return `An informational search for "${keyword}" needs an answer that explains the topic, shows useful comparison criteria, links to active listings, and leaves room for verified community additions.`;
}

function clusterSpecificSections(page) {
  const keyword = sanitizeKeyword(page.keyword);
  const seed = sanitizeKeyword(page.seed_entity || keyword);
  const modifiers = keywordModifiers(page);

  if (page.cluster === 'server_name') {
    return [
      {
        eyebrow: 'Server Verification',
        heading: `How players should verify ${seed}`,
        body: [
          `The first job of a ${keyword} page is to separate verified signals from assumptions. Players should be able to check the official domain, listed host, account page, client or launcher, Discord or forum, rules, uptime, online count, version, rates, and whether screenshots actually belong to ${seed}.`,
          `The page should not treat a public server-list row as the whole truth. It should preserve that row as a snapshot, then invite owners and players to add evidence: rules, changelogs, event notes, screenshots, reviews, boss guides, market notes, and community links.`,
        ],
      },
      {
        eyebrow: 'Player Decision',
        heading: `Is ${seed} worth playing right now?`,
        body: [
          `A useful answer depends on the player's intent. Someone searching "${keyword}" may want a download link, a review, a population check, a Discord invite, a comparison with similar servers, or proof that the server has not quietly died.`,
          `OpenTibiaServers.com should answer that by combining live listing sync, owner-managed details, player reviews, screenshot galleries, uptime monitoring, and historical notes. That makes the page useful even when the player ultimately chooses a different server.`,
        ],
      },
    ];
  }

  if (page.cluster === 'official_world') {
    return [
      {
        eyebrow: 'World Archive',
        heading: `${keyword} as a Tibia history keyword`,
        body: [
          `${keyword} searches often carry old-world intent: guild memory, top players, wars, transfer history, rare screenshots, famous deaths, merge context, and comparisons with modern Open Tibia servers.`,
          `A complete page should preserve the world story instead of only describing a ruleset. The strongest additions are sourced guild timelines, war summaries, highscore snapshots, forum references, community screenshots, and player-submitted memories.`,
        ],
      },
      {
        eyebrow: 'OT Alternative',
        heading: `How ${keyword} connects to Open Tibia discovery`,
        body: [
          `Some players searching ${keyword} want official Tibia history, while others want an OT server with a similar feeling: old-school PvP, optional PvP, fresh-start pressure, no-reset permanence, or a community that resembles an older world.`,
          `The page should link that historical intent to active Open Tibia alternatives without pretending official Tibia worlds and private servers are the same thing.`,
        ],
      },
    ];
  }

  return [
    {
      eyebrow: 'Comparison Criteria',
      heading: `How to evaluate ${keyword}`,
      body: [
        `Players should compare ${keyword} using concrete criteria: active players, uptime, version, rates, PvP type, location, official website quality, screenshot evidence, Discord or forum activity, rules, reviews, and owner responsiveness.`,
        modifiers.length
          ? `Relevant context for this page includes: ${modifiers.join(', ')}. These signals help the page serve the exact search instead of collapsing every Open Tibia topic into the same generic explanation.`
          : `The page should become more specific as sources and community contributions are added.`,
      ],
    },
    {
      eyebrow: 'Research Roadmap',
      heading: `What this ${keyword} page still needs`,
      body: [
        `The best additions are practical and verifiable: official links, screenshots, launch dates, reset policy, event calendars, boss or quest information, rates, client requirements, support links, and first-hand reviews.`,
        `Thin pages should not be treated as finished. Each keyword page is a structured research record that can mature into a stronger resource as public data, owner claims, and player contributions accumulate.`,
      ],
    },
  ];
}

function buildKeywordFaqs(page) {
  const keyword = sanitizeKeyword(page.keyword);
  const seed = sanitizeKeyword(page.seed_entity || keyword);
  return [
    {
      question: `What is this ${keyword} page for?`,
      answer:
        `This page exists to answer the search intent behind "${keyword}" with Open Tibia listings, source context, reviews, screenshots, server or world research, and community contribution areas.`,
    },
    {
      question: `Is ${keyword} a finished recommendation?`,
      answer:
        `No. It is a structured research page. Live listing data, official links, screenshots, rules, reviews, and owner-verified details should be added or refreshed before treating ${seed} as fully documented.`,
    },
    {
      question: `How can players improve this ${keyword} page?`,
      answer:
        'Players can add useful screenshots, reviews, corrections, Discord/forum references, rule notes, launch or reset history, guild or war context, and reports about stale information.',
    },
  ];
}

export function buildKeywordSeoSemantics(page) {
  const keyword = sanitizeKeyword(page.keyword);
  const seed = sanitizeKeyword(page.seed_entity || keyword);
  const cluster = sanitizeKeyword(page.cluster);
  const intent = sanitizeKeyword(page.intent);
  const pageType = sanitizeKeyword(page.page_type);

  const variants = {
    server_name: {
      eyebrow: 'Server Search Signals',
      h2: `${keyword} server research and verification`,
      h3: `${seed} official links, screenshots, reviews, and live signals`,
      h4: 'Primary server keyword',
      h5: 'Supporting server entities',
      underline: 'verified server identity, current activity, and player trust',
      copy:
        `This page uses the exact-match keyword to help players verify the server, compare live data, find official resources, inspect screenshots, and decide whether the community is worth joining.`,
    },
    official_world: {
      eyebrow: 'World Archive Signals',
      h2: `${keyword} historical search and world memory`,
      h3: `${seed} guilds, wars, top players, and OT alternatives`,
      h4: 'Primary world keyword',
      h5: 'Historical support entities',
      underline: 'world history, community memory, and long-term archive value',
      copy:
        `This page treats the keyword as a historical Tibia world query, connecting world facts with guild memory, wars, screenshots, top players, and related Open Tibia alternatives.`,
    },
    client_version: {
      eyebrow: 'Client Compatibility Signals',
      h2: `${keyword} client, version, and compatibility guide`,
      h3: `${seed} downloads, server versions, and player requirements`,
      h4: 'Primary version keyword',
      h5: 'Compatibility support entities',
      underline: 'client compatibility, download safety, and version matching',
      copy:
        `This page aligns the keyword with practical version research: compatible servers, safe downloads, client requirements, rates, rules, and active communities using the version.`,
    },
    geo: {
      eyebrow: 'Regional Search Signals',
      h2: `${keyword} regional Open Tibia discovery`,
      h3: `${seed} local servers, language, latency, and active communities`,
      h4: 'Primary regional keyword',
      h5: 'Regional support entities',
      underline: 'regional relevance, community fit, and playable latency',
      copy:
        `This page connects the keyword to regional player intent: server location, language, time zone, latency, community activity, and nearby alternatives.`,
    },
  };

  const fallback = {
    eyebrow: 'Search Intent Signals',
    h2: `${keyword} Open Tibia research hub`,
    h3: `${seed} listings, guides, reviews, and community context`,
    h4: 'Primary ranking target',
    h5: 'Supporting search entities',
    underline: 'Open Tibia player intent and useful discovery',
    copy:
      `This page connects the keyword to useful Open Tibia research: active listings, comparisons, screenshots, reviews, source context, and owner or community contributions.`,
  };

  const selected = variants[page.cluster] || fallback;
  return {
    ...selected,
    keyword,
    seed,
    support: [seed, cluster, intent, pageType, page.modifier].filter(Boolean).join(' / '),
  };
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
        eyebrow: 'Intent Classification',
        heading: `Why "${keyword}" needs its own page`,
        body: [
          intentExplanation(page),
          `The page is mapped as cluster "${page.cluster || 'unknown'}" with intent "${page.intent || 'mixed'}" and page type "${page.page_type || 'reference'}". That classification shapes the content, metadata, internal links, and contribution prompts.`,
        ],
      },
      ...clusterSpecificSections(page),
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
    faqs: buildKeywordFaqs(page),
    facts: [
      { label: 'Keyword', value: keyword },
      { label: 'Cluster', value: page.cluster },
      { label: 'Intent', value: page.intent },
      { label: 'Page Type', value: page.page_type },
      { label: 'Seed Entity', value: page.seed_entity || seed },
      { label: 'Modifier', value: page.modifier || 'None' },
      { label: 'Priority Score', value: page.priority_score || 'Pending' },
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
    article.faqs?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null,
  ].filter(Boolean);
}
