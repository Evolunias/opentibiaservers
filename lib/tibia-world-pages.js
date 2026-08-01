const tibiaWorldSourceLinks = [
  { label: 'Game worlds reference', href: 'https://tibia.fandom.com/wiki/Game_Worlds' },
  { label: 'World merge reference', href: 'https://tibia.fandom.com/wiki/Game_World_Merge' },
  { label: 'Tibia.com community worlds', href: 'https://www.tibia.com/community/?subtopic=worlds' },
];

const worldRows = [
  ['aethera', 'Aethera', 'Open PvP', 'October 16, 2024', null, 'active'],
  ['astera', 'Astera', 'Optional PvP', 'January 25, 2005', null, 'active'],
  ['belobra', 'Belobra', 'Optional PvP', 'December 13, 2016', null, 'active'],
  ['bona', 'Bona', 'Optional PvP', 'April 19, 2018', null, 'active'],
  ['bravoria', 'Bravoria', 'Optional PvP', 'October 16, 2024', null, 'active'],
  ['calmera-world', 'Calmera', 'Optional PvP', 'April 17, 2003', null, 'active'],
  ['cantabra', 'Cantabra', 'Open PvP', 'October 16, 2024', null, 'active'],
  ['celebra', 'Celebra', 'Optional PvP', 'October 29, 2018', null, 'active'],
  ['celesta', 'Celesta', 'Optional PvP', 'November 24, 2004', null, 'active'],
  ['collabra', 'Collabra', 'Optional PvP', 'December 6, 2021', null, 'active'],
  ['descubra', 'Descubra', 'Optional PvP', 'December 07, 2017', null, 'active'],
  ['dia', 'Dia', 'Optional PvP', 'February 8, 2023', null, 'active'],
  ['epoca', 'Epoca', 'Retro Open PvP', 'April 19, 2018', null, 'active'],
  ['etebra', 'Etebra', 'Optional PvP', 'February 8, 2023', null, 'active'],
  ['ferobra', 'Ferobra', 'Open PvP', 'November 22, 2016', null, 'active'],
  ['firmera', 'Firmera', 'Retro Open PvP', 'April 19, 2018', null, 'active'],
  ['gentebra', 'Gentebra', 'Optional PvP', 'December 12, 2017', null, 'active'],
  ['gladera', 'Gladera', 'Optional PvP', 'April 19, 2018', null, 'active'],
  ['gladibra', 'Gladibra', 'Retro Open PvP', 'September 09, 2024', null, 'active'],
  ['secura', 'Secura', 'Optional PvP', 'May 15, 2002', null, 'active'],
  ['premia', 'Premia', 'Optional PvP', 'November 14, 2002', null, 'active'],
  ['harmonia', 'Harmonia', 'Optional PvP', 'April 17, 2003', null, 'active'],
  ['adrastea', 'Adrastea', 'Open PvP', 'May 15, 2024', null, 'active'],
  ['damora-world', 'Damora', 'Optional PvP', 'December 07, 2017', 'September 09, 2024', 'deprecated'],
  ['adlera', 'Adlera', 'Open PvP', 'May 15, 2024', null, 'active'],
  ['aldora', 'Aldora', 'Open PvP', 'May 13, 2004', 'August 14, 2014', 'deprecated'],
  ['amera', 'Amera', 'Open PvP', 'October 07, 2002', 'April 19, 2018', 'deprecated'],
  ['arcania', 'Arcania', 'Open PvP', 'December 22, 2004', 'August 14, 2014', 'deprecated'],
  ['askara', 'Askara', 'Open PvP', 'August 11, 2005', 'November 10, 2014', 'deprecated'],
  ['aurea', 'Aurea', 'Open PvP', 'August 10, 2004', 'May 2, 2016', 'deprecated'],
  ['aurera-world', 'Aurera', 'Open PvP', 'June 13, 2012', 'October 26, 2017', 'deprecated'],
  ['aurora-world', 'Aurora', 'Open PvP', 'June 13, 2012', 'October 26, 2017', 'deprecated'],
  ['azura', 'Azura', 'Open PvP', 'March 30, 2004', 'November 10, 2014', 'deprecated'],
  ['balera', 'Balera', 'Open PvP', 'July 06, 2005', 'August 14, 2014', 'deprecated'],
  ['berylia', 'Berylia', 'Open PvP', 'May 24, 2005', 'November 10, 2014', 'deprecated'],
  ['candia-world', 'Candia', 'Optional PvP', 'July 13, 2006', 'April 19, 2018', 'deprecated'],
  ['chimera', 'Chimera', 'Open PvP', 'March 30, 2004', 'November 10, 2014', 'deprecated'],
  ['chrona', 'Chrona', 'Retro Open PvP', 'November 12, 2014', 'April 19, 2018', 'deprecated'],
  ['danera', 'Danera', 'Open PvP', 'February 16, 2005', 'October 19, 2017', 'deprecated'],
  ['danubia', 'Danubia', 'Open PvP', 'April 17, 2003', 'November 10, 2014', 'deprecated'],
  ['dolera', 'Dolera', 'Hardcore PvP', 'February 14, 2006', 'October 26, 2017', 'deprecated'],
  ['empera', 'Empera', 'Open PvP', 'October 07, 2002', 'August 14, 2014', 'deprecated'],
  ['eternia', 'Eternia', 'Open PvP', 'May 24, 2005', 'August 14, 2014', 'deprecated'],
  ['hiberna', 'Hiberna', 'Open PvP', 'December 22, 2004', 'August 14, 2014', 'deprecated'],
  ['inferna', 'Inferna', 'Hardcore PvP', 'February 14, 2006', 'October 26, 2017', 'deprecated'],
  ['isara', 'Isara', 'Open PvP', 'April 19, 2005', 'August 14, 2014', 'deprecated'],
  ['jamera', 'Jamera', 'Open PvP', 'October 07, 2002', 'August 14, 2014', 'deprecated'],
  ['keltera', 'Keltera', 'Open PvP', 'December 22, 2004', 'August 14, 2014', 'deprecated'],
  ['kyra', 'Kyra', 'Open PvP', 'November 24, 2004', 'June 24, 2014', 'deprecated'],
  ['lucera', 'Lucera', 'Open PvP', 'July 10, 2003', 'August 14, 2014', 'deprecated'],
  ['lunara', 'Lunara', 'Open PvP', 'July 10, 2003', 'November 10, 2014', 'deprecated'],
  ['nebula', 'Nebula', 'Open PvP', 'April 19, 2005', 'June 24, 2014', 'deprecated'],
  ['neptera', 'Neptera', 'Open PvP', 'July 06, 2005', 'October 19, 2017', 'deprecated'],
  ['nerana', 'Nerana', 'Optional PvP', 'January 25, 2007', 'April 19, 2018', 'deprecated'],
  ['oblera', 'Oblera', 'Optional PvP', 'December 20, 2005', 'April 19, 2018', 'deprecated'],
  ['obsidia', 'Obsidia', 'Open PvP', 'August 11, 2005', 'November 10, 2014', 'deprecated'],
  ['ocera', 'Ocera', 'Open PvP', 'December 20, 2005', 'August 14, 2014', 'deprecated'],
  ['olympa', 'Olympa', 'Optional PvP', 'November 17, 2009', 'April 19, 2018', 'deprecated'],
  ['pandoria', 'Pandoria', 'Open PvP', 'January 25, 2005', 'November 10, 2014', 'deprecated'],
  ['pythera', 'Pythera', 'Open PvP', 'November 24, 2004', 'October 19, 2017', 'deprecated'],
  ['rubera', 'Rubera', 'Open PvP', 'July 10, 2003', 'November 10, 2014', 'deprecated'],
  ['samera', 'Samera', 'Open PvP', 'August 10, 2004', 'August 14, 2014', 'deprecated'],
  ['saphira', 'Saphira', 'Open PvP', 'April 19, 2005', 'November 10, 2014', 'deprecated'],
  ['shanera', 'Shanera', 'Open PvP', 'May 13, 2004', 'August 14, 2014', 'deprecated'],
  ['titania', 'Titania', 'Open PvP', 'October 07, 2002', 'November 10, 2014', 'deprecated'],
  ['trimera', 'Trimera', 'Open PvP', 'July 10, 2003', 'August 14, 2014', 'deprecated'],
  ['valoria', 'Valoria', 'Open PvP', 'November 05, 2003', 'May 2, 2016', 'deprecated'],
  ['vinera', 'Vinera', 'Open PvP', 'August 11, 2005', 'May 2, 2016', 'deprecated'],
  ['xerena', 'Xerena', 'Open PvP', 'December 20, 2005', 'August 14, 2014', 'deprecated'],
  ['zuna', 'Zuna', 'Hardcore PvP', 'October 26, 2017', null, 'active-merged'],
  ['zunera', 'Zunera', 'Hardcore PvP', 'October 26, 2017', null, 'active-merged'],
];

