import fs from 'node:fs';
import path from 'node:path';
import { buildAbsoluteUrl } from './seo.js';
import { naturalList, pickEditorial } from './editorial-voice.js';

const KEYWORD_CSV_PATH = path.join(process.cwd(), 'data', 'keyword-research', 'open-tibia-keywords-100000.csv');
const QUALITY_INDEX_THRESHOLD = 80;
const INDEXABLE_SOURCES = new Set(['owner_verified', 'primary_source', 'curated_source_pack']);

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
    const character = line[index];
    const next = line[index + 1];
    if (character === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      inQuotes = !inQuotes;
    } else if (character === ',' && !inQuotes) {
      cells.push(cell);
      cell = '';
    } else {
      cell += character;
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
    if (!row.slug || bySlug.has(row.slug)) continue;
    bySlug.set(row.slug, row);
    rows.push(row);
  }

  keywordCache = { bySlug, rows };
  return keywordCache;
}

export function getKeywordPageBySlug(slug) {
  return loadKeywordRows().bySlug.get(slug) || null;
}

export function getKeywordPages() {
  return [...loadKeywordRows().bySlug.values()];
}

export function getIndexableKeywordPages(limit = 1000) {
  return loadKeywordRows().rows.filter((row) => shouldIndexKeywordPage(row)).slice(0, limit);
}

export function getRelatedKeywordPages(page, limit = 12) {
  return loadKeywordRows().rows
    .filter((row) => row.slug !== page.slug && (row.seed_entity === page.seed_entity || row.cluster === page.cluster))
    .slice(0, limit);
}

export function shouldIndexKeywordPage(page) {
  const measuredDemand = Number(page?.search_volume || 0) > 0
    && Boolean(page?.volume_source)
    && Boolean(page?.volume_checked_at);
  return Number(page?.priority_score || 0) >= QUALITY_INDEX_THRESHOLD
    && INDEXABLE_SOURCES.has(page?.source)
    && measuredDemand;
}

