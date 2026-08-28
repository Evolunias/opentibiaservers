import { applyVerifiedServerResearch } from './verified-server-research.js';
import { getServerSourceResearch } from './server-source-research.js';

const GENERIC_COPY = /(?:needs owner-confirmed|open fields|more than a quick connection test|enters the directory through|source snapshot gives players|richer research record|merely reachable|merely counted)/i;

const FEATURE_SIGNALS = [
  { pattern: /\breal[ -]?map\b/i, label: 'a real-map foundation' },
  { pattern: /\bcustom map\b/i, label: 'a custom map' },
  { pattern: /\bskill wheel\b/i, label: 'the skill wheel' },
  { pattern: /\brotten blood\b/i, label: 'Rotten Blood content' },
  { pattern: /\boskayaat\b/i, label: 'Oskayaat' },
  { pattern: /\bbakragore\b/i, label: 'Bakragore' },
  { pattern: /\bunhallowed crypt\b/i, label: 'the Unhallowed Crypt' },
  { pattern: /\bweapon proficiency\b/i, label: 'weapon proficiency' },
  { pattern: /\bcastle war\b/i, label: 'Castle War' },
  { pattern: /\bwarzone(?:s)?\s*(?:4|5|6)/i, label: 'Warzones 4–6' },
  { pattern: /\bdream labyrinth\b/i, label: 'the Dream Labyrinth' },
  { pattern: /\bsecret library\b/i, label: 'the Secret Library' },
  { pattern: /\bgrimvale\b/i, label: 'the Grimvale quest line' },
  { pattern: /\bdaily reward\b/i, label: 'daily rewards' },
  { pattern: /\bprey wild cards?\b/i, label: 'prey wild cards' },
  { pattern: /\bstamina regen/i, label: 'stamina-regeneration bonuses' },
  { pattern: /\bpvp[- ]?enforced\b/i, label: 'PvP-Enforced rules' },
  { pattern: /\bnon[- ]?pvp\b|\bno[- ]?pvp\b/i, label: 'a non-PvP ruleset' },
  { pattern: /\bopen[- ]?pvp\b/i, label: 'Open PvP' },
  { pattern: /\bcustom client\b/i, label: 'a custom client' },
  { pattern: /\badvanced proxy\b/i, label: 'an advanced proxy system' },
  { pattern: /\b(?:built[- ]in )?cam system\b/i, label: 'a built-in cam system' },
  { pattern: /\bmedium[- ]rate\b/i, label: 'medium-rate progression' },
  { pattern: /\bfrags? to (?:red skull|ban)\b/i, label: 'published frag and ban thresholds' },
  { pattern: /\bgolden account\b/i, label: 'Golden Account benefits' },
  { pattern: /\banti[- ]?bot\b/i, label: 'anti-bot protection' },
  { pattern: /\bshared experience\b|\bshared exp\b/i, label: 'shared-experience bonuses' },
  { pattern: /\bexperience stages?\b|\bstaged experience\b|\bstages exp\b/i, label: 'staged experience' },
  { pattern: /\bdaily tasks?\b/i, label: 'daily tasks' },
  { pattern: /\btask system\b|\btasks?\b/i, label: 'tasks' },
  { pattern: /\bquests?\b/i, label: 'quests' },
  { pattern: /\bdungeons?\b/i, label: 'dungeons' },
  { pattern: /\bboss(?:es)?\b/i, label: 'boss encounters' },
  { pattern: /\braids?\b/i, label: 'raids' },
  { pattern: /\bevents?\b/i, label: 'scheduled events' },
  { pattern: /\btournaments?\b/i, label: 'tournaments' },
  { pattern: /\bgreat wars?\b|\bwar system\b/i, label: 'organized wars' },
  { pattern: /\bguild war\b/i, label: 'guild wars' },
  { pattern: /\bcrafting\b/i, label: 'crafting' },
  { pattern: /\bupgrade system\b|\bitem upgrades?\b/i, label: 'item upgrades' },
  { pattern: /\bpresti(?:ge|ging)\b/i, label: 'prestige progression' },
  { pattern: /\brebirth\b/i, label: 'rebirth progression' },
  { pattern: /\breset system\b|\bresets?\b/i, label: 'a reset system' },
  { pattern: /\bautoloot\b|\bauto loot\b/i, label: 'automatic looting' },
  { pattern: /\boffline training\b/i, label: 'offline training' },
  { pattern: /\bmounts?\b/i, label: 'mounts' },
  { pattern: /\baddons?\b|\boutfits?\b/i, label: 'outfit and addon collection' },
  { pattern: /\bandroid\b/i, label: 'Android support' },
  { pattern: /\bwindows\b/i, label: 'a Windows client' },
  { pattern: /\brookgaard\b/i, label: 'Rookgaard content' },
  { pattern: /\bpok[eé]mon\b/i, label: 'Pokémon-inspired gameplay' },
];

