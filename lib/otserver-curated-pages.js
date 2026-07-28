import { topOtservlistServers } from './top-otservlist-servers.js';

const specificResearch = {
  demolidores: {
    sourceLinks: [
      { label: 'otservlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    ],
    notes: [
      {
        label: 'Archive depth',
        value:
          'The otservlist ranking identifies Demolidores through sv.demolidores.com.br with x999 EXP, PVP, client 8.60, and high activity. Owner-confirmed website, screenshots, rules, and historical context should be added through the claim flow.',
      },
    ],
  },
  oxygenot: {
    sourceLinks: [
      { label: 'OxygenOT official website', href: 'https://www.oxygenot.live/' },
      { label: 'OxygenOT OTLand launch thread', href: 'https://otland.net/threads/germany-custom-oxygenot-season-ix-official-launch-rpg-pvp-custom-map-start-on-thursday-27-02-2025-at-18-00-gmt-20-00-cest.288873/' },
      { label: 'otservlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    ],
    notes: [
      {
        label: 'Official systems and updates',
        value:
          'The official OxygenOT site describes a custom Open Tibia server for Windows and Android with custom quests, dungeons, bosses, crafting, fishing, daily tasks, unique progression, PvP events, recent client updates, staff announcements, weekend events, giveaways, and rule clarifications around AFK automation.',
      },
      {
        label: 'Community launch source',
        value:
          'The OTLand thread identifies login.oxygenot.live:7171, official website oxygenot.live, custom RPG/PVP positioning, and season-launch discussion that can be mined for historical context and screenshots.',
      },
    ],
  },
};

function styleLabel(server) {
  const parts = [server.version ? `${server.version}` : null, server.world_type, server.exp_rate ? `x${server.exp_rate}` : null]
    .filter(Boolean)
    .join(' ');
  return parts || 'Open Tibia';
}

function categoryFor(server) {
  if (String(server.world_type).toUpperCase() === 'WAR') return 'war server';
  if (String(server.world_type).toUpperCase() === 'FUN') return 'fun/evo server';
  if (Number(server.exp_rate) >= 900) return 'high-EXP server';
  if (server.version === '7.4' || server.version === '7.6' || server.version === '8.0') return 'old-school server';
  if (String(server.world_type).toLowerCase().includes('npvp')) return 'non-PvP server';
  return 'PvP server';
}

export function getOtServerCuratedPage(slug) {
  const server = topOtservlistServers.find((item) => item.slug === slug);
  if (!server) return null;

  const source = specificResearch[slug] || {};
  const listTitle = server.source_payload?.list_title || server.name;
  const category = categoryFor(server);
  const style = styleLabel(server);
  const uniqueIps = server.source_payload?.unique_ips_snapshot;
  const playerSnapshot = `${server.players_online}${uniqueIps ? ` (${uniqueIps} unique IPs)` : ''} / ${server.max_players}`;

  return {
    slug: server.slug,
    path: `/${server.slug}`,
    type: 'server',
    title: `${server.name} Open Tibia Server Wiki and Player Research Page`,
    h1: `${server.name}: ${listTitle}, Activity Snapshot, and Player Research`,
    dek: `A structured ${server.name} reference page for players researching ${server.host}, ${style}, live activity, uptime, source links, screenshots, reviews, and similar Open Tibia servers.`,
    primaryKeyword: server.name,
    keywords: [
      server.name,
      `${server.name} server`,
      `${server.name} OT`,
      `${server.name} Open Tibia`,
      `${server.name} ${server.version || ''}`.trim(),
      `${server.name} ${server.world_type || ''}`.trim(),
      `${server.name} players online`,
      `${server.name} review`,
    ],
    metaDescription:
      `${server.name} Open Tibia server reference covering ${server.host}, ${style}, players online, uptime, EXP, PvP type, source links, screenshots, reviews, and similar servers.`,
    updatedAt: '2026-07-26',
    pageLabel: 'Server Reference',
    overview:
      `${server.name} is a high-intent Open Tibia server keyword because players are not only looking for an IP row. They want to know whether ${server.host} is the correct host, whether the server is active now, what the ${style} listing means, how stable the server appears, what screenshots and rules exist, and whether the server fits their preferred style before they create an account or download a client.`,
    cta: { label: `Compare ${server.name} Alternatives`, href: `/?search=${encodeURIComponent(server.name)}` },
    facts: [
      { label: 'Category', value: `Open Tibia ${category}` },
      { label: 'Listed host', value: `${server.host}:${server.port || 7171}` },
      { label: 'Listing title', value: listTitle },
      { label: 'Players snapshot', value: playerSnapshot },
      { label: 'Uptime snapshot', value: `${server.uptime_percent}%` },
      { label: 'EXP / PvP / version', value: `${server.exp_rate ? `x${server.exp_rate}` : 'n/a'} / ${server.world_type || 'n/a'} / ${server.version || 'n/a'}` },
      { label: 'Country signal', value: server.location || 'Unknown' },
    ],
    infobox: [
      { label: 'Primary topic', value: `${server.name} Open Tibia server` },
      { label: 'Canonical page', value: `opentibiaservers.com/${server.slug}` },
      { label: 'Source rank snapshot', value: `#${server.source_rank} in the local otservlist-derived seed` },
      { label: 'Source', value: 'Public server-list snapshot plus official/community research where available' },
      { label: 'Claim status', value: 'Unclaimed until verified by a server owner or manager' },
    ],
    timeline: [
      {
        date: 'Source snapshot',
        title: `${server.name} appears in high-activity server-list discovery`,
        text:
          `${server.name} is represented by ${server.host} with ${playerSnapshot} players, ${server.uptime_percent}% uptime, ${server.exp_rate ? `x${server.exp_rate}` : 'unknown'} EXP, ${server.world_type || 'unknown'} PvP type, and ${server.version || 'unknown'} client/version context in the current directory seed.`,
      },
      {
        date: 'Research phase',
        title: 'Official and community sources need preservation',
        text:
          `The page should collect official website links, account/download paths, rules, Discord/forum channels, screenshots, changelogs, top players, guilds, war/event history, and owner-confirmed system notes.`,
      },
      {
        date: 'Community archive',
        title: `${server.name} should become a permanent reference record`,
        text:
          `The long-term goal is to preserve what makes ${server.name} distinct: launch history, player stories, screenshots, reviews, systems, bosses, events, PvP conflicts, market behavior, and comparable servers.`,
      },
    ],
    evergreenAngles: [
      `${server.name} exact-match intent: players want the real host, live activity, official site, and download/account path.`,
      `${style} comparison: raw EXP and PvP labels need explanation before a player commits time.`,
      `Trust layer: owner-claimed links, screenshots, rules, reviews, and uptime history should be separated from public list snapshots.`,
      `Community memory: notable guilds, top players, wars, events, and screenshots should be preserved with source attribution.`,
    ],
    glossary: [
      {
        term: 'Source snapshot',
        definition:
          'A time-sensitive capture from a public server list. It is useful for discovery, but it should be refreshed and verified against official sources.',
      },
      {
        term: category,
        definition:
          `A practical category for ${server.name} based on its listed version, rates, and PvP type. It helps players compare similar Open Tibia servers without assuming all servers in the category play the same.`,
      },
      {
        term: 'Claimed listing',
        definition:
          'A profile verified by a server owner or manager so official links, screenshots, descriptions, rules, and support channels can be corrected and expanded.',
      },
    ],
    sourceLinks: [
      ...(source.sourceLinks || []),
      { label: 'otservlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
      ...(server.website_url ? [{ label: `${server.name} candidate official website`, href: server.website_url }] : []),
    ],
    researchNotes: [
      {
        label: 'Public list snapshot',
        value:
          `${server.name} is currently seeded from a public players-online ranking with host ${server.host}, listing title "${listTitle}", ${playerSnapshot} players, ${server.uptime_percent}% uptime, ${server.exp_rate ? `x${server.exp_rate}` : 'unknown'} EXP, ${server.world_type || 'unknown'} PvP type, and client/version ${server.version || 'n/a'}.`,
      },
      ...(source.notes || []),
      {
        label: 'Needed owner/community research',
        value:
          `The next research layer should add official rules, launch date, changelog, screenshots, Discord/forum links, owner contact, top player notes, guild/wars/events history, and player reviews. Until those facts are verified, the page keeps list data and editorial notes separate.`,
      },
    ],
    mediaLeads: [
      ...(server.website_url ? [{
        label: `${server.name} candidate official website`,
        href: server.website_url,
        note:
          'Candidate source for official screenshots, branding, account creation, downloads, rules, and owner-approved media.',
      }] : []),
      {
        label: 'Public server-list source',
        href: 'https://otservlist.org/list-server_players_online-desc.html',
        note:
          'Source lead for players-online, uptime, version, EXP, PvP type, and host discovery. It should be refreshed periodically.',
      },
    ],
    sections: [
      {
        eyebrow: 'Player Intent',
        heading: `Why players search for ${server.name}`,
        body: [
          `Players searching for ${server.name} usually want a direct answer: where to play, whether ${server.host} is current, how many players are online, what version/client is required, and whether the server style is worth their time.`,
          `A stronger page answers the first-click intent and the follow-up questions: rules, screenshots, community channels, events, systems, top players, reviews, and similar alternatives.`,
        ],
      },
      {
        eyebrow: 'Activity Signals',
        heading: `How to read the ${server.name} listing snapshot`,
        body: [
          `The current snapshot shows ${playerSnapshot} players, ${server.uptime_percent}% uptime, ${server.exp_rate ? `x${server.exp_rate}` : 'unknown'} EXP, ${server.world_type || 'unknown'} PvP type, and ${server.version || 'n/a'} version context. Those fields are useful, but none of them alone proves quality.`,
          `Players should compare the snapshot with official news, rules, download links, Discord/forum activity, real screenshots, and recent player reviews.`,
        ],
      },
      {
        eyebrow: 'Research Standard',
        heading: `What ${server.name} still needs`,
        body: [
          `${server.name} needs owner-confirmed official links, rules, launch/update history, screenshots, system descriptions, event calendars, top-player and guild context, and a review/conversation trail from real players.`,
          `This page is structured so those additions can be layered in without replacing sourced facts with unverifiable marketing copy.`,
        ],
      },
    ],
    faqs: [
      {
        question: `What is ${server.name}?`,
        answer:
          `${server.name} is an Open Tibia server listing associated with ${server.host}, ${style}, ${server.location || 'unknown'} location signal, and public players-online activity.`,
      },
      {
        question: `Is ${server.name} online now?`,
        answer:
          `The page contains a source snapshot, not a permanent guarantee. Public list data changes frequently, so online count and uptime should be refreshed by sync jobs and checked against official sources.`,
      },
      {
        question: `What should be verified before playing ${server.name}?`,
        answer:
          `Verify the official website, account/download path, client version, rules, PvP type, current online count, support channels, and whether screenshots or reviews come from the actual server.`,
      },
    ],
    relatedServerQueries: [server.name, server.world_type, server.version, server.location, category].filter(Boolean),
  };
}

export function getOtServerCuratedPages() {
  return topOtservlistServers.map((server) => getOtServerCuratedPage(server.slug));
}
