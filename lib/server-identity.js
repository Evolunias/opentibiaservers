const MULTI_PART_SUFFIXES = new Set([
  'com.br', 'net.br', 'org.br', 'com.mx', 'com.pl', 'net.pl', 'org.pl', 'co.uk', 'org.uk', 'me.uk',
  'com.au', 'net.au', 'org.au', 'com.tr', 'com.ar', 'com.co', 'com.pe', 'com.ve', 'com.ec', 'com.uy',
  'co.nz', 'co.za', 'co.kr', 'co.jp', 'com.cn', 'com.tw', 'com.sg', 'com.my', 'com.ph', 'co.id', 'co.in',
]);

const HOSTING_DOMAINS = new Set([
  'ddns.net', 'hopto.org', 'myddns.me', 'no-ip.org', 'servegame.com', 'sytes.net', 'wotserver.com',
  'servegame.org', 'zapto.org', 'duckdns.org', 'dynv6.net', 'myftp.org', 'no-ip.com', 'ddnsfree.com',
]);

const BRAND_CASE = new Map([
  ['ezodus', 'Ezodus'], ['exordion', 'Exordion'], ['realera', 'Realera'], ['rubinot', 'RubinOT'],
  ['oxygenot', 'OxygenOT'], ['koliseuot', 'KoliseuOT'], ['baiak-ilusion', 'Baiak Ilusion'],
  ['otmadness', 'OTMadness'], ['noxiousot', 'NoxiousOT'], ['pbotwars', 'PBotWars'],
]);

const NON_IDENTITY_HOSTS = new Set([
  'otland.net', 'otservlist.org', 'opentibiaservers.com', 'discord.com', 'discord.gg',
  'facebook.com', 'youtube.com', 'youtu.be', 'twitch.tv',
]);

const PLACEHOLDER_HOSTS = new Set(['pending', 'unknown', 'n-a', 'na', 'none', 'null', '-']);

function cleanHost(value = '') {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  try {
    return new URL(raw.includes('://') ? raw : `https://${raw}`).hostname.replace(/^www\./, '');
  } catch {
    return raw.replace(/^https?:\/\//, '').split(/[/:]/)[0].replace(/^www\./, '');
  }
}

function isIpAddress(host = '') {
  return /^\d{1,3}(?:\.\d{1,3}){3}$/.test(host) || host.includes(':');
}

function cleanDisplayName(value = '') {
  const raw = String(value || '').trim();
  if (!raw || /<[^>]*|\b(?:class|style|aria-label)\s*=/i.test(raw)) return '';
  return raw
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function identityHost(server = {}) {
  const candidates = [server.host, server.ip, server.website_url, server.external_launch_url]
    .map(cleanHost)
    .filter((host) => host && !PLACEHOLDER_HOSTS.has(host));
  return candidates.find((host) => !isIpAddress(host) && !NON_IDENTITY_HOSTS.has(getRootDomain(host)))
    || candidates.find((host) => isIpAddress(host))
    || '';
}

export function getRootDomainLabel(value = '') {
  const host = cleanHost(value);
  const labels = host.split('.').filter(Boolean);
  if (labels.length < 2) return labels[0] || '';

  const lastTwo = labels.slice(-2).join('.');
  if (HOSTING_DOMAINS.has(lastTwo)) return labels.at(-3) || labels[0];

  const suffixLength = MULTI_PART_SUFFIXES.has(lastTwo) ? 2 : 1;
  return labels.at(-(suffixLength + 1)) || labels[0];
}

export function getRootDomain(value = '') {
  const host = cleanHost(value);
  if (!host || isIpAddress(host)) return host;
  const labels = host.split('.').filter(Boolean);
  if (labels.length < 2) return host;
  const lastTwo = labels.slice(-2).join('.');
  const labelCount = MULTI_PART_SUFFIXES.has(lastTwo) || HOSTING_DOMAINS.has(lastTwo) ? 3 : 2;
  return labels.slice(-labelCount).join('.');
}

export function formatDomainBrand(label = '') {
  const normalized = String(label).toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-|-$/g, '');
  if (BRAND_CASE.has(normalized)) return BRAND_CASE.get(normalized);
  return normalized
    .split('-')
    .filter(Boolean)
    .map((part) => part.length <= 3 && /ot$/.test(part) ? part.toUpperCase() : `${part[0]?.toUpperCase() || ''}${part.slice(1)}`)
    .join(' ');
}

export function deriveServerIdentity(server = {}) {
  const storedHost = identityHost(server);
  const override = identityOverrides.hosts?.[storedHost] || null;
  const host = cleanHost(override?.host || storedHost);
  const domainLabel = isIpAddress(host) ? '' : getRootDomainLabel(host);
  const domainName = formatDomainBrand(domainLabel);
  const storedName = cleanDisplayName(server.name || server.server_name);
  const storedIdentity = cleanDisplayName(server.canonical_slug || server.slug);
  const name = cleanDisplayName(override?.name) || domainName || storedName || formatDomainBrand(storedIdentity) || host || 'Open Tibia Server';
  const slug = String(override?.slug || domainLabel || storedIdentity || storedName || host || name)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

  const rootDomain = getRootDomain(host);
  return { name, slug, host, rootDomain };
}

export function applyServerIdentity(server = {}) {
  const identity = deriveServerIdentity(server);
  return {
    ...server,
    legacy_name: server.name,
    legacy_slug: server.slug,
    host: identity.host || server.host,
    name: identity.name,
    slug: identity.slug,
    root_domain: identity.rootDomain,
    canonical_slug: identity.slug,
    canonical_path: `/servers/${identity.slug}`,
  };
}

export function collapseCanonicalServers(servers = []) {
  const groups = new Map();
  for (const rawServer of servers.filter(Boolean)) {
    const server = applyServerIdentity(rawServer);
    const key = server.canonical_slug || server.slug;
    const existing = groups.get(key);
    if (!existing) {
      groups.set(key, { ...server, identity_aliases: [rawServer.slug, rawServer.name].filter(Boolean) });
      continue;
    }

    const serverPeak = Number(server.players_peak || server.players_online || 0);
    const existingPeak = Number(existing.players_peak || existing.players_online || 0);
    const preferred = serverPeak > existingPeak ? server : existing;
    groups.set(key, {
      ...existing,
      ...preferred,
      name: server.name,
      slug: key,
      canonical_slug: key,
      canonical_path: `/servers/${key}`,
      root_domain: server.root_domain || existing.root_domain,
      players_peak: Math.max(serverPeak, existingPeak),
      players_online: Math.max(Number(server.players_online || 0), Number(existing.players_online || 0)),
      max_players: Math.max(Number(server.max_players || 0), Number(existing.max_players || 0)) || null,
      identity_aliases: [...new Set([
        ...(existing.identity_aliases || []), rawServer.slug, rawServer.name, server.legacy_slug, server.legacy_name,
      ].filter(Boolean))],
    });
  }
  return [...groups.values()];
}
import identityOverrides from '../data/server-identity-overrides.json' with { type: 'json' };