function compact(values = []) {
  return values.filter((value) => value !== null && value !== undefined && value !== '');
}

function unique(values = [], keyFor = (value) => value) {
  const seen = new Set();
  return values.filter((value) => {
    const key = keyFor(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function humanList(values = []) {
  if (values.length <= 1) return values[0] || '';
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(', ')}, and ${values.at(-1)}`;
}

function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function decodeEntities(value = '') {
  return String(value)
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&nbsp;/gi, ' ');
}

export function cleancommunity_archiveExcerpt(value = '') {
  return decodeEntities(value)
    .replace(/^.*?\s#1\s+/i, '')
    .replace(/\bView attachment\s+\d+\b/gi, ' ')
    .replace(/\bClick to expand\.\.\.\b/gi, ' ')
    .replace(/\bSpoiler:\s*/gi, ' ')
    .replace(/\{\s*"lightbox_close"[\s\S]*$/i, '')
    .replace(/\[(?:IMG|URL|B|I|CENTER|QUOTE)[^\]]*\]|\[\/(?:IMG|URL|B|I|CENTER|QUOTE)\]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractSourceFeatures(records = [], extraText = '') {
  const sourceText = [
    ...records.flatMap((record) => [record.title, record.first_post_excerpt]),
    extraText,
  ].filter(Boolean).join(' ');

  return unique(
    FEATURE_SIGNALS.filter((signal) => signal.pattern.test(sourceText)).map((signal) => signal.label),
  ).slice(0, 10);
}

function recordScore(record = {}) {
  return (record.first_post_excerpt?.length || 0)
    + (record.official_website_url ? 600 : 0)
    + (record.host ? 300 : 0)
    + Math.min(Number(record.replies || 0), 500)
    + Math.min(Number(record.views || 0) / 100, 500);
}

function usefulExistingNotes(page = {}) {
  return (page.researchNotes || [])
    .filter((note) => note?.value && !GENERIC_COPY.test(note.value) && !/public list snapshot/i.test(note.label || ''))
    .slice(0, 4);
}

function sourceReference(record, name) {
  const threadDate = formatDate(record.posted_at);
  const engagement = compact([
    Number.isFinite(record.replies) ? `${record.replies.toLocaleString()} replies` : null,
    Number.isFinite(record.views) ? `${record.views.toLocaleString()} views` : null,
  ]);
  const features = extractSourceFeatures([record]);
  const author = record.author ? `published by ${record.author}` : 'published in server launch archive';
  const date = threadDate ? ` on ${threadDate}` : '';
  const activity = engagement.length ? ` The archived discussion records ${humanList(engagement)}.` : '';
  const featureSentence = features.length
    ? ` Its launch material mentions ${humanList(features.slice(0, 7))}.`
    : '';

  return {
    label: `${name} community_archive source${threadDate ? ` — ${threadDate}` : ''}`,
    value: `The community_archive thread ${author}${date} is titled “${record.title}”.${featureSentence}${activity}`,
  };
}

function buildSummary({ name, host, version, location, author, features, sourceCount, officialWebsite, engagement }) {
  const identity = compact([
    version ? `client/version ${version}` : null,
    location ? `a ${location} region signal` : null,
    host ? `the connection host ${host}` : null,
  ]);
  const opening = sourceCount > 1
    ? `${name} is documented through ${sourceCount} community_archive server launch archive records${author ? `, including posts by ${author}` : ''}.`
    : `${name} is documented by an community_archive server launch archive post${author ? ` from ${author}` : ''}.`;
  const identitySentence = identity.length ? ` The source record identifies ${humanList(identity)}.` : '';
  const featureSentence = features.length
    ? ` Published launch material specifically describes ${humanList(features.slice(0, 8))}.`
    : '';
  const websiteSentence = officialWebsite
    ? ` Its recorded official website is ${officialWebsite}.`
    : '';
  const engagementSentence = engagement.length
    ? ` The linked forum trail contains ${humanList(engagement)}, giving readers dated announcements and community replies to inspect directly.`
    : '';

  return `${opening}${identitySentence}${featureSentence}${websiteSentence}${engagementSentence}`;
}

function buildVerifiedOnlySummary(page, verified) {
  if (!verified.official_summary) return null;
  const features = extractSourceFeatures([], verified.official_summary);
  return {
    ...page,
    source_url: verified.source_url || page.source_url,
    website_url: verified.website_url || page.website_url,
    external_launch_url: verified.website_url || page.external_launch_url,
    official_summary: verified.official_summary,
    description: verified.official_summary,
    overview: verified.official_summary,
    dek: `${verified.official_summary} Use the official site and owner thread below for current account, client, rules, and launch information.`,
    metaDescription: verified.official_summary,
    content_status: 'source_backed',
    pageLabel: 'Source-backed profile',
    feature_bullets: features,
    sourceLinks: unique([
      verified.website_url ? { label: `${page.name} official website`, href: verified.website_url } : null,
      verified.source_url ? { label: `${page.name} owner thread on community_archive`, href: verified.source_url } : null,
      ...(page.sourceLinks || []),
    ].filter(Boolean), (link) => link.href),
    researchNotes: [
      { label: 'Owner-published overview', value: verified.official_summary },
      ...usefulExistingNotes(page),
    ],
    sections: [
      {
        eyebrow: 'Published Description',
        heading: `What the available sources say about ${page.name}`,
        body: [verified.official_summary],
      },
      features.length
        ? {
            eyebrow: 'Gameplay Details',
            heading: `Systems explicitly associated with ${page.name}`,
            body: [`The attached owner source describes ${humanList(features)}.`],
          }
        : null,
      {
        eyebrow: 'Official Access',
        heading: `Where to verify ${page.name}`,
        body: [
          `Use ${verified.website_url || page.website_url} for current account, client, rules, and news information. The linked community_archive thread preserves the owner-published launch context and update trail.`,
        ],
      },
    ].filter(Boolean),
  };
}

function buildOfficialMetadataProfile(page, sourceResearch) {
  const official = sourceResearch?.official_pages?.find((entry) => entry.description && entry.url);
  if (!official) return null;
  const features = extractSourceFeatures([], `${official.title || ''} ${official.description}`);
  const sourceLinks = unique([
    { label: `${page.name} official website`, href: official.url },
    ...(page.sourceLinks || []),
  ], (link) => link.href || link.url);

  return {
    ...page,
    website_url: official.url,
    external_launch_url: official.url,
    source_url: official.url,
    official_excerpt: official.description,
    website_meta_description: official.description,
    official_summary: official.description,
    description: official.description,
    overview: official.description,
    dek: `${official.description} This wording comes from the recorded official website metadata.`,
    metaDescription: official.description,
    content_status: 'source_backed',
    pageLabel: 'Official-site profile',
    feature_bullets: features,
    sourceLinks,
    research_sources: unique([
      { type: 'official_website', url: official.url, label: `${page.name} official website` },
      ...(page.research_sources || []),
    ], (source) => source.url || source.href),
    researchNotes: [
      { label: 'Official website description', value: official.description },
      ...usefulExistingNotes(page),
    ],
    sections: [
      {
        eyebrow: 'Official Description',
        heading: `How ${page.name} describes itself`,
        body: [official.description],
      },
      {
        eyebrow: 'Official Access',
        heading: `Where to verify ${page.name}`,
        body: [`Use ${official.url} for the current account, client, rules, news, and support paths.`],
      },
    ],
  };
}

/**
 * Replaces directory-template prose with facts that are already attached to the
 * server's community_archive and official-site records. It deliberately leaves a page
 * unchanged when there is no substantive source instead of inventing detail.
 */
export function buildSourceBackedServerProfile(page = {}, sourceRecords = []) {
  const sourceResearch = getServerSourceResearch(page.slug);
  const records = unique(
    [
      ...sourceRecords,
      ...(sourceResearch?.community_archive_threads || []),
    ].filter((record) => record?.source_url),
    (record) => record.source_url,
  ).sort((left, right) => recordScore(right) - recordScore(left));
  const verified = applyVerifiedServerResearch({ slug: page.slug });

  if (!records.length) {
    return buildOfficialMetadataProfile(page, sourceResearch)
      || buildVerifiedOnlySummary(page, verified)
      || page;
  }

  const primary = records[0];
  const name = page.name || page.primaryKeyword || primary.server_name || primary.title;
  const officialWebsite = primary.official_website_url
    || verified.website_url
    || page.website_url
    || null;
  const host = page.host || primary.host || null;
  const version = primary.version_hint || primary.client_protocol || page.version || null;
  const location = primary.country_hint || page.location || null;
  const authors = unique(records.map((record) => record.author).filter(Boolean));
  const features = extractSourceFeatures(
    records,
    [
      verified.official_summary || '',
      ...(sourceResearch?.source_signals || []),
      ...usefulExistingNotes(page).map((note) => note.value),
    ].join(' '),
  );
  const engagement = compact([
    records.some((record) => Number.isFinite(record.replies))
      ? `${records.reduce((total, record) => total + Number(record.replies || 0), 0).toLocaleString()} archived replies`
      : null,
    records.some((record) => Number.isFinite(record.views))
      ? `${records.reduce((total, record) => total + Number(record.views || 0), 0).toLocaleString()} recorded views`
      : null,
  ]);
  const summary = buildSummary({
    name,
    host,
    version,
    location,
    author: humanList(authors.slice(0, 3)),
    features,
    sourceCount: records.length,
    officialWebsite,
    engagement,
  });
  const sourceNotes = records.slice(0, 5).map((record) => sourceReference(record, name));
  const officialMetadata = sourceResearch?.official_pages?.find((entry) => entry.description) || null;
  const ownerPost = sourceResearch?.owner_excerpt?.excerpt && sourceResearch?.owner_excerpt?.author
    ? sourceResearch.owner_excerpt
    : null;
  const ownerSourceExcerpt = ownerPost?.excerpt || cleancommunity_archiveExcerpt(primary.first_post_excerpt);
  const sourceOverview = officialMetadata?.description || verified.official_summary || ownerSourceExcerpt || null;
  const communityPosts = (sourceResearch?.community_excerpts || [])
    .filter((entry) => entry.excerpt && entry.author)
    .slice(0, 3);
  const communityPost = communityPosts[0] || null;
  const communityExcerpt = communityPost
    ? `${communityPost.author}${communityPost.posted_at_label ? ` (${communityPost.posted_at_label})` : ''} wrote in the linked community_archive discussion: “${communityPost.excerpt}”`
    : null;
  const threadLinks = records.map((record, index) => ({
    label: records.length > 1 ? `${name} community_archive thread ${index + 1}` : `${name} owner thread on community_archive`,
    href: record.source_url,
  }));
  const officialLinks = unique(records
    .map((record) => record.official_website_url)
    .filter(Boolean))
    .map((href) => ({ label: `${name} official website`, href }));
  const sourceLinks = unique([
    ...officialLinks,
    ...threadLinks,
    ...communityPosts.map((post) => post.source_url
      ? { label: `community_archive reply by ${post.author}`, href: post.source_url }
      : null),
    ...(sourceResearch?.official_pages || [])
      .filter((entry) => entry.url)
      .map((entry) => ({ label: `${name} official page`, href: entry.url })),
    ...(page.sourceLinks || []),
  ].filter(Boolean), (link) => link.href || link.url);
  const chronology = records
    .filter((record) => record.posted_at)
    .sort((left, right) => new Date(left.posted_at) - new Date(right.posted_at))
    .slice(-8)
    .map((record) => ({
      date: formatDate(record.posted_at) || 'community_archive source',
      title: record.title,
      text: `${record.author ? `${record.author} published` : 'Published'} this server launch archive record${record.host ? ` for ${record.host}` : ''}.${Number.isFinite(record.replies) ? ` It has ${record.replies.toLocaleString()} archived replies.` : ''}`,
    }));

  return {
    ...page,
    name,
    host,
    website_url: officialWebsite || page.website_url,
    external_launch_url: officialWebsite || page.external_launch_url,
    source_url: primary.source_url,
    source_author: primary.author || null,
    source_posted_at: primary.posted_at || null,
    source_thread_title: primary.title,
    source_excerpt: cleancommunity_archiveExcerpt(primary.first_post_excerpt),
    official_excerpt: officialMetadata?.description || null,
    website_meta_description: officialMetadata?.description || null,
    owner_excerpt: ownerPost
      ? `${ownerPost.author}${ownerPost.posted_at_label ? ` (${ownerPost.posted_at_label})` : ''}: “${ownerPost.excerpt}”`
      : null,
    community_excerpt: communityExcerpt,
    community_excerpts: communityPosts.map((post) => ({
      author: post.author,
      posted_at_label: post.posted_at_label || null,
      excerpt: post.excerpt,
      source_url: post.source_url || null,
    })),
    source_features: sourceResearch?.source_signals || features,
    official_summary: officialMetadata?.description || verified.official_summary || null,
    source_summary: sourceOverview,
    description: sourceOverview || null,
    overview: sourceOverview || null,
    dek: sourceOverview || null,
    metaDescription: sourceOverview || summary,
    content_status: 'source_backed',
    pageLabel: 'Source-backed profile',
    feature_bullets: features,
    sourceLinks,
    research_sources: unique([
      ...officialLinks.map((link) => ({ type: 'official_website', url: link.href, label: link.label })),
      ...threadLinks.map((link) => ({ type: 'community_forum', url: link.href, label: link.label })),
      ...communityPosts.map((post) => post.source_url
        ? { type: 'community_post', url: post.source_url, label: `community_archive reply by ${post.author}` }
        : null),
      ...(page.research_sources || []),
    ].filter(Boolean), (source) => source.url || source.href),
    researchNotes: [
      ...sourceNotes,
      ...usefulExistingNotes(page),
    ].filter(Boolean),
    custom_sections: [],
    sections: [],
    timeline: chronology.length ? chronology : page.timeline,
    faqs: [],
  };
}
