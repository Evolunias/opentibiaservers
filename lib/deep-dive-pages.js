const serverProfiles = {
  'aurera-global': {
    audience: 'players comparing Aurera Global worlds, official rates, PvP rules, multiclient policy, and high-population activity signals',
    identity:
      'an Open Tibia server network keyword with official world pages, rules, wiki material, multiclient constraints, list-based activity visibility, and world-specific decision points',
    officialSignals:
      'official domain, rules page, wiki worlds page, world status cards, creation dates, location, PvP type, rate information, commands, party bonus context, and otservlist players-online visibility',
    decisionFrame:
      'which Aurera world is active now, whether its PvP/rate profile fits the player, and whether the rules and multiclient limits match the intended play style',
    riskFrame:
      'judging the whole network from one list row, ignoring world-specific differences, misunderstanding event restrictions, or assuming high population means every activity is unrestricted',
    bestFor:
      'players who want a large active Open Tibia environment with official world data, visible rules, and enough population to compare before starting',
    alternatives:
      'single-world highrate PVP servers, Retro-PvP worlds, lowrate real-map servers, and seasonal launches with cleaner economies',
  },
  'baiak-ilusion': {
    audience: 'players looking for Brazilian Baiak 8.60 gameplay, high activity, no-reset positioning, fast PvP, custom systems, and official download/account links',
    identity:
      'a Baiak-style Open Tibia server keyword with official domain signals, public server-list descriptions, highrate 8.60 PVP context, custom-system claims, and strong Brazilian directory visibility',
    officialSignals:
      'official site, play/account surface, public list rows, third-party profile descriptions, rates, owner/name references, PVP map claims, offline trainer, warzones, upgrades, autoloot, and custom client positioning',
    decisionFrame:
      'whether the fast Baiak pace, custom systems, PvP culture, no-reset claim, current online activity, and official client path are worth trusting now',
    riskFrame:
      'using unofficial downloads, treating no-reset claims as verified without owner confirmation, assuming every Baiak server has the same systems, or joining without understanding PvP intensity',
    bestFor:
      'players who want fast Brazilian Baiak progression, 8.60 client identity, custom PvP systems, high online activity, and a long-running no-reset style',
    alternatives:
      'other Baiak servers, FUN servers, high-EXP PVP servers, stricter old-school 8.6 servers, and lower-rate real-map worlds',
  },
  cyleria: {
    audience: 'Polish OTS players researching Cyleria on PC or mobile, no-reset progression, Discord community, events, FAQ details, and 8.6 PVP activity',
    identity:
      'a Polish Open Tibia Server with official FAQ depth, mobile and PC play signals, Discord discovery visibility, no-reset positioning, events, rankings, screenshots, and otservlist activity context',
    officialSignals:
      'official home page, FAQ, Tibia OTS page, Discord discovery listing, mobile/Android references, no-reset copy, events, rankings, player search, screenshots, bot/multiclient FAQ, and PvP level notes',
    decisionFrame:
      'whether the Polish-language community, mobile client, no-reset progression, event cadence, rules, and current activity fit the player better than a global or seasonal alternative',
    riskFrame:
      'downloading from unofficial mirrors, missing Polish-language rule details, misunderstanding bot or multiclient limits, or judging the server only by one population snapshot',
    bestFor:
      'players who want a Polish OTS with strong community identity, mobile access, frequent events, no-reset progression, and visible onboarding resources',
    alternatives:
      'other Polish OTS servers, global 8.6 PVP servers, highrate Baiak servers, mobile-friendly custom servers, and lowrate real-map worlds',
  },
  cyntara: {
    audience: 'highrate players who want documentation, season context, and visible progression systems',
    identity:
      'a highrate Open Tibia server with a strong library layer, rules, guides, wiki material, achievements, armory references, and season-style activity signals',
    officialSignals:
      'library navigation, download links, rules, server information, game guides, wiki pages, armory references, achievements, recent posts, highscores, deaths, guilds, and player-facing activity data',
    decisionFrame:
      'whether the highrate pace, official documentation, community depth, and current season state justify starting now',
    riskFrame:
      'joining too late in a season, misunderstanding custom systems, ignoring the rules, or assuming highrate means shallow progression',
    bestFor:
      'players who want fast progression but still want enough reference material to learn systems, compare equipment, and understand long-term goals',
    alternatives:
      'lowrate real-map servers, older-client PvP worlds, fresh-start seasonal servers, and Fun/Evo servers with different pacing',
  },
  evolunia: {
    audience: 'players researching Fun Evo or PVPe gameplay, rules, active population, downloads, and community fit',
    identity:
      'a named Open Tibia server with Fun Evo and PVPe search intent, official rules, client-version context, community navigation, and listing-based activity signals',
    officialSignals:
      'rules, download references, character pages, online list, highscores, experience history, market, kills, guilds, spells, commands, FAQ, and server information',
    decisionFrame:
      'whether the rules, PVPe identity, client requirements, online activity, and community systems match the player’s expectations',
    riskFrame:
      'downloading from the wrong source, ignoring multiclient rules, assuming every Fun Evo server has the same pacing, or judging only by online count',
    bestFor:
      'players who want faster custom progression, visible activity, community tools, and clear rules before committing time',
    alternatives:
      'highrate servers, real-map servers, stricter old-school servers, and newer seasonal launches with cleaner economies',
  },
  otmadness: {
    audience: 'players searching for high-EXP, FUN-style Open Tibia gameplay with fast activity checks',
    identity:
      'a high-EXP Open Tibia server name with official landing-page signals, version context, play entry points, rules links, and list-driven activity discovery',
    officialSignals:
      'landing page, play entry, server status, version range, IP or connection context, rules, agreements, privacy policy, Discord discovery, and live-list visibility',
    decisionFrame:
      'whether the high-EXP pace, current online activity, official landing page, rules, and alternatives make the server worth trying today',
    riskFrame:
      'judging by EXP rate alone, missing rules or agreements, using unofficial links, or joining a fast server without enough active population',
    bestFor:
      'players who want fast progression, immediate competition, quick experimentation, and a server that can be evaluated quickly through activity signals',
    alternatives:
      'other high-EXP servers, Fun servers, Evo servers, highrate PvP servers, and active launch-season servers',
  },
};

