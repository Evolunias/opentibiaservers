function titleCase(value = '') {
  return String(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function hostDomain(server = {}) {
  const raw = server.website_url || server.external_launch_url || (server.host ? `https://${server.host}/` : '');
  try {
    return new URL(raw).hostname.replace(/^www\./, '');
  } catch {
    return server.host || '';
  }
}

function isCurated(server = {}, source = {}) {
  return Boolean(
    source.sourceLinks?.length > 1 ||
    source.notes?.length ||
    server.official_summary ||
    server.custom_sections?.length ||
    server.research_sources?.some((item) => ['official', 'official_wiki', 'community'].includes(item?.type))
  );
}

function buildCandidateSources(server = {}, source = {}) {
  const officialUrl = server.website_url || server.external_launch_url || (server.host ? `https://${server.host}/` : null);
  const normalizeLink = (link, type, use) => {
    if (!link) return null;
    const href = link.href || link.url || null;
    const label = link.label || href || null;
    if (!href || !label) return null;
    return {
      type: link.type || type,
      label,
      href,
      use: link.use || link.note || use,
    };
  };
  const candidates = [
    officialUrl ? {
      type: 'official_website',
      label: `${server.name} official website candidate`,
      href: officialUrl,
      use: 'Downloads, account creation, rules, screenshots, changelogs, support contacts, and official system descriptions.',
    } : null,
    {
      type: 'directory_snapshot',
      label: 'otservlist players-online ranking',
      href: 'https://otservlist.org/list-server_players_online-desc.html',
      use: 'Public discovery source for host, online count, uptime, EXP, PvP, and client/version signals.',
    },
    {
      type: 'otland_search',
      label: `OTLand search for ${server.name}`,
      href: `https://otland.net/search/?q=${encodeURIComponent(server.name)}`,
      use: 'Launch threads, update posts, owner announcements, screenshots, and moderated community discussion.',
    },
    {
      type: 'wiki_search',
      label: `${server.name} player knowledge search`,
      href: `https://www.google.com/search?q=${encodeURIComponent(`${server.name} Open Tibia guide items monsters quests`)}`,
      use: 'External player references, item/monster guides, quest notes, and historical gameplay documentation where available.',
    },
    ...(Array.isArray(server.research_sources) ? server.research_sources.map((link) => normalizeLink(link, 'known_source', 'Existing source already attached to this server record.')) : []),
    ...(Array.isArray(source.sourceLinks) ? source.sourceLinks.map((link) => normalizeLink(link, 'known_source', 'Existing curated source already attached to this server page.')) : []),
  ].filter(Boolean);

  const seen = new Set();
  return candidates.filter((candidate) => {
    const key = `${candidate.type}:${candidate.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildGameplayGuide(server = {}, status) {
  const name = server.name;
  const version = server.version || 'unconfirmed client';
  const exp = server.exp_rate ? `x${server.exp_rate}` : 'unconfirmed';
  const pvp = server.world_type || 'unconfirmed PvP';
  const domain = hostDomain(server);

  return [
    {
      heading: `How to start playing ${name}`,
      body:
        status === 'verified'
          ? `Use the official ${domain} website and any linked wiki/download pages before creating an account. Confirm the active client, account creation path, rules, support channel, and server status from official pages before using any launcher or custom client.`
          : `Start with the candidate official website for ${name}, then confirm the active download path, account creation page, Discord/forum, and rules before installing anything. Until owner or community verification is complete, avoid third-party mirrors and rely on official or moderated sources only.`,
    },
    {
      heading: `${name} progression and fit`,
      body: `${name} is currently classified from public data as ${version}, ${exp} EXP, ${pvp}, hosted through ${server.host}. Players should compare that with official stages, task systems, trainers, hunting areas, custom systems, reset policy, bot policy, and donation/shop rules before investing time.`,
    },
    {
      heading: `${name} safety checklist`,
      body: `Verify the current website, client hash or official release channel, staff contact, rules, recent changelog, Discord/forum activity, screenshots, and live online data. Treat outdated screenshots or copied download links as unverified until they match an official source.`,
    },
  ];
}

function buildSystemRows(server = {}, source = {}) {
  const knownText = [
    server.official_summary,
    ...(server.feature_bullets || []),
    ...(server.custom_sections || []).map((section) => `${section.title || ''} ${section.body || ''}`),
    ...(source.notes || []).map((note) => note.value || ''),
  ].join(' ').toLowerCase();

  const includes = (words) => words.some((word) => knownText.includes(word));
  const fallback = `${server.name} still needs an official, owner-confirmed, or carefully attributed community source for this field.`;

  return {
    rates: [
      server.exp_rate ? `Experience rate: x${server.exp_rate}` : 'Experience rate pending',
      server.skill_rate ? `Skill rate: x${server.skill_rate}` : null,
      server.magic_rate ? `Magic rate: x${server.magic_rate}` : null,
      server.loot_rate ? `Loot rate: x${server.loot_rate}` : null,
      `PvP type: ${server.world_type || 'pending'}`,
      `Client/version: ${server.version || 'pending'}`,
    ].filter(Boolean),
    vocations: includes(['vocation', 'class', 'monk', 'rebalance'])
      ? ['Official/community material references vocation or class-specific balance. Preserve exact vocation notes from source pages as they are verified.']
      : [fallback],
    items: includes(['item', 'equipment', 'upgrade', 'relic', 'loot', 'craft'])
      ? ['Available material mentions item systems, loot, crafting, upgrades, or equipment. Exact item names should remain attached to the pages that verify them.']
      : [fallback],
    monsters: includes(['monster', 'boss', 'spawn', 'hunting', 'dungeon'])
      ? ['Available material mentions monsters, bosses, hunting places, dungeons, or spawns. Exact creature names and locations still need direct source links.']
      : [fallback],
    quests: includes(['quest', 'task', 'mission'])
      ? ['Available material mentions quests, tasks, missions, or guided progression. Exact names, requirements, and rewards still need direct source links.']
      : [fallback],
    bosses: includes(['boss', 'raid', 'arena'])
      ? ['Available material mentions bosses, raids, arenas, or scheduled encounters. Exact schedules, access rules, and rewards still need direct source links.']
      : [fallback],
    downloads: [
      server.website_url || server.external_launch_url
        ? `Candidate official download/account source: ${server.website_url || server.external_launch_url}`
        : 'Official download source pending.',
    ],
    rules: includes(['rule', 'policy', 'bot', 'mc', 'multi-client', 'pvp', 'frag'])
      ? ['Official/community material references rules or policy. Preserve exact rule pages and current enforcement notes as they are verified.']
      : [fallback],
    screenshots: includes(['screenshot', 'gallery', 'media', 'image'])
      ? ['Official/community material references screenshots or media. Mirror only with permission or license clarity.']
      : [fallback],
    history: [
      `${server.name} appears in the otservlist-derived snapshot dated ${server.source_payload?.snapshot_date || server.updated_at || 'unknown'} with ${server.players_online || 0} players online, ${server.uptime_percent || 'unknown'}% uptime, and source rank #${server.source_rank || 'n/a'}.`,
    ],
    ownerContacts: ([
      server.contact_discord ? `Discord/community: ${server.contact_discord}` : null,
      server.owner_email || server.contact_email ? `Email/contact: ${server.owner_email || server.contact_email}` : null,
      server.forum_url ? `Forum/community: ${server.forum_url}` : null,
    ].filter(Boolean).length
      ? [
          server.contact_discord ? `Discord/community: ${server.contact_discord}` : null,
          server.owner_email || server.contact_email ? `Email/contact: ${server.owner_email || server.contact_email}` : null,
          server.forum_url ? `Forum/community: ${server.forum_url}` : null,
        ].filter(Boolean)
      : [fallback]),
  };
}

export function buildServerWikiDepth(server = {}, source = {}) {
  const curated = isCurated(server, source);
  const candidateSources = buildCandidateSources(server, source);
  const sourceCount = candidateSources.filter((item) => [
    'official_website',
    'official',
    'official_wiki',
    'official_candidate',
    'community',
    'known_source',
    'directory_snapshot',
  ].includes(item.type)).length;
  const status = curated && sourceCount >= 3 ? 'partial' : 'directory-only';
  const sections = buildSystemRows(server, source);
  const requiredFields = ['gameplayGuide', 'rates', 'vocations', 'items', 'monsters', 'quests', 'bosses', 'downloads', 'rules', 'screenshots', 'history', 'ownerContacts'];
  const missingFields = requiredFields.filter((field) => {
    if (field === 'gameplayGuide') return false;
    return !sections[field]?.length || sections[field].some((item) => String(item).includes('still needs an official, owner-confirmed'));
  });

  return {
    status,
    statusLabel: status === 'partial' ? 'Partially documented' : 'Directory profile',
    isComplete: status === 'verified' && missingFields.length === 0,
    requiredFields,
    missingFields,
    sourceCandidates: candidateSources,
    sourcePolicy:
      'Use official server websites, server-run knowledge bases, OTLand threads, moderated community pages, public reference pages, GitHub repositories, and directly attributed screenshots. Do not use unverified download mirrors.',
    gameplayGuide: buildGameplayGuide(server, status),
    systems: sections,
    editorialQueue: [
      `Preserve the exact ${server.name} first-session steps from the official site or an owner-confirmed guide.`,
      `Add carefully sourced ${server.name} items, monsters, bosses, quests, screenshots, and rule pages.`,
      `Record launch history, major updates, top guild/player moments, and current owner contacts with source links.`,
      `Mark this ${titleCase(status)} profile verified only after every required field has dependable evidence.`,
    ],
  };
}
