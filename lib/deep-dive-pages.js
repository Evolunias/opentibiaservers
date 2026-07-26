const serverProfiles = {
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
  const profile = serverProfiles[page.slug];
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
