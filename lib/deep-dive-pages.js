import { naturalList, pickEditorial } from './editorial-voice.js';

const serverProfiles = {
  'aurera-global': {
    audience: 'players comparing Aurera Global worlds, rates, PvP rules, multiclient policy, and population signals',
    identity: 'a multi-world Open Tibia network whose individual worlds can differ in age, location, rates, activity, and PvP expectations',
    officialSignals: 'the official domain, rules, world status cards, creation dates, locations, PvP types, rates, commands, party bonuses, and public player-list activity',
    decisionFrame: 'which Aurera world is active now, whether its PvP and rate profile fit, and whether its rules match the intended play style',
    riskFrame: 'judging the whole network from one list row or assuming that one world represents every Aurera community',
    bestFor: 'players who want a large environment with several worlds, visible rules, and enough public information to compare before starting',
    alternatives: 'single-world high-rate PvP servers, Retro-PvP worlds, low-rate real-map servers, or seasonal launches with younger economies',
  },
  'baiak-ilusion': {
    audience: 'players drawn to Brazilian Baiak 8.60 gameplay, fast PvP, custom systems, and a no-reset identity',
    identity: 'a Brazilian Baiak-style world where rapid progression, custom systems, and PvP intensity carry more weight than official-world pacing',
    officialSignals: 'the official site, account surface, public list rows, rates, offline training, warzones, upgrades, autoloot, map claims, and custom-client information',
    decisionFrame: 'whether the fast Baiak pace, custom systems, PvP culture, current activity, and official client path feel trustworthy and enjoyable',
    riskFrame: 'using an unofficial download, assuming every Baiak system works alike, or joining without understanding the server\'s PvP intensity',
    bestFor: 'players who enjoy fast Brazilian 8.60 progression, custom PvP systems, and a world that presents itself as persistent',
    alternatives: 'other Baiak servers, high-EXP fun servers, stricter old-school 8.6 worlds, or lower-rate real-map communities',
  },
  cyleria: {
    audience: 'Polish OTS players comparing PC and mobile access, persistent progression, events, rankings, and community support',
    identity: 'a Polish Open Tibia world with mobile and PC play, a visible event calendar, rankings, screenshots, and a strong community identity',
    officialSignals: 'the official home page, FAQ, mobile information, rankings, player search, screenshots, event notes, Discord presence, and rules covering automation or multiclient play',
    decisionFrame: 'whether the language, mobile support, persistent progression, event cadence, rules, and present activity suit the player',
    riskFrame: 'missing Polish-language rule details, trusting an unofficial client mirror, or reading one population snapshot as the whole community story',
    bestFor: 'players who want a Polish OTS with mobile access, recurring events, persistent characters, and visible onboarding material',
    alternatives: 'other Polish OTS worlds, global 8.6 PvP servers, Baiak servers, mobile-friendly custom worlds, or low-rate real maps',
  },
  cyntara: {
    audience: 'high-rate players who value documentation, seasonal context, visible progression systems, and a long trail of community history',
    identity: 'a high-rate Open Tibia server with a substantial library, rules, guides, achievements, armory references, and season-oriented activity',
    officialSignals: 'official downloads, rules, server information, guides, armory pages, achievements, recent posts, highscores, deaths, guilds, and player activity',
    decisionFrame: 'whether the high-rate pace, documentation, current season, rules, and community depth justify beginning a character now',
    riskFrame: 'joining late in a season, overlooking a custom progression system, ignoring the rules, or mistaking high rate for shallow play',
    bestFor: 'players who want fast progression while still having enough documentation to learn systems and plan long-term goals',
    alternatives: 'low-rate real maps, older-client PvP worlds, fresh seasonal servers, or fun and evolution servers with different pacing',
  },
  evolunia: {
    audience: 'players comparing Fun Evo or PVPe gameplay, rules, current activity, client requirements, and long-term community fit',
    identity: 'a recognizable Fun Evo and PVPe server with rules, character tools, market and guild pages, spell references, and listing-based activity signals',
    officialSignals: 'rules, download information, character pages, online lists, highscores, market history, kills, guilds, spells, commands, FAQ material, and server information',
    decisionFrame: 'whether the PVPe identity, rules, client path, online activity, and progression style match what the player expects from an evolution server',
    riskFrame: 'using the wrong download, overlooking multiclient rules, assuming every Fun Evo server shares one pace, or judging only by online count',
    bestFor: 'players who enjoy faster custom progression, visible activity, community tools, and clear rules before committing time',
    alternatives: 'high-rate PvP servers, real-map worlds, stricter old-school servers, or younger seasonal launches',
  },
  otmadness: {
    audience: 'players seeking high-EXP, fun-style Open Tibia play with quick progression and visible activity',
    identity: 'a high-EXP Open Tibia server whose appeal rests on speed, immediate competition, official entry points, and list-driven activity',
    officialSignals: 'the official landing page, play entry, status, version context, rules, agreements, Discord presence, and live-list visibility',
    decisionFrame: 'whether the high-EXP pace, present population, rules, and official entry path make the server worth trying today',
    riskFrame: 'judging by EXP alone, skipping the rules, trusting an unofficial link, or entering a fast world without enough active competition',
    bestFor: 'players who want quick progression, immediate experimentation, and competition that can be evaluated without a long opening grind',
    alternatives: 'other high-EXP, Fun, Evo, or high-rate PvP servers and newly launched seasonal worlds',
  },
};