const mergeNotes = {
  kyra: 'Merged with Nebula and Thoria into Kenora on June 24, 2014.',
  nebula: 'Merged with Kyra and Thoria into Kenora on June 24, 2014.',
  empera: 'Merged with Ocera and Lucera into Kronera on August 14, 2014.',
  ocera: 'Merged with Empera and Lucera into Kronera on August 14, 2014.',
  lucera: 'Merged with Empera and Ocera into Kronera on August 14, 2014.',
  jamera: 'Merged with Shanera and Balera into Garnera on August 14, 2014.',
  shanera: 'Merged with Jamera and Balera into Garnera on August 14, 2014.',
  balera: 'Merged with Jamera and Shanera into Garnera on August 14, 2014.',
  samera: 'Merged with Trimera and Keltera into Thera on August 14, 2014.',
  trimera: 'Merged with Samera and Keltera into Thera on August 14, 2014.',
  keltera: 'Merged with Samera and Trimera into Thera on August 14, 2014.',
  hiberna: 'Merged with Isara and Eternia into Rowana on August 14, 2014.',
  isara: 'Merged with Hiberna and Eternia into Rowana on August 14, 2014.',
  eternia: 'Merged with Hiberna and Isara into Rowana on August 14, 2014.',
  aldora: 'Merged with Arcania and Xerena into Nika on August 14, 2014.',
  arcania: 'Merged with Aldora and Xerena into Nika on August 14, 2014.',
  xerena: 'Merged with Aldora and Arcania into Nika on August 14, 2014.',
  aurera: 'Merged with Calvera and Dolera into Zunera on October 26, 2017.',
  'aurera-world': 'Merged with Calvera and Dolera into Zunera on October 26, 2017.',
  aurora: 'Merged with Calva and Inferna into Zuna on October 26, 2017.',
  'aurora-world': 'Merged with Calva and Inferna into Zuna on October 26, 2017.',
  inferna: 'Merged with Calva and Aurora into Zuna on October 26, 2017.',
  dolera: 'Merged with Calvera and Aurera into Zunera on October 26, 2017.',
};

