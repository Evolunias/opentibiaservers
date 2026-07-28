import fs from 'node:fs';
import path from 'node:path';

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

function compact(values = []) {
  return values.filter((value) => value !== null && value !== undefined && value !== '');
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
  return (readDataset().records || []).map((record, index) => {
    const officialWebsite = record.official_website_url || null;
    const forumThread = record.source_url;
    const name = record.server_name || record.title;
    const firstPostContext = record.first_post_excerpt
      ? ` The first OtLand post says: ${record.first_post_excerpt}`
      : '';

    return ({
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
      `${name} is documented from a real OtLand Server Gala thread, not a placeholder listing. The thread title is "${record.title}". ${statusSummary(record)}. Players should use the linked OtLand thread and official website to verify launch date, client, rules, Discord, screenshots, and account/download path before joining.${firstPostContext}`,
    description:
      `${name} Open Tibia server reference page sourced from OtLand Server Gala. This record preserves the source thread, official website signals, post timing, reply/view activity, server address, client protocol, and parsed title hints so players can verify the listing through original community context.`,
    feature_bullets: compact([
      `Source: OtLand Server Gala thread`,
      officialWebsite ? `Official website/AAC: ${officialWebsite}` : null,
      record.official_website_check?.ok ? `Official website responded with HTTP ${record.official_website_check.status}` : null,
      record.host ? `Server address: ${record.host}` : null,
      record.port ? `Server port: ${record.port}` : null,
      record.author ? `Thread author: ${record.author}` : null,
      record.posted_at ? `Original post date: ${new Date(record.posted_at).toLocaleDateString('en-US')}` : null,
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
    research_sources: [
      officialWebsite ? { type: 'official_website', url: officialWebsite, label: `${name} official website` } : null,
      { type: 'community_forum', url: forumThread, label: 'OtLand Server Gala thread' },
      { type: 'forum_index', url: sourceUrl, label: 'OtLand Server Gala forum' },
      ...(record.external_links || []).slice(0, 6).map((link) => ({ type: 'source_link', url: link.href, label: link.label || link.href })),
    ].filter(Boolean),
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
      officialWebsite ? {
        title: 'Official website signal',
        body:
          `${name} exposes ${officialWebsite} from its OtLand Server Gala source context. The import checked that site during the crawl and recorded ${record.official_website_check?.ok ? `a reachable HTTP ${record.official_website_check.status} response` : 'the website candidate for manual verification'}. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context.`,
      } : null,
      record.media_links?.length ? {
        title: 'Public media and screenshot leads',
        body:
          `The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: ${record.media_links.slice(0, 6).map((link) => link.href).join(', ')}. These should be linked for attribution unless the owner grants permission to mirror assets locally.`,
      } : null,
      {
        title: 'Why this OtLand source matters',
        body:
          'OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show.',
      },
      {
        title: 'What this page still needs from the community',
        body:
          'This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details.',
      },
    ].filter(Boolean),
  });
  });
}

export function getOtlandServerGalaPage(slug) {
  return getOtlandServerGalaPages().find((page) => page.slug === slug) || null;
}