function fact(page, labels, fallback) {
  const wanted = Array.isArray(labels) ? labels : [labels];
  return page.facts?.find((entry) => wanted.includes(entry.label))?.value || fallback;
}

function profileFor(page) {
  if (serverProfiles[page.slug]) return serverProfiles[page.slug];
  const style = fact(page, ['EXP / PvP / version', 'Server style'], 'its listed rate, PvP, and client profile');
  return {
    audience: `players deciding whether ${page.primaryKeyword}'s activity, version, rates, rules, and community fit their available time`,
    identity: `${page.primaryKeyword} as a named Open Tibia server represented by ${style}, public directory facts, and a profile that owners and players can keep current`,
    officialSignals: 'the listed host, official website when verified, account and client paths, rules, Discord or forum, screenshots, changelog, and current status',
    decisionFrame: `whether ${page.primaryKeyword} is active, safe to join, understandable on a first visit, and aligned with the player's preferred pace`,
    riskFrame: 'treating one directory snapshot as a recommendation, trusting an unofficial download, or overlooking rules and season timing',
    bestFor: `players whose preferred version, rate, PvP type, region, and activity level match ${page.primaryKeyword}'s published profile`,
    alternatives: 'same-version worlds, nearby communities, lower-rate servers, higher-rate servers, and differently structured PvP environments',
  };
}

