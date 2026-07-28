import { getServerPath } from '@/lib/server-paths';

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
  const name = sanitizeText(server.name);
  const values = [
    name,
    `${name} tibia`,
    `${name} ot server`,
    `${name} open tibia`,
    `${name} server`,
    `${name} review`,
    `${name} players online`,
    `${name} uptime`,
    `${name} rates`,
    `${name} client version`,
    `${name} official website`,
    server.host,
    server.ip,
    server.version ? `${name} ${server.version}` : null,
    server.world_type ? `${name} ${server.world_type}` : null,
    server.location ? `${name} ${server.location}` : null,
    'open tibia servers',
    'otservlist alternative',
    'open tibia server list',
    'tibia server directory',
  ];

  return [...new Set(values.map((value) => sanitizeText(value)).filter(Boolean))];
}

export function buildServerTitle(server = {}) {
  if (server.seo_title) return sanitizeText(server.seo_title);
  const name = sanitizeText(server.name);
  const intent = server.version ? `${server.version} Open Tibia Server` : 'Open Tibia Server';
  const online = server.players_online !== undefined ? `${Number(server.players_online || 0).toLocaleString()} Online` : null;
  const parts = [
    name,
    [intent, online].filter(Boolean).join(' - '),
  ].filter(Boolean);
  return parts.join(' | ').slice(0, 68);
}

export function buildServerDescription(server = {}) {
  if (server.seo_description) return sanitizeText(server.seo_description).slice(0, 158);
  const name = sanitizeText(server.name);
  const segments = [
    `${name} Open Tibia server profile with live status, rates, player activity, uptime, reviews, source links, and owner-claim options`,
    server.version ? `client ${server.version}` : null,
    server.location ? `hosted in ${server.location}` : null,
    server.players_online !== null && server.players_online !== undefined
      ? `${Number(server.players_online).toLocaleString()} players online`
      : null,
    server.exp_rate ? `${server.exp_rate}x experience` : null,
  ].filter(Boolean);

  return segments.join('. ').slice(0, 158);
}

export function buildServerJsonLd(server = {}) {
  const url = buildAbsoluteUrl(getServerPath(server));
  const name = sanitizeText(server.name);
  const description = buildServerDescription(server);
  const lastModified = server.updated_at || server.last_seen_at || server.last_check || server.last_monitor_checked_at;
  const sameAs = [
    server.website_url,
    server.external_launch_url,
    server.forum_url,
    server.community_url,
  ].map((value) => sanitizeText(value)).filter((value) => /^https?:\/\//i.test(value));
  const faqItems = Array.isArray(server.faq_items)
    ? server.faq_items.filter((item) => item?.question && item?.answer)
    : [];

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: buildServerTitle(server),
      description,
      url,
      dateModified: lastModified || undefined,
      about: {
        '@type': 'Thing',
        name,
        description: `${name} Open Tibia server listing`,
      },
      mainEntity: {
        '@type': 'VideoGame',
        name,
        url,
        description,
        gamePlatform: server.version ? `Tibia client ${server.version}` : 'Open Tibia',
        genre: 'MMORPG',
        sameAs: sameAs.length ? sameAs : undefined,
      },
      isPartOf: {
        '@type': 'WebSite',
        name: getSiteName(),
        url: buildAbsoluteUrl('/'),
        potentialAction: {
          '@type': 'SearchAction',
          target: `${buildAbsoluteUrl('/')}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Open Tibia Servers', item: buildAbsoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      description,
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
    },
    faqItems.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: sanitizeText(item.question),
            acceptedAnswer: {
              '@type': 'Answer',
              text: sanitizeText(item.answer),
            },
          })),
        }
      : null,
  ].filter(Boolean);
}
