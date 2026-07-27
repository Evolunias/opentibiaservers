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
    Number.isFinite(record.replies) ? `${record.replies.toLocaleString()} replies` : null,
    Number.isFinite(record.views) ? `${record.views.toLocaleString()} views` : null,
  ]);

  return details.length ? details.join(', ') : 'source thread imported from OtLand Server Gala';
}

export function getOtlandServerGalaPages() {
  return (readDataset().records || []).map((record, index) => ({
    id: `otland-gala-${record.slug}`,
    slug: record.slug,
    name: record.server_name || record.title,
    host: null,
    ip: null,
    port: null,
    location: record.country_hint || null,
    version: record.version_hint || null,
    players_online: 0,
    max_players: null,
    players_peak: null,
    uptime_percent: null,
    source_rank: index + 1,
    source: 'otland_server_gala',
    source_id: record.source_url,
    source_url: record.source_url,
    website_url: record.source_url,
    external_launch_url: record.source_url,
    claim_status: 'unclaimed',
    content_status: 'source_thread',
    keyword_primary: record.server_name || record.title,
    template_name: 'otland_source_reference',
    updated_at: record.imported_at,
    last_seen_at: record.posted_at || record.imported_at,
    last_check: record.imported_at,
    official_summary:
      `${record.server_name || record.title} is documented from a real OtLand Server Gala thread, not a placeholder listing. The thread title is "${record.title}". ${statusSummary(record)}. Players should use the linked OtLand thread to verify the current official website, launch date, client, rules, Discord, screenshots, and account/download path before joining.`,
    description:
      `${record.server_name || record.title} Open Tibia server reference page sourced from OtLand Server Gala. This record preserves the source thread, author, post timing, reply/view activity, and parsed title hints so players can verify the listing through the original community context.`,
    feature_bullets: compact([
      `Source: OtLand Server Gala thread`,
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
      { type: 'community_forum', url: record.source_url, label: 'OtLand Server Gala thread' },
      { type: 'forum_index', url: sourceUrl, label: 'OtLand Server Gala forum' },
    ],
    faq_items: [
      {
        question: `Is ${record.server_name || record.title} verified?`,
        answer:
          `This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details.`,
      },
      {
        question: `Where should players confirm ${record.server_name || record.title}?`,
        answer:
          'Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything.',
      },
    ],
    custom_sections: [
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
    ],
  }));
}

export function getOtlandServerGalaPage(slug) {
  return getOtlandServerGalaPages().find((page) => page.slug === slug) || null;
}