function buildSections(page, profile) {
  const name = page.primaryKeyword;
  const host = fact(page, 'Listed host', 'the currently listed host');
  const style = fact(page, ['EXP / PvP / version', 'Server style'], 'the published gameplay profile');
  const players = fact(page, 'Players snapshot', 'the latest public activity snapshot');
  const uptime = fact(page, 'Uptime snapshot', 'the latest public uptime reading');
  const country = fact(page, 'Country signal', 'the listed region');
  const sourceLabels = (Array.isArray(page.sourceLinks) ? page.sourceLinks : [])
    .filter((source) => source && source.label)
    .map((source) => source.label);
  const sourcePhrase = naturalList(sourceLabels.slice(0, 4), 'the public directory record');
  const missing = page.wikiDepth?.missingFields || [];
  const missingPhrase = naturalList(missing.slice(0, 6), 'no major fields currently flagged');
  const opening = pickEditorial(page.slug, 'server-opening', [
    `${name} is not merely an address in a list. It is a promise about pace, conflict, community, and the hours a player may choose to invest.`,
    `A server earns attention in seconds and trust much more slowly. ${name} has to make both moments count.`,
    `The first question around ${name} is easy: is it online? The better question is whether the world behind the status light feels worth entering.`,
    `Every Open Tibia server asks for two investments: a download and a player's time. ${name} should justify both with clear evidence.`,
  ]);

  return [
    {
      eyebrow: 'World Character',
      heading: `What gives ${name} its identity`,
      body: [
        `${opening} The available profile presents it as ${profile.identity}. That identity matters because it tells a player what kind of evening, rivalry, and progression arc the server is offering before a character is created.`,
        `${name} will feel most familiar to ${profile.audience}. Public facts can establish the outline, but the world's personality comes from how rules are enforced, how quickly players meet one another, and whether the community leaves behind helpful guides, stories, and honest criticism.`,
      ],
    },
    {
      eyebrow: 'First Evening',
      heading: `The safest way to begin ${name}`,
      body: [
        `A good first evening on ${name} begins at ${host}, then moves through an official account page and an owner-controlled client or launcher. The path should be short, legible, and free of unrelated mirrors. Rules and support links belong before the download button becomes a leap of faith.`,
        `Before logging in, compare ${profile.officialSignals}. These are not bureaucratic details. Together they reveal whether ${name} communicates clearly, maintains its public surfaces, and respects the player's machine as much as the player's time.`,
      ],
    },
    {
      eyebrow: 'Pace',
      heading: `How ${name}'s progression may feel`,
      body: [
        `${name}'s published gameplay shorthand is ${style}. Rates describe acceleration, not the whole journey. Spawn density, quest gates, skill progression, custom equipment, death penalties, resets, boosts, and the late-game ceiling decide whether quick levels become satisfying momentum or empty speed.`,
        `The useful test is personal: how long should the first meaningful upgrade take, when should another player become a rival, and what remains after the opening rush? ${name} is a stronger fit when its answers align with the player's weekly schedule rather than with an impressive multiplier alone.`,
      ],
    },
    {
      eyebrow: 'Conflict',
      heading: `Risk, PvP, and the social temperature of ${name}`,
      body: [
        `${name} should be judged through ${profile.decisionFrame}. PvP labels are only the headline; frag limits, skull rules, protection levels, blessings, war systems, bot policy, multiclient limits, and staff intervention determine how conflict actually feels.`,
        `The principal danger is ${profile.riskFrame}. A clear rule page turns tension into understood risk. An unclear one turns every death, ban, or disputed fight into a test of trust that ${name} may not easily recover.`,
      ],
    },
    {
      eyebrow: 'Activity',
      heading: `Reading ${name}'s population without fooling yourself`,
      body: [
        `The directory snapshot records ${players}, with ${uptime}. That is a photograph, not a heartbeat. Login characters, trainers, multiclients, proxies, time zones, launch spikes, and quiet hours can all change what the number feels like once a player reaches town.`,
        `For ${name}, compare several moments across the week. Then look for guild movement, market trades, recent deaths, forum replies, Discord conversation, and players who answer a newcomer in game. A living world leaves more than one kind of footprint.`,
      ],
    },
    {
      eyebrow: 'Place and Community',
      heading: `Where ${name}'s community gathers`,
      body: [
        `${name} carries a location signal of ${country}, but hosting geography does not define the whole community. Language, peak hours, support response, guild recruitment, event scheduling, and proxy options determine whether the world feels local, global, or lonely.`,
        `Screenshots show atmosphere; reviews show memory. The most valuable contributions about ${name} describe a particular quest, war, event, support exchange, economy shift, or first-week experience. Detail gives praise warmth and criticism weight.`,
      ],
    },
    {
      eyebrow: 'Evidence',
      heading: `What can be trusted about ${name} today`,
      body: [
        `${name}'s current verification trail includes ${sourcePhrase}. Each source answers a different question: a directory can show a public snapshot, an official site can publish rules, and a community thread can preserve announcements and replies. None should silently stand in for the others.`,
        `The profile still calls for clearer evidence around ${missingPhrase}. Naming a gap is more useful than decorating it with certainty. When an owner or player fills that gap, the addition should carry a URL, date, screenshot provenance, or reproducible in-game observation.`,
      ],
    },
    {
      eyebrow: 'Staying Power',
      heading: `Who is likely to remain on ${name}`,
      body: [
        `${name} is most likely to hold ${profile.bestFor}. Retention rarely comes from rates alone. It grows from a legible next goal, a fair economy, recognizable rivals, dependable events, responsive support, and a reason to care about tomorrow's login.`,
        `Players seeking another rhythm should compare ${name} with ${profile.alternatives}. Choosing an alternative is not a failure of the page. It is evidence that the page respected the player's time enough to make the difference clear.`,
      ],
    },
    {
      eyebrow: 'Shared Memory',
      heading: `How players can deepen the record for ${name}`,
      body: [
        `A durable history of ${name} should remember more than launch copy. Guilds, wars, first kills, economy shocks, map discoveries, staff decisions, event victories, season endings, and screenshots with dates turn a server profile into community memory.`,
        `The strongest contribution is modest and precise: what happened, when it happened, how the player knows, and which source can confirm it. That human scale lets ${name}'s story grow without allowing rumor to harden into fact.`,
      ],
    },
    {
      eyebrow: 'Decision',
      heading: `A clear verdict before joining ${name}`,
      body: [
        `Return to one question: ${profile.decisionFrame}. Confirm the host, use an official download, read the rules, inspect recent activity, compare the pace with available time, and ask one specific question in the community channel.`,
        `${name} is worth trying when those answers form a coherent picture. When they conflict, pause. A crowded list row can create urgency, but a well-chosen world creates anticipation, and that is the better feeling to carry into a new character.`,
      ],
    },
  ];
}

