import { deriveServerIdentity } from './server-identity.js';

export function slugifyServerName(value = '') {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function buildServerSlug(server = {}) {
  const canonical = deriveServerIdentity(server).slug;
  if (canonical) return canonical;
  if (server.slug) return server.slug;
  const fromName = slugifyServerName(server.name);
  const fallback = server.source_id ? `server-${server.source_id}` : `server-${String(server.id || '').slice(0, 8)}`;
  return fromName || fallback;
}

export function getServerPath(server = {}) {
  const slug = buildServerSlug(server);
  return `/servers/${slug}`;
}
