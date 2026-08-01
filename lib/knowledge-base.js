const DEFAULT_SITE_URL = 'https://opentibiaservers.com';
const DEFAULT_SITE_NAME = 'OpenTibiaServers.com';

function getKnowledgeSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

function getKnowledgeSiteName() {
  return process.env.NEXT_PUBLIC_SITE_NAME || DEFAULT_SITE_NAME;
}

function buildKnowledgeAbsoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${getKnowledgeSiteUrl()}${path}`;
}

export const knowledgeEntities = [
  {
    slug: 'dragon',
    entityType: 'monster',
    name: 'Dragon',
    canonicalPath: '/knowledge/monsters/dragon',
    status: 'partial',
    summary:
      'Dragon is one of the classic Tibia creature names players use when learning hunting routes, loot value, fire resistance, and mid-level risk. Open Tibia servers may change its strength, loot, spawn density, and task rewards.',
    facts: [
      { key: 'Category', value: 'Monster' },
      { key: 'Common damage theme', value: 'Fire' },
      { key: 'Player intent', value: 'Hunting, loot checks, task routes, server balance comparison' },
    ],
    sections: [
      {
        title: 'Why players search Dragon',
        body:
          'Players usually search Dragon to understand whether a character is ready to hunt it, what equipment helps, where it appears, and whether an Open Tibia server has modified its loot or difficulty. The useful answer is not just a stat line; it is a quick decision guide.',
      },
      {
        title: 'Open Tibia notes',
        body:
          'On custom servers, Dragon can be easier, harder, denser, or tied to tasks, boosted spawns, custom loot, charms, events, or rebirth systems. Always verify the server-specific page, owner notes, and player reviews before assuming official-game behavior.',
      },
    ],
    relatedServerSearches: ['8.6', 'real map', 'dragon', 'tasks', 'mid rate'],
    sources: [
      {
        label: 'Official Tibia website',
        href: 'https://www.tibia.com/',
        license: 'Official reference',
      },
    ],
  },
  {
    slug: 'demon',
    entityType: 'monster',
    name: 'Demon',
    canonicalPath: '/knowledge/monsters/demon',
    status: 'partial',
    summary:
      'Demon is a high-recognition Tibia monster keyword associated with dangerous hunts, iconic loot, quests, and late-game progression. Open Tibia servers often adjust Demon spawns, tasks, boss rooms, and reward balance.',
    facts: [
      { key: 'Category', value: 'Monster' },
      { key: 'Common player concern', value: 'Survivability and profit' },
      { key: 'Open Tibia relevance', value: 'Highrate tasks, real-map hunting, custom quest rooms, boosted loot' },
    ],
    sections: [
      {
        title: 'What to verify first',
        body:
          'Before hunting Demon on any listed server, check the client version, server rates, loot changes, custom equipment, protection rules, and whether the server uses official-style spawns or custom rooms.',
      },
      {
        title: 'Why this matters for server choice',
        body:
          'Demon balance says a lot about a server. If the creature is too weak, late-game progression may feel shallow. If it is too strong or too crowded, casual players may struggle. Directory pages should connect this creature to real server settings and player feedback.',
      },
    ],
    relatedServerSearches: ['high exp', 'real map', 'quests', 'bosses', 'loot'],
    sources: [
      {
        label: 'Official Tibia website',
        href: 'https://www.tibia.com/',
        license: 'Official reference',
      },
    ],
  },
  {
    slug: 'magic-plate-armor',
    entityType: 'item',
    name: 'Magic Plate Armor',
    canonicalPath: '/knowledge/items/magic-plate-armor',
    status: 'partial',
    summary:
      'Magic Plate Armor is a recognizable equipment keyword for players comparing old-school loot, rare-item value, and server economy. On Open Tibia servers, its availability and price can vary heavily.',
    facts: [
      { key: 'Category', value: 'Armor item' },
      { key: 'Player intent', value: 'Equipment value, loot source, economy comparison' },
      { key: 'Open Tibia relevance', value: 'Custom loot tables, shops, quest rewards, donation balance' },
    ],
    sections: [
      {
        title: 'How players use this page',
        body:
          'A useful item page should explain why players care about the item, how servers may change its availability, and what to check before assuming it has official-game rarity or value.',
      },
      {
        title: 'Server-specific warning',
        body:
          'Some Open Tibia servers place rare items in shops, quests, bosses, task rewards, or donation systems. That can completely change the meaning of the item in the economy.',
      },
    ],
    relatedServerSearches: ['8.6', 'old school', 'loot', 'quests', 'economy'],
    sources: [
      {
        label: 'Official Tibia website',
        href: 'https://www.tibia.com/',
        license: 'Official reference',
      },
    ],
  },
  {
    slug: 'rashid',
    entityType: 'npc',
    name: 'Rashid',
    canonicalPath: '/knowledge/npcs/rashid',
    status: 'partial',
    summary:
      'Rashid is a merchant NPC keyword players search when checking where to sell loot and how daily location rotation works. Open Tibia servers may simplify, relocate, or fully customize this NPC.',
    facts: [
      { key: 'Category', value: 'NPC' },
      { key: 'Player intent', value: 'Selling loot, daily location, access requirements' },
      { key: 'Open Tibia relevance', value: 'NPC location changes, simplified travel, custom sell lists' },
    ],
    sections: [
      {
        title: 'Why Rashid matters',
        body:
          'Merchant access affects profit, hunting routes, and how quickly players can convert loot into supplies. For Open Tibia servers, the important question is whether Rashid behaves like the official NPC or has been moved, expanded, or replaced.',
      },
    ],
    relatedServerSearches: ['real map', 'npc', 'loot', 'economy'],
    sources: [
      {
        label: 'Official Tibia website',
        href: 'https://www.tibia.com/',
        license: 'Official reference',
      },
    ],
  },
];

export function getKnowledgeEntity(slug) {
  return knowledgeEntities.find((entity) => entity.slug === slug) || null;
}

export function getKnowledgeEntitiesByType(type) {
  return knowledgeEntities.filter((entity) => entity.entityType === type);
}

export function buildKnowledgeMetadata(entity) {
  const title = `${entity.name} - Tibia Facts and Open Tibia Server Notes`;
  const description = entity.summary.slice(0, 158);

  return {
    title,
    description,
    alternates: {
      canonical: buildKnowledgeAbsoluteUrl(entity.canonicalPath),
    },
    openGraph: {
      title,
      description,
      url: buildKnowledgeAbsoluteUrl(entity.canonicalPath),
      siteName: getKnowledgeSiteName(),
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
