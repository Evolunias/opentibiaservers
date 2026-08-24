import domainStatus from '../data/server-domain-status.json' with { type: 'json' };

const recordsBySlug = new Map((domainStatus.records || []).map((record) => [record.slug, record]));

export function getServerAvailability(serverOrSlug = {}) {
  const slug = typeof serverOrSlug === 'string'
    ? serverOrSlug
    : serverOrSlug.canonical_slug || serverOrSlug.slug;
  return recordsBySlug.get(slug) || null;
}

export function isVerifiedInactiveServer(serverOrSlug = {}) {
  const record = getServerAvailability(serverOrSlug);
  return Boolean(record?.exclude_from_directory && record.status === 'verified_inactive_no_successor');
}

export function filterVerifiedActiveServers(servers = []) {
  return servers.filter((server) => !isVerifiedInactiveServer(server));
}

export function getExcludedServerSlugs() {
  return new Set((domainStatus.records || [])
    .filter((record) => record.exclude_from_directory && record.status === 'verified_inactive_no_successor')
    .map((record) => record.slug));
}

