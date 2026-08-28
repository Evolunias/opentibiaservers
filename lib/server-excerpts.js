const EXCERPT_FIELDS = [
  'research_excerpt',
  'excerpt',
  'official_excerpt',
  'website_meta_description',
  'meta_description',
  'official_summary',
  'source_summary',
  'source_excerpt',
  'owner_excerpt',
  'first_post_excerpt',
  'community_summary',
  'community_excerpt',
  'description',
  'seo_description',
];

const TEMPLATE_COPY_PATTERNS = [
  /no verified server excerpt is available/i,
  /enters the directory through a real community_archive server launch archive thread/i,
  /is preserved through its community_archive server launch archive trail/i,
  /asks for more than a quick connection test/i,
  /meet .+ beyond the list row/i,
  /the linked thread and official website should agree/i,
  /the original launch post remains linked so readers can inspect/i,
  /a public source trail with a few open fields still to verify/i,
  /this profile remains (?:a )?(?:directory snapshot|source-backed profile)/i,
  /official links, owner confirmation, and dated community evidence still need to be gathered/i,
  /the long-term goal is to preserve what makes/i,
  /turn .+ from a row in a list into a record worth revisiting/i,
  /players arriving at .+ usually want a direct path/i,
  /the richer story begins after that first answer/i,
  /the safest next step is to compare the public thread/i,
  /screenshots, launch notes, guild milestones, event recaps/i,
  /each addition should carry a date, a source, or a named in-game observation/i,
  /appears among active directory listings/i,
  /record becomes more trustworthy as it gathers/i,
  /should become a permanent reference record/i,
  /is currently seeded from an community_archive server launch archive thread/i,
  /open fields remain for verified official rules/i,
  /this page verifies that a matching community_archive server launch archive thread exists/i,
  /the best next additions are owner-confirmed/i,
  /should lead players to the real host/i,
  /owner-confirmed links, screenshots, rules, reviews, and uptime history/i,
  /notable guilds, players, wars, events, and screenshots deserve/i,
  /this profile separates those published claims from time-sensitive directory metrics/i,
];

function normalizeText(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function isGenericServerCopy(value) {
  const text = normalizeText(value);
  if (!text) return true;
  return TEMPLATE_COPY_PATTERNS.some((pattern) => pattern.test(text));
}

function limitLength(text, maxLength) {
  if (!Number.isFinite(maxLength) || maxLength < 80 || text.length <= maxLength) return text;
  const window = text.slice(0, maxLength + 1);
  const sentenceEnd = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '));
  const cutoff = sentenceEnd >= maxLength * 0.6 ? sentenceEnd + 1 : window.lastIndexOf(' ');
  return `${window.slice(0, cutoff > 0 ? cutoff : maxLength).trim()}…`;
}

export function getServerExcerpt(server = {}, { maxLength } = {}) {
  for (const field of EXCERPT_FIELDS) {
    const text = normalizeText(server[field]);
    if (text.length >= 40 && !isGenericServerCopy(text)) return limitLength(text, maxLength);
  }
  return null;
}

function normalizeSource(candidate) {
  if (!candidate) return null;
  const url = typeof candidate === 'string' ? candidate : candidate.url || candidate.href;
  if (!url || !/^https?:\/\//i.test(url)) return null;

  let hostname = '';
  try {
    hostname = new URL(url).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return null;
  }

  const type = typeof candidate === 'object' ? String(candidate.type || candidate.kind || '') : '';
  const suppliedLabel = typeof candidate === 'object' ? candidate.label : '';
  const label = suppliedLabel || (
    hostname === 'community_archive.net' || hostname.endsWith('.community_archive.net') || /community|forum/i.test(type)
      ? 'community_archive discussion'
      : /official|website/i.test(type)
        ? 'Official website'
        : hostname
  );

  return { url, label, type };
}

export function getServerExcerptSources(server = {}) {
  const candidates = [
    ...(Array.isArray(server.research_sources) ? server.research_sources : []),
    ...(Array.isArray(server.sourceLinks) ? server.sourceLinks : []),
    server.source_url ? { url: server.source_url, type: 'community_forum' } : null,
    server.website_url ? { url: server.website_url, type: 'official_website' } : null,
    server.external_launch_url ? { url: server.external_launch_url, type: 'official_website' } : null,
  ];
  const seen = new Set();

  return candidates
    .map(normalizeSource)
    .filter((source) => {
      if (!source || seen.has(source.url)) return false;
      seen.add(source.url);
      return true;
    })
    .slice(0, 8);
}