const chapterTemplates = [
  ['Search Intent', 'What the player is really trying to solve'],
  ['First Impression', 'How to judge the page before creating an account'],
  ['Official Website', 'Why the home page matters more than a copied description'],
  ['Download Safety', 'How launcher and client links should be verified'],
  ['Rules', 'Why rules define the real server experience'],
  ['Player Count', 'How to interpret online users without being misled'],
  ['Uptime', 'Why stability is part of trust'],
  ['Progression', 'How rates and custom systems change the decision'],
  ['PvP Fit', 'How conflict rules affect daily play'],
  ['Economy', 'Why market and item progression matter'],
  ['Community', 'What Discord, forum, and board activity reveal'],
  ['Reviews', 'How player reviews should be read'],
  ['Screenshots', 'What visuals should prove'],
  ['Season Timing', 'Why launch age changes the recommendation'],
  ['New Player Path', 'How a first evening should feel'],
  ['Long-Term Fit', 'What keeps players past the first week'],
  ['Owner Signals', 'How claims and official edits improve trust'],
  ['Support', 'Why support channels belong on the profile'],
  ['Comparisons', 'How to compare similar OT servers'],
  ['Alternatives', 'When to choose a different style of server'],
  ['Red Flags', 'What should make players slow down'],
  ['Content Gaps', 'What the page still needs from the community'],
  ['Search Quality', 'Why this page exists beyond keyword matching'],
  ['Community Contributions', 'How players can improve the record'],
  ['Editorial Standard', 'How OpenTibiaServers.com should maintain the page'],
];

