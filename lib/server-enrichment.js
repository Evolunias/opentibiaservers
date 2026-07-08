import { buildServerSlug } from '@/lib/server-paths';

const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

function firstMatch(value, pattern) {
  const match = String(value || '').match(pattern);
  return match ? match[1] : null;
}

function stripTags(value = '') {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeSeoDescription(server, summary) {
  const parts = [
    server.name,
    server.version ? `${server.version} Open Tibia server` : 'Open Tibia server',
    server.world_type || null,
    server.location ? `hosted in ${server.location}` : null,
    server.players_online !== undefined ? `${Number(server.players_online || 0).toLocaleString()} players online` : null,
    summary || server.description || null,
  ].filter(Boolean);

  return parts.join('. ').slice(0, 158);
}

export async function fetchOfficialWebsiteResearch(server = {}, options = {}) {
  const sourceUrl = server.website_url || server.external_launch_url;
  if (!sourceUrl) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 20000);

  try {
    const response = await fetch(sourceUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': options.userAgent || DEFAULT_USER_AGENT,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    const html = await response.text();
    if (!response.ok) {
      return {
        source_url: sourceUrl,
        fetched: false,
        status: response.status,
      };
    }

    const title = stripTags(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || '');
    const metaDescription = stripTags(firstMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) || '');
    const ogDescription = stripTags(firstMatch(html, /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i) || '');
    const ogTitle = stripTags(firstMatch(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i) || '');
    const ogImage = firstMatch(html, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    const h1 = stripTags(firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) || '');
    const paragraphMatches = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((match) => stripTags(match[1]))
      .filter((text) => text.length >= 80);

    const summary = metaDescription || ogDescription || paragraphMatches[0] || '';
    const facts = {
      official_title: ogTitle || title || null,
      headline: h1 || null,
      description: summary || null,
      hero_image_url: ogImage || null,
    };

    return {
      source_url: sourceUrl,
      fetched: true,
      status: response.status,
      title: ogTitle || title || null,
      description: summary || null,
      hero_image_url: ogImage || null,
      headline: h1 || null,
      paragraphs: paragraphMatches.slice(0, 4),
      facts,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export function buildEnrichedServerPayload(server = {}, research = null) {
  const slug = buildServerSlug(server);
  const keywordPrimary = server.name || slug;
  const keywordAliases = [
    server.name,
    `${server.name} otserv`,
    `${server.name} open tibia`,
    `${server.name} server`,
    server.host,
    server.ip,
  ].filter(Boolean);
  const officialSummary = research?.description || server.description || null;
  const seoTitle = `${keywordPrimary} | Open Tibia Server Listing | OpenTibiaServers.com`.slice(0, 70);
  const seoDescription = makeSeoDescription(server, officialSummary);

  return {
    slug,
    canonical_path: `/servers/${slug}`,
    keyword_primary: keywordPrimary,
    keyword_aliases: [...new Set(keywordAliases)],
    seo_title: seoTitle,
    seo_description: seoDescription,
    official_summary: officialSummary,
    official_facts: research?.facts || {},
    research_sources: research?.source_url ? [{ type: 'official_website', url: research.source_url }] : [],
    hero_image_url: research?.hero_image_url || null,
    official_last_researched_at: research?.fetched ? new Date().toISOString() : null,
    content_status: research?.fetched ? 'enriched' : 'imported',
  };
}
