const DEFAULT_BASE_URL = 'https://otservlist.org';
const LIST_PATH = '/list-server_players_online-desc';
const SOURCE_NAME = 'otservlist.org';
const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const SCRAPINGBEE_ENDPOINT = 'https://app.scrapingbee.com/api/v1/';

const COUNTRY_BY_CODE = {
  ar: 'Argentina',
  au: 'Australia',
  br: 'Brazil',
  ca: 'Canada',
  cn: 'China',
  de: 'Germany',
  es: 'Spain',
  fr: 'France',
  gb: 'United Kingdom',
  in: 'India',
  it: 'Italy',
  jp: 'Japan',
  kr: 'Korea',
  mx: 'Mexico',
  nl: 'Netherlands',
  nz: 'New Zealand',
  pl: 'Poland',
  pt: 'Portugal',
  ru: 'Russia',
  se: 'Sweden',
  uk: 'United Kingdom',
  us: 'USA',
  za: 'South Africa',
};

export function isCloudflareChallenge(html = '') {
  const value = String(html || '');
  const hasListingTable = /<table\b(?=[^>]*id=["']servlist["'])/i.test(value);
  if (hasListingTable) return false;
  return /cf_chl|challenge-platform|Enable JavaScript and cookies|Just a moment/i.test(value);
}

export function decodeHtml(value = '') {
  return String(value)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

export function htmlToText(html = '') {
  return decodeHtml(
    String(html)
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]*>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function firstMatch(value, pattern) {
  const match = String(value || '').match(pattern);
  return match ? match[1] : null;
}

function toInt(value, fallback = null) {
  if (value === null || value === undefined || value === '') return fallback;
  const parsed = Number.parseInt(String(value).replace(/[^\d-]/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function toFloat(value, fallback = null) {
  if (value === null || value === undefined || value === '') return fallback;
  const parsed = Number.parseFloat(String(value).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function absoluteUrl(baseUrl, href) {
  if (!href) return null;
  try {
    return new URL(decodeHtml(href), baseUrl).toString();
  } catch {
    return null;
  }
}

function getScrapingBeeApiKey(options = {}) {
  return options.scrapingBeeApiKey || process.env.SCRAPINGBEE_API_KEY || '';
}

function shouldUseScrapingBee(options = {}) {
  const mode = String(options.fetchMode || process.env.OTSERVLIST_FETCH_MODE || '').toLowerCase();
  return mode === 'scrapingbee' || Boolean(getScrapingBeeApiKey(options));
}

function buildScrapingBeeUrl(targetUrl, options = {}) {
  const apiKey = getScrapingBeeApiKey(options);
  if (!apiKey) return null;

  const url = new URL(SCRAPINGBEE_ENDPOINT);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('url', targetUrl);
  url.searchParams.set('render_js', String(Boolean(options.renderJs)));
  url.searchParams.set('block_resources', String(options.blockResources !== false));

  if (options.countryCode || process.env.SCRAPINGBEE_COUNTRY_CODE) {
    url.searchParams.set('country_code', options.countryCode || process.env.SCRAPINGBEE_COUNTRY_CODE);
  }

  if (options.premiumProxy || process.env.SCRAPINGBEE_PREMIUM_PROXY === 'true') {
    url.searchParams.set('premium_proxy', 'true');
  }

  return url.toString();
}

async function fetchHtml(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 30000);
  const viaScrapingBee = shouldUseScrapingBee(options);
  const requestUrl = viaScrapingBee ? buildScrapingBeeUrl(url, options) : url;

  if (viaScrapingBee && !requestUrl) {
    throw new Error('SCRAPINGBEE_API_KEY is required when OTSERVLIST_FETCH_MODE=scrapingbee');
  }

  try {
    const response = await fetch(requestUrl, {
      signal: controller.signal,
      headers: viaScrapingBee
        ? { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' }
        : {
            'User-Agent': options.userAgent || DEFAULT_USER_AGENT,
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
          },
    });

    const html = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      html,
      provider: viaScrapingBee ? 'scrapingbee' : 'direct',
    };
  } finally {
    clearTimeout(timeout);
  }
}

function getCells(rowHtml) {
  const cells = [];
  const pattern = /<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi;
  let match;

  while ((match = pattern.exec(rowHtml)) !== null) {
    cells.push(match[1]);
  }

  return cells;
}

function getFlagLocation(cellHtml) {
  const src = firstMatch(cellHtml, /<img\b[^>]*src=["']([^"']+)["']/i);
  const alt = firstMatch(cellHtml, /<img\b[^>]*alt=["']([^"']+)["']/i);
  const title = firstMatch(cellHtml, /<img\b[^>]*title=["']([^"']+)["']/i);
  const readable = htmlToText(alt || title || '');

  if (readable && !/image/i.test(readable)) {
    return titleCase(readable.replace(/\s+Otserv$/i, '').trim());
  }

  const code = firstMatch(src || '', /\/([a-z]{2})\.(?:png|gif|jpg|webp)(?:\?|$)/i);
  return code ? COUNTRY_BY_CODE[code.toLowerCase()] || code.toUpperCase() : null;
}

function titleCase(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function normalizeWorldType(value) {
  const text = htmlToText(value);
  if (/^npvp$/i.test(text) || /non[-\s]?pvp/i.test(text)) return 'Non-PVP';
  if (/pvpe|pvp[-\s]?enforced/i.test(text)) return 'PVP-Enforced';
  if (/fun/i.test(text)) return 'FUN';
  if (/pvp/i.test(text)) return 'PVP';
  return text || 'PVP';
}

function makeTags(server) {
  const tags = [SOURCE_NAME];
  if (server.location) tags.push(server.location);
  if (server.world_type) tags.push(server.world_type);
  if (server.version && server.version !== 'n/a') tags.push(`Client ${server.version}`);
  if (server.exp_rate && server.exp_rate >= 1000) tags.push('High EXP');
  if (server.players_online >= 100) tags.push('Popular');
  return [...new Set(tags)];
}

function parsePlayers(value) {
  const text = htmlToText(value);
  const full = text.match(/(\d+)\s*\((\d+)\)\s*\/\s*(\d+)/);
  if (full) {
    return {
      players_online: toInt(full[1], 0),
      players_peak: toInt(full[2], 0),
      max_players: toInt(full[3], null),
    };
  }

  const simple = text.match(/(\d+)\s*\/\s*(\d+)/);
  return {
    players_online: simple ? toInt(simple[1], 0) : 0,
    players_peak: simple ? toInt(simple[1], 0) : 0,
    max_players: simple ? toInt(simple[2], null) : null,
  };
}

function parseListRow(rowHtml, baseUrl, rank) {
  const cells = getCells(rowHtml);
  if (cells.length < 9 || !/\/ots\/\d+/i.test(rowHtml)) return null;

  const sourceId = firstMatch(rowHtml, /\/ots\/(\d+)/i);
  const addressHref = sourceId ? `/ots/${sourceId}` : null;
  const host = htmlToText(
    firstMatch(rowHtml, new RegExp(`<a\\b[^>]*href=["'][^"']*/ots/${sourceId}[^"']*["'][^>]*>([\\s\\S]*?)<\\/a>`, 'i')) ||
    cells[1]
  );

  if (!host || !sourceId) return null;

  const externalHref =
    firstMatch(cells[2], /<a\b[^>]*href=["']([^"']+)["']/i) ||
    firstMatch(cells[1], /<a\b[^>]*class=["'][^"']*www[^"']*["'][^>]*href=["']([^"']+)["']/i);
  const players = parsePlayers(cells[4]);
  const version = firstMatch(htmlToText(cells[9] || ''), /\[?\s*([0-9.]+|n\/a)\s*\]?/i) || 'n/a';

  const server = {
    name: htmlToText(cells[3]).slice(0, 255) || host,
    ip: host,
    host,
    port: 7171,
    website_url: null,
    owner_email: null,
    version,
    client_type: version === 'n/a' ? null : version,
    world_type: normalizeWorldType(cells[8]),
    pvp_type: normalizeWorldType(cells[8]),
    map_name: null,
    server_type: null,
    location: getFlagLocation(cells[0]),
    exp_rate: toFloat(firstMatch(cells[7], /x\s*([0-9.]+)/i), 1),
    exp_stages: false,
    skill_rate: null,
    magic_rate: null,
    loot_rate: null,
    spawn_rate: null,
    is_online: players.players_online > 0,
    players_online: players.players_online,
    players_peak: players.players_peak,
    max_players: players.max_players,
    uptime_percent: toFloat(firstMatch(cells[5], /([0-9.]+)\s*%/), null),
    points: toInt(htmlToText(cells[6]), null),
    last_check: new Date().toISOString(),
    has_custom_map: null,
    has_custom_sprites: null,
    has_store: null,
    is_premium_required: null,
    has_battleye: null,
    description: null,
    tags: null,
    source: SOURCE_NAME,
    source_id: sourceId,
    source_url: absoluteUrl(baseUrl, addressHref),
    source_rank: rank,
    external_launch_url: absoluteUrl(baseUrl, externalHref),
    last_seen_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    source_payload: {
      list: {
        rank,
        source_id: sourceId,
        host,
        location: getFlagLocation(cells[0]),
        players_text: htmlToText(cells[4]),
        uptime_text: htmlToText(cells[5]),
        points_text: htmlToText(cells[6]),
        exp_text: htmlToText(cells[7]),
        world_type_text: htmlToText(cells[8]),
        version_text: htmlToText(cells[9] || ''),
      },
    },
  };

  server.tags = makeTags(server);
  return server;
}

export function parseOtservlistListing(html, options = {}) {
  if (isCloudflareChallenge(html)) {
    throw new Error('otservlist.org returned a Cloudflare challenge instead of listing HTML');
  }

  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const servers = [];
  const tableHtml = String(html);
  const rowPattern = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let match;

  while ((match = rowPattern.exec(tableHtml)) !== null) {
    const server = parseListRow(match[0], baseUrl, Number(options.rankOffset || 0) + servers.length + 1);
    if (server) servers.push(server);
  }

  const totalsText = htmlToText(html);
  const totalPlayers = toInt(firstMatch(totalsText, /There are\s+(\d+)\s+players online/i), null);
  const onlineServers = toInt(firstMatch(totalsText, /players online on\s+(\d+)\s+servers/i), null);
  const databaseServers = toInt(firstMatch(totalsText, /We have\s+(\d+)\s+servers in our database/i), null);
  const lastUpdateText = firstMatch(totalsText, /Last update:\s*([^W]+?)\s+We have/i);

  return {
    servers,
    meta: {
      source: SOURCE_NAME,
      total_players_online: totalPlayers,
      servers_online: onlineServers,
      servers_in_database: databaseServers,
      last_update_text: lastUpdateText ? lastUpdateText.trim() : null,
    },
  };
}

export function parseOtservlistDetail(html, baseUrl = DEFAULT_BASE_URL) {
  if (!html || isCloudflareChallenge(html)) return {};

  const text = htmlToText(html);
  const name = firstMatch(text, /Online\s+(.+?)\s+[\w.-]+:\d+/i);
  const hostPort = text.match(/([a-z0-9.-]+\.[a-z]{2,}|(?:\d{1,3}\.){3}\d{1,3}):(\d{1,5})/i);
  const descriptionMatch = text.match(/Server description\s+([\s\S]*?)(?:Last 5 Messages Of The Day|Signatures|Last 48 hours|Copyright)/i);
  const websiteHref = firstMatch(html, /<a\b[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>\s*(?:www|http)/i);

  return {
    name: name ? name.trim().slice(0, 255) : null,
    host: hostPort ? hostPort[1] : null,
    port: hostPort ? toInt(hostPort[2], null) : null,
    website_url: websiteHref ? absoluteUrl(baseUrl, websiteHref) : null,
    players_online: toInt(firstMatch(text, /Players:\s*(\d+)\s*\/\s*\d+/i), null),
    max_players: toInt(firstMatch(text, /Players:\s*\d+\s*\/\s*(\d+)/i), null),
    unique_players: toInt(firstMatch(text, /Unique players:\s*(\d+)/i), null),
    multi_client_level: firstMatch(text, /Multi clients:\s*([A-Za-z]+)/i),
    points: toInt(firstMatch(text, /Points:\s*(\d+)/i), null),
    monsters_count: toInt(firstMatch(text, /Monsters:\s*(\d+)/i), null),
    npcs_count: toInt(firstMatch(text, /NPCs:\s*(\d+)/i), null),
    uptime_percent: toFloat(firstMatch(text, /Uptime:\s*([0-9.]+)\s*%/i), null),
    server_engine: firstMatch(text, /Server:\s*(.+?)\s+Owner:/i),
    source_owner_name: firstMatch(text, /Owner:\s*(.+?)\s+Added:/i),
    source_added_text: firstMatch(text, /Added:\s*(.+?)\s+Updated:/i),
    source_updated_text: firstMatch(text, /Updated:\s*(.+?)(?:Server description|Last 5 Messages|Signatures|$)/i),
    description: descriptionMatch ? descriptionMatch[1].trim().slice(0, 4000) : null,
  };
}

export function mergeOtservlistDetail(server, detail) {
  const next = { ...server };
  const payload = {
    ...(server.source_payload || {}),
    detail,
  };

  for (const key of [
    'name',
    'host',
    'port',
    'website_url',
    'players_online',
    'max_players',
    'unique_players',
    'multi_client_level',
    'points',
    'monsters_count',
    'npcs_count',
    'uptime_percent',
    'server_engine',
    'source_owner_name',
    'source_added_text',
    'source_updated_text',
    'description',
  ]) {
    if (detail[key] !== null && detail[key] !== undefined && detail[key] !== '') {
      next[key] = detail[key];
    }
  }

  if (next.host) next.ip = next.host;
  next.is_online = (next.players_online || 0) > 0;
  next.tags = makeTags(next);
  next.source_payload = payload;
  return next;
}

export async function fetchOtservlistPage(page = 1, options = {}) {
  const baseUrl = options.baseUrl || DEFAULT_BASE_URL;
  const path = page <= 1 ? `${LIST_PATH}-1.html` : `${LIST_PATH}-${page}.html`;
  const url = new URL(path, baseUrl).toString();

  const { ok, status, html, provider } = await fetchHtml(url, options);
  if (!ok) {
    throw new Error(`otservlist page ${page} returned HTTP ${status} via ${provider}`);
  }
  if (isCloudflareChallenge(html)) {
    throw new Error(`otservlist page ${page} returned a Cloudflare challenge via ${provider}`);
  }
  return { url, html, provider };
}

export async function fetchOtservlistDetail(sourceUrl, options = {}) {
  const { ok, html } = await fetchHtml(sourceUrl, options);
  if (!ok || isCloudflareChallenge(html)) return {};
  return parseOtservlistDetail(html, options.baseUrl || DEFAULT_BASE_URL);
}

export async function fetchOtservlistServers(options = {}) {
  const pageLimit = Math.max(1, Math.min(Number(options.pageLimit || 3), Number(options.maxPages || 50)));
  const includeDetails = Boolean(options.includeDetails);
  const detailLimit = Math.max(0, Math.min(Number(options.detailLimit || 25), 1000));
  const allServers = [];
  const pages = [];

  for (let page = 1; page <= pageLimit; page += 1) {
    const { url, html, provider } = await fetchOtservlistPage(page, options);
    const parsed = parseOtservlistListing(html, {
      baseUrl: options.baseUrl || DEFAULT_BASE_URL,
      rankOffset: allServers.length,
    });

    pages.push({ page, url, provider, count: parsed.servers.length, meta: parsed.meta });
    allServers.push(...parsed.servers.map((server) => ({
      ...server,
      source_last_update_text: parsed.meta.last_update_text,
      source_payload: {
        ...(server.source_payload || {}),
        page: parsed.meta,
      },
    })));

    if (parsed.servers.length === 0) break;
    if (options.pageDelayMs) {
      await new Promise((resolve) => setTimeout(resolve, options.pageDelayMs));
    }
  }

  if (includeDetails && detailLimit > 0) {
    for (const server of allServers.slice(0, detailLimit)) {
      if (!server.source_url) continue;
      const detail = await fetchOtservlistDetail(server.source_url, options);
      Object.assign(server, mergeOtservlistDetail(server, detail));
      if (options.detailDelayMs) {
        await new Promise((resolve) => setTimeout(resolve, options.detailDelayMs));
      }
    }
  }

  return {
    servers: allServers,
    pages,
    source: SOURCE_NAME,
    fetched_at: new Date().toISOString(),
  };
}