function sanitize(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

function topicKind(page) {
  if (page.cluster === 'server_name' || page.page_type === 'server_profile') return 'server';
  if (page.cluster === 'official_world' || page.page_type === 'historical_reference') return 'world';
  if (page.cluster === 'client_version') return 'client';
  if (page.cluster === 'geo') return 'region';
  return 'topic';
}

export function buildKeywordPageTitle(page) {
  const name = sanitize(page.keyword);
  const kind = topicKind(page);
  if (kind === 'server') return `${name}: Server Status, Official Links, Reviews and Community`;
  if (kind === 'world') return `${name} Tibia World: History, Guilds, Wars and Memories`;
  if (kind === 'client') return `${name}: Compatible Open Tibia Servers and Client Safety`;
  if (kind === 'region') return `${name}: Open Tibia Servers, Languages and Local Communities`;
  return `${name}: Open Tibia Guide, Servers and Community`;
}

export function buildKeywordPageDescription(page) {
  const name = sanitize(page.keyword);
  const seed = sanitize(page.seed_entity || name);
  const kind = topicKind(page);
  if (kind === 'server') {
    return `Explore ${seed} through current Open Tibia listings, official links, activity signals, screenshots, player reviews, rules, and community discussion.`.slice(0, 158);
  }
  if (kind === 'world') {
    return `Remember ${name} through world history, guilds, wars, player stories, screenshots, and active Open Tibia worlds with a related style.`.slice(0, 158);
  }
  if (kind === 'client') {
    return `Understand ${name} compatibility, safer client sourcing, matching Open Tibia servers, version differences, rules, and active communities.`.slice(0, 158);
  }
  return `A practical ${name} reference for comparing Open Tibia servers, communities, versions, activity, rules, screenshots, and trusted official links.`.slice(0, 158);
}

function openingFor(page) {
  const name = sanitize(page.keyword);
  return pickEditorial(page.slug, 'topic-opening', [
    `${name} can be a destination, a memory, or the beginning of a decision. The useful answer depends on which of those brought the player here.`,
    `A name such as ${name} rarely arrives without a second question: where is it, is it active, and does it still feel worth a player's time?`,
    `${name} carries more than one kind of curiosity. Some players want a direct path; others want proof, history, comparison, or a community that remembers.` ,
    `The shortest search can hide the longest story. ${name} may lead to a server, a world, a client era, or a player trying to find familiar ground again.`,
  ]);
}

function visitorNeed(page) {
  const name = sanitize(page.keyword);
  const seed = sanitize(page.seed_entity || name);
  const kind = topicKind(page);
  if (kind === 'server') {
    return `People looking for ${name} usually want to reach ${seed}, confirm the official website, see whether the world is active, understand the rules, inspect real screenshots, and avoid an unofficial client mirror.`;
  }
  if (kind === 'world') {
    return `People looking for ${name} often carry questions about guilds, wars, famous players, transfers, merges, rare screenshots, and the atmosphere that made the world distinct.`;
  }
  if (kind === 'client') {
    return `People looking for ${name} usually need compatibility answers: which servers use it, where the legitimate client comes from, which protocol differences matter, and what a modern custom client may change.`;
  }
  if (kind === 'region') {
    return `People looking for ${name} are often balancing latency, language, peak hours, local payment options, support hours, and the chance of finding a community awake when they are.`;
  }
  return `People looking for ${name} may need a definition, a live server comparison, an official link, a historical explanation, or a practical next step. The page should make those paths easy to distinguish.`;
}

function typeSections(page) {
  const name = sanitize(page.keyword);
  const seed = sanitize(page.seed_entity || name);
  const kind = topicKind(page);
  const context = naturalList([page.version, page.country, page.modifier].map(sanitize).filter(Boolean), 'the available topic details');

  if (kind === 'server') {
    return [
      {
        eyebrow: 'Identity',
        heading: `How to confirm the real ${seed}`,
        body: [
          `${seed} should be checked through a chain of agreement: the listed host, official domain, account page, client source, rules, community channel, and recent announcements should point toward the same operator and world. One matching logo is not enough.`,
          `A public server-list row is a useful timestamp, not a complete portrait. Screenshots, owner-confirmed links, changelogs, guild activity, reviews with dates, and visible support responses give ${seed} a human shape that a status row cannot provide.`,
        ],
      },
      {
        eyebrow: 'Decision',
        heading: `Is ${seed} worth joining now?`,
        body: [
          `Start with the questions that cost time: is the world in a fresh season or a mature economy, are the rates compatible with the player's schedule, does the PvP policy feel fair, and is the population active during the hours that matter?`,
          `${seed} becomes easier to judge when current activity, uptime, rules, screenshots, and first-hand reviews agree. When those signals conflict, patience is wiser than urgency, especially before downloading a custom client or making a purchase.`,
        ],
      },
    ];
  }

  if (kind === 'world') {
    return [
      {
        eyebrow: 'World Memory',
        heading: `The history players remember around ${name}`,
        body: [
          `${name} deserves more than a ruleset label. A world becomes memorable through guild leadership, wars that changed hunting grounds, market turning points, famous deaths, friendships, betrayals, and screenshots whose details still summon an era.`,
          `Dates and sources keep that memory honest. Archived world pages, forum threads, guild records, news posts, and named player recollections should agree before a dramatic story becomes part of ${name}'s permanent timeline.`,
        ],
      },
      {
        eyebrow: 'A Similar Feeling',
        heading: `Finding an Open Tibia world that echoes ${name}`,
        body: [
          `No private server can reproduce ${name}'s exact people or history. It can, however, offer a related rhythm through old-school PvP, optional PvP, low rates, a clean economy, no-reset permanence, or the pressure of a fresh launch.`,
          `Choose the quality that mattered most about ${name}, then compare active worlds through that lens. Nostalgia becomes more useful when it leads to a specific preference rather than a promise that the past can be copied whole.`,
        ],
      },
    ];
  }

  if (kind === 'client') {
    return [
      {
        eyebrow: 'Compatibility',
        heading: `What ${name} compatibility actually means`,
        body: [
          `${name} can refer to protocol behavior, data files, sprites, map formats, UI conventions, or a server's marketing shorthand. Two servers using the same version label can still require different executables, assets, encryption, launchers, or custom features.`,
          `Match the client only through the target server's official instructions. A familiar version number does not make an unrelated archive safe, and an old executable should never be trusted merely because its filename looks correct.`,
        ],
      },
      {
        eyebrow: 'Feel of Play',
        heading: `Why players still care about ${name}`,
        body: [
          `Client eras shape more than graphics. Hotkeys, battle-list behavior, map awareness, cooldowns, movement, rune use, UI density, and available systems can change the pace and texture of every hunt or fight.`,
          `When comparing ${name} servers, ask which mechanics are preserved and which are custom. That distinction tells a player far more than the version badge alone.`,
        ],
      },
    ];
  }

  return [
    {
      eyebrow: kind === 'region' ? 'Local Fit' : 'What Matters',
      heading: `How to compare ${name} with care`,
      body: [
        `The useful context around ${name} includes ${context}. Compare active players, uptime, version, rates, PvP type, location, rules, official-site clarity, real screenshots, community conversation, and owner responsiveness without letting one attractive number decide everything.`,
        `${name} becomes valuable when it helps a player eliminate poor fits as confidently as it reveals promising ones. A clear difference is more useful than a universal claim that every listed server is the best.`,
      ],
    },
    {
      eyebrow: 'Before You Commit',
      heading: `A practical next step for ${name}`,
      body: [
        `Open the official source, read the rules, inspect a recent activity signal, and ask one concrete question in the community. That small sequence reveals whether ${name} is maintained, understandable, and responsive.`,
        `If an important answer is absent, leave the gap visible. A missing fact can invite a useful contribution; an invented one can waste a player's evening and damage trust for much longer.`,
      ],
    },
  ];
}

function buildFaqs(page) {
  const name = sanitize(page.keyword);
  const seed = sanitize(page.seed_entity || name);
  return [
    {
      question: `What can I learn about ${name} here?`,
      answer: `${visitorNeed(page)} Related listings and community sections provide the next places to confirm what is current.`,
    },
    {
      question: `Does this page recommend ${seed} automatically?`,
      answer: `No. It gathers practical comparison points and makes uncertainty visible. Current rules, activity, official links, client safety, and recent player experience should agree before ${seed} is treated as a good personal fit.`,
    },
    {
      question: `What makes a useful contribution about ${name}?`,
      answer: `A dated screenshot, official URL, rule clarification, launch or reset note, guild memory, support experience, or specific player review adds more value than a rating without context.`,
    },
  ];
}

export function buildKeywordArticle(page) {
  const name = sanitize(page.keyword);
  const seed = sanitize(page.seed_entity || name);
  const kind = topicKind(page);
  const distinctServerTopic = kind === 'server' && name.toLowerCase() !== seed.toLowerCase();
  const labels = {
    server: 'Server profile',
    world: 'World archive',
    client: 'Client guide',
    region: 'Regional directory',
    topic: 'Community reference',
  };
  const h1 = {
    server: distinctServerTopic
      ? `${name}: a closer look at ${seed}`
      : `${seed}: status, links, rules, and player voices`,
    world: `${name}: a Tibia world remembered`,
    client: `${name}: compatibility, safety, and server choice`,
    region: `${name}: servers, latency, language, and community`,
    topic: `${name}: an Open Tibia community guide`,
  }[kind];
  const dek = {
    server: distinctServerTopic
      ? `Explore what ${name} means for ${seed}, then verify the official path, activity, rules, screenshots, and player experiences before committing time.`
      : `Find the real path to ${seed}, read its activity signals with care, compare rules and screenshots, and hear what players can add beyond the listing row.`,
    world: `Trace the guilds, wars, players, screenshots, and turning points that gave ${name} a character no ruleset label can preserve by itself.`,
    client: `Understand what ${name} changes, which Open Tibia servers use it, and how to avoid treating a familiar version number as proof of a safe download.`,
    region: `Compare Open Tibia worlds around ${name} through latency, language, active hours, rules, and the communities that make a nearby server feel alive.`,
    topic: `Follow ${name} from the first practical question to active listings, trusted sources, community memory, and a better-informed next step.`,
  }[kind];

  return {
    slug: page.slug,
    keyword: name,
    seed,
    isIndexable: shouldIndexKeywordPage(page),
    label: labels[kind],
    h1,
    dek,
    sections: [
      {
        eyebrow: 'Why It Matters',
        heading: `What brings players to ${name}`,
        body: [openingFor(page), visitorNeed(page)],
      },
      ...typeSections(page),
      {
        eyebrow: 'Trust',
        heading: `How to keep the ${name} record honest`,
        body: [
          `${name} should separate current facts, dated snapshots, owner claims, and player memories. Each has value, but each answers a different question. A timestamp and a direct source keep those layers from blurring together.`,
          `When information changes, a correction should preserve what changed and why. That small act turns ${name} from disposable copy into a record the community can trust and revisit.`,
        ],
      },
      {
        eyebrow: 'Community',
        heading: `The details only players can add to ${name}`,
        body: [
          `Players give ${name} texture through specific memories: a first hunt, a difficult quest, a guild rivalry, a support exchange, an economy shift, or a screenshot whose date and place are known.`,
          `Owners can add official links, rules, launch history, client instructions, screenshots, event calendars, and support contacts. Together, those perspectives make the page warmer, more precise, and more useful than promotional copy alone.`,
        ],
      },
    ],
    faqs: buildFaqs(page),
    facts: [
      { label: 'Reference type', value: labels[kind] },
      { label: 'Main subject', value: seed },
      ...(page.version ? [{ label: 'Version context', value: page.version }] : []),
      ...(page.country ? [{ label: 'Regional context', value: page.country }] : []),
      ...(page.modifier ? [{ label: 'Player focus', value: page.modifier }] : []),
      { label: 'Community role', value: 'Sources, corrections, screenshots, and lived experience' },
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
      author: { '@type': 'Organization', name: 'OpenTibiaServers.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: page.keyword, item: url },
      ],
    },
    article.faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null,
  ].filter(Boolean);
}
