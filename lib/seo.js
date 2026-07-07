const DEFAULT_SITE_URL = 'https://opentibiaservers.com';
const DEFAULT_SITE_NAME = 'OpenTibiaServers.com';

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

export function getSiteName() {
  return process.env.NEXT_PUBLIC_SITE_NAME || DEFAULT_SITE_NAME;
}

export function buildAbsoluteUrl(pathname = '/') {
  const base = getSiteUrl();
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function sanitizeText(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

export function makeServerKeywordList(server = {}) {
  const values = [
    server.name,
    `${server.name} tibia`,
    `${server.name} ot server`,
    `${server.name} open tibia`,
    `${server.name} server`,
    `${server.name} review`,
    `${server.name} players online`,
    server.host,
    server.ip,
    server.version ? `${server.name} ${server.version}` : null,
    server.world_type ? `${server.name} ${server.world_type}` : null,
    server.location ? `${server.name} ${server.location}` : null,
    'open tibia servers',
    'otservlist alternative',
    'open tibia server list',
  ];

  return [...new Set(values.map((value) => sanitizeText(value)).filter(Boolean))];
}

export function buildServerTitle(server = {}) {
  const parts = [
    sanitizeText(server.name),
    server.version ? `${server.version} Open Tibia Server` : 'Open Tibia Server',
    'OpenTibiaServers.com',
  ].filter(Boolean);
  return parts.join(' | ');
}

export function buildServerDescription(server = {}) {
  const segments = [
    sanitizeText(server.name),
    server.world_type ? `${server.world_type} server` : 'Open Tibia server',
    server.version ? `client ${server.version}` : null,
    server.location ? `hosted in ${server.location}` : null,
    server.players_online !== null && server.players_online !== undefined
      ? `${Number(server.players_online).toLocaleString()} players online`
      : null,
    server.exp_rate ? `${server.exp_rate}x experience` : null,
    sanitizeText(server.description || ''),
  ].filter(Boolean);

  return segments.join('. ').slice(0, 158);
}

export function buildServerJsonLd(server = {}) {
  const url = buildAbsoluteUrl(`/server/${server.id}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: sanitizeText(server.name),
    description: buildServerDescription(server),
    brand: {
      '@type': 'Brand',
      name: getSiteName(),
    },
    category: 'Open Tibia Server',
    url,
    additionalProperty: [
      server.version ? { '@type': 'PropertyValue', name: 'Client Version', value: server.version } : null,
      server.world_type ? { '@type': 'PropertyValue', name: 'World Type', value: server.world_type } : null,
      server.location ? { '@type': 'PropertyValue', name: 'Location', value: server.location } : null,
      server.exp_rate ? { '@type': 'PropertyValue', name: 'Experience Rate', value: `${server.exp_rate}x` } : null,
      server.players_online !== undefined ? { '@type': 'PropertyValue', name: 'Players Online', value: server.players_online } : null,
      server.players_peak !== undefined ? { '@type': 'PropertyValue', name: 'Peak Players', value: server.players_peak } : null,
    ].filter(Boolean),
    aggregateRating: server.review_count
      ? {
          '@type': 'AggregateRating',
          ratingValue: Number(server.average_rating || 0).toFixed(2),
          reviewCount: server.review_count,
        }
      : undefined,
  };
}