export function buildDeepDiveSections(page) {
  if (page.type !== 'server') return [];
  return buildSections(page, profileFor(page));
}

export function buildCuratedCoda(page) {
  const name = page.primaryKeyword;
  const opening = pickEditorial(page.slug, 'curated-coda', [
    `${name} should leave a reader with more than a tab to close. It should leave a clearer choice, a safer path, or a detail worth carrying back to the community.`,
    `The measure of this ${name} page is not how much it says, but how much uncertainty it turns into a useful next step without pretending every gap has vanished.`,
    `${name} becomes memorable when facts and lived experience meet: one establishes the ground, the other explains why anyone cared enough to return.`,
    `A strong record of ${name} does not rush the reader toward certainty. It gives evidence room to speak and community memory room to breathe.`,
  ]);
  const perspective = page.type === 'server'
    ? `Before joining ${name}, confirm the official path, read the rules, look for recent signs of life, and ask a precise question. A world can be online without feeling alive; the better signal is whether its people, systems, and support give a new player a reason to imagine a second evening there.`
    : page.type === 'official-world'
      ? `${name}'s history belongs to the people who shaped it. Dates and archived records hold the frame, while guild stories, screenshots, rivalries, and remembered turning points supply the color. Both matter, and neither should erase the other.`
      : page.type === 'resource'
        ? `${name} deserves the same care as any old tool or living project: verify the upstream source, respect the era it came from, understand the formats it touches, and never let nostalgia become a reason to trust an unsafe binary.`
        : `${name} is broad enough to invite many paths. Follow the one that answers the player's immediate question, then keep the source trail visible so curiosity can deepen without drifting into unsupported certainty. ${name} deserves that patient care.`;

  return {
    eyebrow: 'A Last Word',
    heading: `What ${name} should leave with you`,
    body: [opening, perspective],
  };
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
    ...(page.facts || []).flatMap((entry) => [entry.label, entry.value]),
    ...(page.infobox || []).flatMap((entry) => [entry.label, entry.value]),
    ...(page.timeline || []).flatMap((entry) => [entry.date, entry.title, entry.text]),
    ...(page.evergreenAngles || []),
    ...(page.glossary || []).flatMap((entry) => [entry.term, entry.definition]),
    ...(page.sections || []).flatMap((section) => [section.eyebrow, section.heading, ...(section.body || [])]),
    ...buildDeepDiveSections(page).flatMap((section) => [section.eyebrow, section.heading, ...(section.body || [])]),
    ...(page.faqs || []).flatMap((faq) => [faq.question, faq.answer]),
  ];

  return pieces.reduce((total, piece) => total + countWords(piece), 0);
}