function paragraphsFor(page, profile, chapter, index) {
  const name = page.primaryKeyword;
  const [eyebrow, heading] = chapter;
  return [
    `${name} deserves a full reference page because players do not search the name only to see a row in a table. They want context, proof, and a practical answer to whether the server is worth their time. For ${profile.audience}, the useful answer depends on official links, live activity, rules, screenshots, reviews, and community signals. This chapter focuses on ${heading.toLowerCase()} so the page can satisfy real user intent instead of repeating generic Open Tibia phrases.`,
    `The current positioning for ${name} is best understood as ${profile.identity}. That identity should be tested against visible evidence: ${profile.officialSignals}. When those signals are present, the page can become a reliable research hub. When they are missing, the page should say what is missing and invite registered players or verified owners to improve the record with screenshots, notes, official URLs, and corrections.`,
    `A player evaluating ${name} should frame the decision around ${profile.decisionFrame}. The main risk is ${profile.riskFrame}. That is why OpenTibiaServers.com should keep the page structured, current, and interactive: the directory can show live records, the server owner can claim and enrich the listing, and the community can add reviews or media that help future players make better decisions.`,
    index % 3 === 0
      ? `${name} is most useful for ${profile.bestFor}. Players who want something different should compare it against ${profile.alternatives}. This makes the page valuable even when a visitor decides not to play ${name}; the page still helps them understand the category, refine intent, and continue toward a better matching Open Tibia server.`
      : `This section should improve over time. The best additions are precise and verifiable: official announcements, launch dates, rule changes, client updates, screenshots from the actual server, player reviews with context, and owner-confirmed links. Low-effort comments, copied marketing, or unverifiable claims should not become the main value of the page.`,
    `For search quality, the important point is that ${name} should not be treated as a disposable keyword. The page should answer follow-up questions a real player would ask after the first click: where to play, how to verify the source, what to expect from the rules, which screenshots prove the server identity, what recent players say, and which alternatives are better if the fit is wrong. That creates a useful reference page instead of a thin landing page.`,
  ];
}

export function buildDeepDiveSections(page) {
  const profile = serverProfiles[page.slug] || (page.type === 'server' ? {
    audience: `players researching ${page.primaryKeyword} through exact-match search, public listing data, official links, screenshots, reviews, and comparable Open Tibia servers`,
    identity:
      `${page.primaryKeyword} as a named Open Tibia server profile with source snapshots, activity signals, version/rate context, PvP classification, owner-claim potential, and community archive needs`,
    officialSignals:
      [
        page.facts?.find((fact) => fact.label === 'Listed host')?.value,
        page.facts?.find((fact) => fact.label === 'Listing title')?.value,
        page.facts?.find((fact) => fact.label === 'Players snapshot')?.value,
        page.facts?.find((fact) => fact.label === 'EXP / PvP / version')?.value,
        'official website, account path, download/client path, rules, Discord/forum, screenshots, and update notes when available',
      ].filter(Boolean).join(', '),
    decisionFrame:
      `whether ${page.primaryKeyword} has the right activity level, client/version, rules, community trust, screenshots, and gameplay style for the player to start now`,
    riskFrame:
      'treating a public list row as a complete recommendation, using unofficial downloads, ignoring rules, missing owner updates, or failing to compare similar servers before committing time',
    bestFor:
      `players whose search intent matches ${page.primaryKeyword}'s listed version, rate, PvP type, country/community signal, and current activity snapshot`,
    alternatives:
      'other high-activity Open Tibia servers, exact-match named competitors, same-version servers, same-country communities, lower-rate worlds, highrate worlds, and official Tibia world alternatives',
  } : null);
  if (!profile) return [];

  return chapterTemplates.map((chapter, index) => ({
    eyebrow: chapter[0],
    heading: chapter[1],
    body: paragraphsFor(page, profile, chapter, index),
  }));
}

export function countWords(value) {
  if (!value) return 0;
  return String(value).trim().split(/\s+/).filter(Boolean).length;
}

export function estimateCuratedPageWords(page) {
  const pieces = [
    page.h1,
    page.dek,
    page.overview,
    ...(page.facts || []).flatMap((fact) => [fact.label, fact.value]),
    ...(page.infobox || []).flatMap((item) => [item.label, item.value]),
    ...(page.timeline || []).flatMap((item) => [item.date, item.title, item.text]),
    ...(page.evergreenAngles || []),
    ...(page.glossary || []).flatMap((item) => [item.term, item.definition]),
    ...(page.sections || []).flatMap((section) => [section.eyebrow, section.heading, ...(section.body || [])]),
    ...(buildDeepDiveSections(page)).flatMap((section) => [section.eyebrow, section.heading, ...(section.body || [])]),
    ...(page.faqs || []).flatMap((faq) => [faq.question, faq.answer]),
  ];

  return pieces.reduce((total, piece) => total + countWords(piece), 0);
}