function worldIntent(world) {
  if (world.status === 'deprecated') {
    return `${world.name} searches usually carry historical intent: old guilds, wars, character memories, merge destinations, rare screenshots, forum posts, and nostalgia for a world that no longer exists as a standalone destination.`;
  }
  if (world.pvpType.includes('Optional')) {
    return `${world.name} searches usually come from players comparing safer long-term official Tibia worlds, non-war community identity, market depth, transfer culture, and alternatives in Open Tibia.`;
  }
  if (world.pvpType.includes('Retro') || world.pvpType.includes('Hardcore')) {
    return `${world.name} searches usually come from players interested in conflict rules, rare PvP history, guild politics, wars, and the difference between official Tibia conflict worlds and OT alternatives.`;
  }
  return `${world.name} searches usually carry PvP and guild-history intent: players want to know the world identity, old wars, top guilds, dominant characters, transfers, and modern alternatives.`;
}

export const tibiaWorlds = worldRows.map(([slug, name, pvpType, onlineSince, offlineSince, status]) => ({
  slug,
  name,
  pvpType,
  onlineSince,
  offlineSince,
  status,
  mergeNote: mergeNotes[slug],
}));

export function getTibiaWorldPage(slug) {
  const world = tibiaWorlds.find((item) => item.slug === slug);
  if (!world) return null;

  const statusLabel = world.status === 'deprecated' ? 'Deprecated historical world' : 'Active official Tibia world';
  const lifecycle = world.offlineSince
    ? `${world.onlineSince} to ${world.offlineSince}`
    : `Online since ${world.onlineSince}`;

  return {
    slug: world.slug,
    path: `/${world.slug}`,
    type: 'official-world',
    title: `${world.name} Tibia World History and Open Tibia Alternatives`,
    h1: `${world.name} Tibia World: History, Guild Memory, Wars, and OT Alternatives`,
    dek: `A historical reference page for ${world.name}, preserving world facts, PvP identity, timeline context, guild-war research areas, top-player memory, and Open Tibia alternatives.`,
    primaryKeyword: world.name,
    keywords: [
      world.name,
      `${world.name} Tibia`,
      `${world.name} world`,
      `${world.name} server`,
      `${world.name} guilds`,
      `${world.name} wars`,
      `${world.name} top players`,
      `Open Tibia servers like ${world.name}`,
    ],
    metaDescription: `${world.name} Tibia world history covering ${world.pvpType}, ${lifecycle}, guild and war research, top-player memory, and Open Tibia alternatives.`,
    updatedAt: '2026-07-26',
    pageLabel: 'World Archive',
    overview:
      `${world.name} deserves a permanent archive because official Tibia worlds are not interchangeable. Each world accumulates its own guild politics, dominant players, wars, screenshots, market memory, transfers, merges, and community stories. This page establishes the sourced skeleton for ${world.name} and reserves space for verified community history to be added over time.`,
    cta: { label: `Find OT Servers Like ${world.name}`, href: `/?search=${encodeURIComponent(world.pvpType)}` },
    facts: [
      { label: 'Game', value: 'Tibia' },
      { label: 'World', value: world.name },
      { label: 'World type', value: world.pvpType },
      { label: 'Lifecycle', value: lifecycle },
      { label: 'Archive status', value: statusLabel },
      { label: 'Search intent', value: 'World history, guilds, wars, top players, screenshots, alternatives' },
    ],
    infobox: [
      { label: 'Primary topic', value: `${world.name} Tibia world` },
      { label: 'Canonical page', value: `opentibiaservers.com/${world.slug}` },
      { label: 'Classification', value: 'Official Tibia world, not an OT server' },
      { label: 'Ruleset context', value: world.pvpType },
      { label: 'Research priority', value: 'Guild history, war timelines, top players, world merge context, screenshots' },
    ],
    timeline: [
      {
        date: world.onlineSince,
        title: `${world.name} comes online`,
        text:
          `${world.name} is recorded by public Tibia world references as a ${world.pvpType} world that came online on ${world.onlineSince}. That launch date anchors the world in Tibia's broader server-history timeline.`,
      },
      ...(world.offlineSince
        ? [{
            date: world.offlineSince,
            title: `${world.name} leaves standalone world status`,
            text:
              `${world.name} is recorded as offline since ${world.offlineSince}. For historical research, this makes archived guild pages, screenshots, forum threads, and merge records especially important.`,
          }]
        : [{
            date: 'Current era',
            title: `${world.name} remains part of the active world landscape`,
            text:
              `For an active world, the story continues through current guilds, highscores, Bazaar movement, transfer patterns, market activity, and community posts. Those living signals should be captured as snapshots instead of overwritten.`,
          }]),
      ...(world.mergeNote
        ? [{
            date: 'Merge context',
            title: 'World merge memory',
            text: world.mergeNote,
          }]
        : []),
      {
        date: 'Open Tibia context',
        title: `${world.name} becomes a comparison keyword`,
        text:
          `Players searching ${world.name} may want official-world history, but they may also want an Open Tibia server that recreates a similar feeling: ${world.pvpType}, old guild politics, fresh-start pressure, or long-term community permanence.`,
      },
    ],
    evergreenAngles: [
      `${world.name} world identity: the people, guilds, wars, transfers, and memories behind the name.`,
      `Top guild archive: dominant guilds, rival guilds, war alliances, neutral guilds, and major leadership changes.`,
      `Top player archive: historically important characters, high-level milestones, rare achievements, and controversial moments.`,
      `Moment archive: screenshots, forum posts, kill records, rare items, server saves, world quests, and merge-day memories.`,
    ],
    glossary: [
      {
        term: 'World memory',
        definition:
          'The combined historical record of guilds, wars, players, screenshots, forum posts, market moments, rare items, and transfer culture attached to a Tibia world.',
      },
      {
        term: 'Guild war archive',
        definition:
          'A structured record of guild conflicts, sides, dates, causes, major battles, leaders, outcomes, and source links.',
      },
      {
        term: 'World merge',
        definition:
          'A process where characters from multiple worlds are combined into another world. Merge records are crucial for deprecated world history.',
      },
      {
        term: 'OT alternative',
        definition:
          'An Open Tibia server that may reproduce some of a world searcher’s intent through similar PvP rules, version, rates, community language, or world permanence.',
      },
    ],
    sourceLinks: tibiaWorldSourceLinks,
    researchNotes: [
      {
        label: 'World fact baseline',
        value:
          `${world.name} is currently represented with sourced baseline fields: world type, online date, lifecycle status, and merge/offline context where applicable. This is the foundation before adding player-by-player and guild-by-guild history.`,
      },
      {
        label: 'Guild and war archive needed',
        value:
          `The next content layer for ${world.name} should collect top guilds, war timelines, dominant alliances, notable kills, leadership names, forum threads, and screenshots from public sources or player submissions.`,
      },
      {
        label: 'Player memory archive needed',
        value:
          `Top players should be recorded with context, not just names: level milestones, achievements, deaths, rare items, transfer impact, community reputation, and source links.`,
      },
    ],
    mediaLeads: [
      {
        label: `${world.name} world references`,
        href: 'https://tibia.fandom.com/wiki/Game_Worlds',
        note:
          'Baseline public source for world type, active/deprecated status, online dates, and offline dates.',
      },
      {
        label: 'Tibia.com community worlds',
        href: 'https://www.tibia.com/community/?subtopic=worlds',
        note:
          'Official current-world source for live world status, online players, location, PvP type, and official character/guild navigation.',
      },
    ],
    sections: [
      {
        eyebrow: 'World Intent',
        heading: `Why players search for ${world.name}`,
        body: [
          worldIntent(world),
          `A serious ${world.name} page should therefore combine fixed world facts with living memory: top guilds, top players, wars, screenshots, transfers, rare-item stories, and current alternatives.`,
        ],
      },
      {
        eyebrow: 'Historical Archive',
        heading: `What ${world.name} needs to preserve`,
        body: [
          `The core archive should track guilds, wars, leaders, allies, enemies, top player milestones, famous deaths, market moments, quest achievements, world events, and merge effects where relevant.`,
          `OpenTibiaServers.com should treat each claim as source-based. Forum posts, public reference pages, official highscores, GuildStats-style archives, screenshots, and player submissions should be linked or attributed.`,
        ],
      },
      {
        eyebrow: 'Open Tibia Fit',
        heading: `How ${world.name} connects to OT server discovery`,
        body: [
          `A player researching ${world.name} may ultimately want a playable OT server with similar rules, version, pacing, PvP pressure, or community style. That makes world pages useful even when the official-world history is the first search intent.`,
          `The page should connect ${world.name} history to comparable OT servers without pretending official Tibia worlds and private Open Tibia servers are the same product.`,
        ],
      },
    ],
    faqs: [
      {
        question: `What type of Tibia world is ${world.name}?`,
        answer:
          `${world.name} is recorded as a ${world.pvpType} Tibia world. Its lifecycle is ${lifecycle}.`,
      },
      {
        question: `Is ${world.name} an Open Tibia server?`,
        answer:
          `No. ${world.name} is an official Tibia world reference page. OpenTibiaServers.com uses it to preserve search intent and connect players with similar OT server alternatives.`,
      },
      {
        question: `What history should be added for ${world.name}?`,
        answer:
          `The highest-value additions are top guilds, war timelines, top players, major moments, screenshots, forum/source links, merge context, and player-submitted memories with attribution.`,
      },
    ],
    relatedServerQueries: [world.pvpType, world.status, 'Tibia world', 'Open Tibia alternatives'],
  };
}

export function getTibiaWorldPages() {
  return tibiaWorlds.map((world) => getTibiaWorldPage(world.slug));
}
