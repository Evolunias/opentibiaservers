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
  const missingSource = (field, guidance) => `${server.name} has no verified source mapped for ${field} yet. ${guidance}`;

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
      ? ['Official or community material references vocation or class-specific balance. Keep the exact vocation names and notes from source pages once they are verified.']
      : [missingSource('vocation or class detail', 'Add the official balance page, class note, or owner statement to complete this section.')],
    items: includes(['item', 'equipment', 'upgrade', 'relic', 'loot', 'craft'])
      ? ['Available material mentions item systems, loot, crafting, upgrades, or equipment. Keep exact item names attached to the pages that verify them.']
      : [missingSource('item or equipment detail', 'Add the official item page, wiki entry, or owner guide before treating equipment claims as final.')],
    monsters: includes(['monster', 'boss', 'spawn', 'hunting', 'dungeon'])
      ? ['Available material mentions monsters, bosses, hunting places, dungeons, or spawns. Keep exact creature names and locations tied to direct source links.']
      : [missingSource('monster or spawn detail', 'Add a hunt guide, bestiary note, or official event record to support this section.')],
    quests: includes(['quest', 'task', 'mission'])
      ? ['Available material mentions quests, tasks, missions, or guided progression. Keep exact names, requirements, and rewards tied to direct source links.']
      : [missingSource('quest or task trail', 'Add a walkthrough, NPC guide, or official announcement to support it.')],
    bosses: includes(['boss', 'raid', 'arena'])
      ? ['Available material mentions bosses, raids, arenas, or scheduled encounters. Keep exact schedules, access rules, and rewards tied to direct source links.']
      : [missingSource('boss, raid, or arena detail', 'Add a schedule, changelog, or official event note to support it.')],
    downloads: [
      server.website_url || server.external_launch_url
        ? `Candidate official download/account source: ${server.website_url || server.external_launch_url}`
        : 'No verified download or account path is mapped yet. Use the official site or a claimed owner link before installing anything.',
    ],
    rules: includes(['rule', 'policy', 'bot', 'mc', 'multi-client', 'pvp', 'frag'])
      ? ['Official or community material references rules or policy. Keep the exact rule pages and current enforcement notes attached once they are verified.']
      : [missingSource('rule page', 'Add the official rules, policy notes, or staff FAQ to complete it.')],
    screenshots: includes(['screenshot', 'gallery', 'media', 'image'])
      ? ['Official or community material references screenshots or media. Mirror only with permission or license clarity.']
      : [missingSource('screenshot or media source', 'Add an official gallery, forum post, or owner-approved image set to support it.')],
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
      : [missingSource('owner or manager contact', 'Add a contact page, forum account, Discord, or claim response when available.')]),
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
    return !sections[field]?.length || sections[field].some((item) => String(item).toLowerCase().includes('no verified source mapped'));
  });

  return {
    status,
    statusLabel: status === 'partial' ? 'Source-backed profile' : 'Directory snapshot',
    isComplete: status === 'verified' && missingFields.length === 0,
    requiredFields,
    missingFields,
    sourceCandidates: candidateSources,
    sourcePolicy:
      'Use official server websites, server-run knowledge bases, OTLand threads, moderated community pages, public reference pages, GitHub repositories, and directly attributed screenshots. Do not use unverified download mirrors.',
    gameplayGuide: buildGameplayGuide(server, status),
    systems: sections,
    editorialQueue: [
      server.website_url || server.external_launch_url
        ? `Confirm the live website, client path, and rule page for ${server.name} against the current snapshot.`
        : `Add a verified website or launch page for ${server.name} before treating the profile as complete.`,
      `Attach dated screenshots, launch notes, and community discussion so the page has something a player can inspect.`,
      `Record owner or manager contact details once a source confirms them.`,
      missingFields.length ? `Open fields: ${missingFields.join(', ')}` : 'Keep refreshing the source trail after every update.',
    ],
  };
}
