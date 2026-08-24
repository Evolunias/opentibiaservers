import fs from 'node:fs';
import path from 'node:path';
import { polishPlayerFacingCopy } from './editorial-copy.js';
import { buildServerWikiDepth } from './server-wiki-depth.js';

const dataPath = path.join(process.cwd(), 'data', 'otland-server-gala-servers.json');
const sourceUrl = 'https://otland.net/forums/server-gala.43/';

let cache = null;

function readDataset() {
  if (cache) return cache;
  if (!fs.existsSync(dataPath)) {
    cache = { records: [] };
    return cache;
  }

  try {
    cache = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch {
    cache = { records: [] };
  }
  return cache;
}

export function getOtlandServerGalaRecords() {
  return readDataset().records || [];
}

function compact(values = []) {
  return values.filter((value) => value !== null && value !== undefined && value !== '');
}

function normalizeLink(link) {
  if (!link) return null;
  const href = link.href || link.url || null;
  const label = link.label || href || null;
  if (!href || !label) return null;
  return {
    href,
    label,
    note: link.note || link.use || null,
    type: link.type || 'reference',
  };
}

function toPageDate(value, fallback = null) {
  if (!value) return fallback;
  try {
    return new Date(value).toLocaleDateString('en-US');
  } catch {
    return fallback;
  }
}

function buildOtlandArticlePage(record, index) {
  const officialWebsite = record.official_website_url || null;
  const forumThread = record.source_url;
  const name = record.server_name || record.title;
  const sourceLinks = [
    officialWebsite ? { type: 'official_website', url: officialWebsite, label: `${name} official website` } : null,
    { type: 'community_forum', url: forumThread, label: 'OtLand Server Gala thread' },
    { type: 'forum_index', url: sourceUrl, label: 'OtLand Server Gala forum' },
    ...(record.external_links || []).slice(0, 6).map((link) => normalizeLink(link)),
  ].filter(Boolean);

  const sourceCandidates = sourceLinks.map((link) => ({
    type: link.type || 'reference',
    href: link.href,
    label: link.label,
    use: link.note || 'Existing source already attached to this server record.',
  }));
  const wikiDepth = buildServerWikiDepth(
    {
      ...record,
      name,
      website_url: officialWebsite,
      external_launch_url: officialWebsite || forumThread,
      research_sources: sourceCandidates.map((link) => ({ type: link.type, url: link.href, label: link.label })),
    },
    { sourceLinks }
  );

  const playerSnapshot = [
    Number.isFinite(record.replies) ? `${record.replies.toLocaleString()} replies` : null,
    Number.isFinite(record.views) ? `${record.views.toLocaleString()} views` : null,
    record.country_hint ? `region hint: ${record.country_hint}` : null,
    record.version_hint ? `version hint: ${record.version_hint}` : null,
    record.host ? `server address: ${record.host}` : null,
    record.port ? `port ${record.port}` : null,
    record.official_website_check?.ok ? 'official website reachable during import' : null,
  ].filter(Boolean).join(', ');

  const primaryKeyword = name;
  const path = `/${record.slug}`;
  const title = `${name} Open Tibia Server: Status, Launch Context, and Player Guide`;
  const description = `${name} is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.`;
  const publicThreadNote = record.first_post_excerpt
    ? 'The original launch post remains linked so readers can inspect the author\'s own wording and dated context.'
    : '';

  return {
    id: `otland-gala-${record.slug}`,
    slug: record.slug,
    name,
    host: record.host || null,
    ip: record.host || null,
    port: record.port || null,
    location: record.country_hint || null,
    version: record.client_protocol || record.version_hint || null,
    players_online: 0,
    max_players: null,
    players_peak: null,
    uptime_percent: null,
    source_rank: index + 1,
    source: 'otland_server_gala',
    source_id: forumThread,
    source_url: forumThread,
    source_author: record.author || null,
    source_posted_at: record.posted_at || null,
    source_thread_title: record.title,
    source_excerpt: record.first_post_excerpt || null,
    website_url: officialWebsite || forumThread,
    external_launch_url: officialWebsite || forumThread,
    contact_discord: record.contact_discord || null,
    claim_status: 'unclaimed',
    content_status: 'source_thread',
    keyword_primary: name,
    template_name: 'otland_source_reference',
    updated_at: record.imported_at,
    last_seen_at: record.posted_at || record.imported_at,
    last_check: record.imported_at,
    official_summary:
      `${name} enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides ${playerSnapshot || 'a public source trail with a few open fields still to verify'}. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.${publicThreadNote ? ` ${publicThreadNote}` : ''}`,
    description,
    feature_bullets: compact([
      'Source: OtLand Server Gala thread',
      officialWebsite ? `Official website/AAC: ${officialWebsite}` : null,
      record.official_website_check?.ok ? `Official website responded with HTTP ${record.official_website_check.status}` : null,
      record.host ? `Server address: ${record.host}` : null,
      record.port ? `Server port: ${record.port}` : null,
      record.author ? `Thread author: ${record.author}` : null,
      record.posted_at ? `Original post date: ${toPageDate(record.posted_at)}` : null,
      Number.isFinite(record.replies) ? `Forum discussion: ${record.replies.toLocaleString()} replies` : null,
      Number.isFinite(record.views) ? `Thread visibility: ${record.views.toLocaleString()} views` : null,
      record.version_hint ? `Parsed version/client hint: ${record.version_hint}` : null,
      record.country_hint ? `Parsed region hint: ${record.country_hint}` : null,
    ]),
    tags: compact([
      'otland server gala',
      'community thread',
      record.country_hint,
      record.version_hint,
      ...(record.title_hints || []),
    ]),
    research_sources: sourceCandidates.map((link) => ({
      type: link.type,
      url: link.href,
      label: link.label,
      use: link.use,
    })),
    faq_items: [
      {
        question: `Is ${record.server_name || record.title} verified?`,
        answer:
          officialWebsite
            ? `This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes ${officialWebsite} as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation.`
            : `This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details.`,
      },
      {
        question: `Where should players confirm ${record.server_name || record.title}?`,
        answer:
          officialWebsite
            ? `Start with ${officialWebsite} and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything.`
            : 'Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything.',
      },
    ],
    custom_sections: [
      officialWebsite
        ? {
            title: 'Official website signal',
            body:
              `${name} exposes ${officialWebsite} from its OtLand Server Gala source context. The import checked that site during the crawl and recorded ${record.official_website_check?.ok ? `a reachable HTTP ${record.official_website_check.status} response` : 'the website candidate for manual verification'}. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context.`,
          }
        : null,
      record.media_links?.length
        ? {
            title: 'Public media and screenshot leads',
            body:
              `The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: ${record.media_links
                .slice(0, 6)
                .map((link) => link?.href)
                .filter(Boolean)
                .join(', ')}. These should be linked for attribution unless the owner grants permission to mirror assets locally.`,
          }
        : null,
      {
        title: 'Why this OtLand source matters',
        body:
          'OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show.',
      },
      {
        title: 'Open fields to document',
        body:
          'This record should be expanded with verified homepage links, screenshots, client or download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from open fields.',
      },
    ].filter(Boolean),
    type: 'server',
    path,
    title,
    h1: `${name}: server status, launch context, and community`,
    dek: `Meet ${name} beyond the list row: verify ${record.host || 'its host'}, understand the published profile, and inspect the source thread, owner links, and community context before creating a character.`,
    primaryKeyword,
    keywords: compact([
      name,
      `${name} server`,
      `${name} OT`,
      `${name} Open Tibia`,
      record.version_hint ? `${name} ${record.version_hint}` : null,
      record.country_hint ? `${name} ${record.country_hint}` : null,
      'open tibia servers',
      'otland server gala',
      'open tibia directory',
    ]),
    metaDescription: description,
    updatedAt: record.imported_at,
    pageLabel: wikiDepth.statusLabel,
    wikiDepth,
    overview: description,
    cta: { label: `Compare ${name} Alternatives`, href: `/?search=${encodeURIComponent(name)}` },
    facts: compact([
      { label: 'Source', value: 'OtLand Server Gala thread' },
      { label: 'Listed host', value: record.host || 'Pending' },
      { label: 'Listing title', value: record.title || name },
      { label: 'Players snapshot', value: playerSnapshot || 'Pending' },
      { label: 'Uptime snapshot', value: record.uptime_percent ? `${record.uptime_percent}%` : 'Pending' },
      { label: 'EXP / PvP / version', value: `${record.exp_rate ? `x${record.exp_rate}` : 'n/a'} / ${record.world_type || 'n/a'} / ${record.version_hint || record.client_protocol || 'n/a'}` },
      { label: 'Country signal', value: record.country_hint || 'Unknown' },
    ]),
    infobox: compact([
      { label: 'Primary topic', value: `${name} Open Tibia server` },
      { label: 'Canonical page', value: `opentibiaservers.com/${record.slug}` },
      { label: 'Directory position at capture', value: `#${index + 1}` },
      { label: 'Evidence trail', value: 'Public forum snapshot plus official and community sources where available' },
      { label: 'Claim status', value: 'Unclaimed until verified by a server owner or manager' },
      { label: 'Profile depth', value: wikiDepth.statusLabel },
      { label: 'Open fields', value: wikiDepth.missingFields.length ? wikiDepth.missingFields.join(', ') : 'None' },
    ]),
    timeline: compact([
      {
        date: 'Public snapshot',
        title: `${name} appears among active directory listings`,
        text: `${name} is represented by ${record.host || 'an unlisted host'} with ${playerSnapshot || 'no current activity snapshot'}, ${record.uptime_percent || 'unknown'}% uptime, ${record.exp_rate ? `x${record.exp_rate}` : 'unknown'} EXP, ${record.world_type || 'unknown'} PvP type, and ${record.version_hint || record.client_protocol || 'unknown'} client context at the time of capture.`,
      },
      {
        date: 'Source trail',
        title: 'Official links and community evidence deepen the picture',
        text: `${name}'s record becomes more trustworthy as it gathers the official website, account and client paths, rules, Discord or forum, screenshots, changelogs, player milestones, guilds, conflicts, events, quests, bosses, and owner-confirmed systems.`,
      },
      {
        date: 'Community archive',
        title: `${name} should become a permanent reference record`,
        text: `The long-term goal is to preserve what makes ${name} distinct: launch history, player stories, screenshots, reviews, systems, bosses, events, PvP conflicts, market behavior, and comparable servers.`,
      },
    ]),
    evergreenAngles: [
      `${name} should lead players to the real host, current activity, official site, and owner-controlled account or client path.`,
      `${record.version_hint || record.client_protocol || 'The listed client'} labels need plain-language context before a player commits an evening or a season.`,
      `Owner-confirmed links, screenshots, rules, reviews, and uptime history remain distinct from public list snapshots.`,
      `Notable guilds, players, wars, events, and screenshots deserve dates and source attribution.`,
      `This profile remains ${wikiDepth.statusLabel} until the important gameplay fields carry dependable evidence.`,
    ],
    glossary: [
      {
        term: 'Source snapshot',
        definition:
          'A time-sensitive capture from a public server list or forum thread. It is useful for discovery, but it should be refreshed and verified against official sources.',
      },
      {
        term: 'Claimed listing',
        definition:
          'A profile verified by a server owner or manager so official links, screenshots, descriptions, rules, and support channels can be corrected and expanded.',
      },
      {
        term: 'Public thread',
        definition:
          'An OtLand post or community launch record that preserves a server’s public launch context, discussion, and update trail.',
      },
    ],
    researchNotes: compact([
      {
        label: 'Public forum snapshot',
        value: `${name} is currently seeded from an OtLand Server Gala thread with ${record.host || 'no host recorded'}, ${playerSnapshot || 'no current player snapshot'}, and thread author ${record.author || 'unknown'}.`,
      },
      {
        label: 'Open fields to document',
        value: `Open fields remain for verified official rules, launch history, changelogs, screenshots, community links, owner contact, player milestones, guild and event history, item and vocation notes, quests, bosses, and reviews with context. Until those details are verified, public snapshots and community accounts remain clearly separated.`,
      },
    ]),
    mediaLeads: compact([
      ...(record.media_links || [])
        .map((link) => normalizeLink(link))
        .filter((link) => link && /imgur|gyazo|postimg|ibb\.co|prnt\.sc|youtube|youtu\.be/i.test(link.href))
        .map((link) => ({
          label: link.label,
          href: link.href,
          note: 'Public media source lead that should be attributed rather than mirrored without permission.',
        })),
      officialWebsite
        ? {
            label: `${name} candidate official website`,
            href: officialWebsite,
            note:
              'Candidate source for official screenshots, branding, account creation, downloads, rules, and owner-approved media.',
          }
        : null,
      {
        label: 'Public server-list source',
        href: sourceUrl,
        note:
          'Source lead for players-online, uptime, version, EXP, PvP type, and host discovery. It should be refreshed periodically.',
      },
    ]),
    sections: [
      {
        eyebrow: 'First Question',
        heading: `What players hope to find in ${name}`,
        body: [
          `Players arriving at ${name} usually want a direct path: where to play, whether ${record.host || 'the listed host'} is current, which client belongs to the operator, how active the world feels, and whether its pace deserves their time.`,
          `The richer story begins after that first answer. Rules, screenshots, guilds, community channels, events, systems, reviews, and remembered moments reveal whether ${name} is merely reachable or genuinely inviting.`,
        ],
      },
      {
        eyebrow: 'Verification',
        heading: `What needs verification on ${name}`,
        body: [
          wikiDepth.sourcePolicy,
          `The safest next step is to compare the public thread, the candidate official website if one exists, and the live client or launcher before installing anything. When the evidence disagrees, the page should preserve that disagreement rather than hide it.`,
        ],
      },
      {
        eyebrow: 'Community Memory',
        heading: `How players can help document ${name}`,
        body: [
          `Screenshots, launch notes, guild milestones, event recaps, balance updates, and player reviews turn ${name} from a row in a list into a record worth revisiting.`,
          `Each addition should carry a date, a source, or a named in-game observation so the page can stay useful without turning rumor into fact.`,
        ],
      },
    ],
    faqs: [
      {
        question: `Is ${name} verified?`,
        answer:
          officialWebsite
            ? `This page verifies that a matching OtLand Server Gala thread exists and that it exposes ${officialWebsite} as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation.`
            : `This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details.`,
      },
      {
        question: `Where should players confirm ${name}?`,
        answer:
          officialWebsite
            ? `Start with ${officialWebsite} and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything.`
            : 'Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything.',
      },
      {
        question: `What remains to be added?`,
        answer:
          'The best next additions are owner-confirmed home page links, screenshots, rule summaries, launch notes, update history, community contact paths, and dated player observations.',
      },
    ],
    relatedServerQueries: compact([
      name,
      record.host,
      record.country_hint,
      record.version_hint,
      record.world_type,
      `${name} review`,
      `${name} guide`,
    ]),
    sourceLinks,
    officialAccess: compact([
      officialWebsite
        ? { href: officialWebsite, label: `${name} official website`, note: 'Candidate official website or AAC surface.', kind: 'reference' }
        : null,
      { href: forumThread, label: 'OtLand launch thread', note: 'Primary public launch source.', kind: 'reference' },
    ]),
  };
}

function statusSummary(record) {
  const details = compact([
    record.country_hint ? `region hint: ${record.country_hint}` : null,
    record.version_hint ? `version hint: ${record.version_hint}` : null,
    record.host ? `server address: ${record.host}` : null,
    record.port ? `port ${record.port}` : null,
    record.official_website_check?.ok ? 'official website reachable during import' : null,
    Number.isFinite(record.replies) ? `${record.replies.toLocaleString()} replies` : null,
    Number.isFinite(record.views) ? `${record.views.toLocaleString()} views` : null,
  ]);

  return details.length ? details.join(', ') : 'source thread imported from OtLand Server Gala';
}

export function getOtlandServerGalaPages() {
  return getOtlandServerGalaRecords().map((record, index) => {
    return polishPlayerFacingCopy(buildOtlandArticlePage(record, index));
  });
}

export function getOtlandServerGalaPage(slug) {
  return getOtlandServerGalaPages().find((page) => page.slug === slug) || null;
}
