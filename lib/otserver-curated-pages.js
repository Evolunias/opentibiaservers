import { topOtservlistServers } from './top-otservlist-servers.js';
import { buildServerWikiDepth } from './server-wiki-depth.js';
import { polishPlayerFacingCopy } from './editorial-copy.js';

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
  const wikiDepth = buildServerWikiDepth(server, source);

  return polishPlayerFacingCopy({
    slug: server.slug,
    path: `/${server.slug}`,
    type: 'server',
    title: `${server.name} Open Tibia Server: Status, Rates, Rules, and Player Guide`,
    h1: `${server.name}: server status, how to play, and community`,
    dek: `Meet ${server.name} beyond the list row: verify ${server.host}, understand its ${style} pace, find safer play links, read the rules, and discover the player stories that give the world a character of its own.`,
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
    pageLabel: wikiDepth.statusLabel,
    wikiDepth,
    overview:
      `${server.name} asks for more than a quick connection test. A player needs to know whether ${server.host} is the right host, which client path belongs to the operator, how the ${style} profile feels in practice, what the rules protect or forbid, and whether the community is lively enough to make a new character feel welcome rather than merely counted.`,
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
      { label: 'Directory position at capture', value: `#${server.source_rank}` },
      { label: 'Evidence trail', value: 'Public listing snapshot plus official and community sources where available' },
      { label: 'Claim status', value: 'Unclaimed until verified by a server owner or manager' },
      { label: 'Profile depth', value: wikiDepth.statusLabel },
      { label: 'Details still needed', value: wikiDepth.missingFields.length ? wikiDepth.missingFields.join(', ') : 'None' },
    ],
    timeline: [
      {
        date: 'Public snapshot',
        title: `${server.name} appears among active directory listings`,
        text:
          `${server.name} is represented by ${server.host} with ${playerSnapshot} players, ${server.uptime_percent}% uptime, ${server.exp_rate ? `x${server.exp_rate}` : 'unknown'} EXP, ${server.world_type || 'unknown'} PvP type, and ${server.version || 'unknown'} client context at the time of capture.`,
      },
      {
        date: 'Source trail',
        title: 'Official links and community evidence deepen the picture',
        text:
          `${server.name}'s record becomes more trustworthy as it gathers the official website, account and client paths, rules, Discord or forum, screenshots, changelogs, player milestones, guilds, conflicts, events, quests, bosses, and owner-confirmed systems.`,
      },
      {
        date: 'Community archive',
        title: `${server.name} should become a permanent reference record`,
        text:
          `The long-term goal is to preserve what makes ${server.name} distinct: launch history, player stories, screenshots, reviews, systems, bosses, events, PvP conflicts, market behavior, and comparable servers.`,
      },
    ],
    evergreenAngles: [
      `${server.name} should lead players to the real host, current activity, official site, and owner-controlled account or client path.`,
      `${style} labels need plain-language context before a player commits an evening or a season.`,
      `Owner-confirmed links, screenshots, rules, reviews, and uptime history remain distinct from public list snapshots.`,
      `Notable guilds, players, wars, events, and screenshots deserve dates and source attribution.`,
      `This profile remains ${wikiDepth.statusLabel} until the important gameplay fields carry dependable evidence.`,
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
        label: 'What the record still needs',
        value:
          `${server.name} still needs official rules, launch history, changelogs, screenshots, community links, owner contact, player milestones, guild and event history, item and vocation notes, quests, bosses, and reviews with context. Until those details are verified, public snapshots and community accounts remain clearly separated.`,
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
        eyebrow: 'First Question',
        heading: `What players hope to find in ${server.name}`,
        body: [
          `Players arriving at ${server.name} usually want a direct path: where to play, whether ${server.host} is current, which client belongs to the operator, how active the world feels, and whether its pace deserves their time.`,
          `The richer story begins after that first answer. Rules, screenshots, guilds, community channels, events, systems, reviews, and remembered moments reveal whether ${server.name} is merely reachable or genuinely inviting.`,
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
        eyebrow: 'Living Record',
        heading: `What the community can still preserve about ${server.name}`,
        body: [
          `${server.name} still needs owner-confirmed links, rules, launch and update history, screenshots, first-session steps, rate tables, vocation notes, item systems, monsters, bosses, quests, events, player milestones, guild context, and reviews that describe a real experience.`,
          `Each addition should carry enough context to stand on its own: a date, source, screenshot origin, or named in-game observation. That lets ${server.name}'s story grow without allowing promotion or rumor to masquerade as memory.`,
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
  });
}

export function getOtServerCuratedPages() {
  return topOtservlistServers.map((server) => getOtServerCuratedPage(server.slug));
}
