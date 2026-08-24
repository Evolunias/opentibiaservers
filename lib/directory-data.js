import { getSupabaseServerClient } from '@/lib/supabase-server';
import { applyPresentationMetrics } from '@/lib/presentation-metrics';
import { applyServerIdentity, collapseCanonicalServers } from '@/lib/server-identity';
import { applyVerifiedServerResearch } from '@/lib/verified-server-research';

const DEFAULT_PAGE_SIZE = 25;

function isMissingColumn(error, column) {
  return error?.code === '42703' || new RegExp(`column .*${column}.* does not exist`, 'i').test(error?.message || '');
}

function normalizeServer(server = {}) {
  return applyVerifiedServerResearch(applyServerIdentity(applyPresentationMetrics({
    ...server,
    source: server.source || 'otservlist.org',
    host: server.host || server.ip,
    last_seen_at: server.last_seen_at || server.last_check || server.updated_at,
    max_players: server.max_players ?? null,
    points: server.points ?? null,
  })));
}

export async function fetchDirectoryServers({ page = 1, pageSize = DEFAULT_PAGE_SIZE, onlineOnly = false, search = '' } = {}) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { servers: [], total: 0, error: 'Supabase server client is not configured.' };
  }

  let query = supabase
    .from('servers')
    .select('*')
    .order('players_peak', { ascending: false, nullsFirst: false })
    .limit(5000);

  if (onlineOnly) query = query.eq('is_online', true);

  const { data, error } = await query;

  if (!error) {
    const canonicalServers = collapseCanonicalServers((data || []).map(normalizeServer));
    const term = String(search || '').trim().toLowerCase();
    const matchedServers = term
      ? canonicalServers.filter((server) => [server.name, server.host, server.root_domain, ...(server.identity_aliases || [])]
          .filter(Boolean).join(' ').toLowerCase().includes(term))
      : canonicalServers;
    const from = (page - 1) * pageSize;
    return {
      servers: matchedServers.slice(from, from + pageSize),
      total: matchedServers.length,
      error: null,
    };
  }

  if (!isMissingColumn(error, 'players_peak') && !isMissingColumn(error, 'is_online')) {
    return { servers: [], total: 0, error: error.message };
  }

  const fallback = await supabase
    .from('servers')
    .select('*')
    .limit(5000);

  if (fallback.error) {
    return { servers: [], total: 0, error: fallback.error.message };
  }

  const canonicalServers = collapseCanonicalServers((fallback.data || []).map(normalizeServer));
  const term = String(search || '').trim().toLowerCase();
  const matchedServers = term
    ? canonicalServers.filter((server) => [server.name, server.host, server.root_domain, ...(server.identity_aliases || [])]
        .filter(Boolean).join(' ').toLowerCase().includes(term))
    : canonicalServers;
  const from = (page - 1) * pageSize;
  return {
    servers: matchedServers.slice(from, from + pageSize),
    total: matchedServers.length,
    error: null,
  };
}

export async function fetchSeoServerSample(limit = 100) {
  const { servers } = await fetchDirectoryServers({ page: 1, pageSize: limit, onlineOnly: false });
  return servers;
}

export async function fetchServersByField(field, value, limit = 100) {
  const all = await fetchSeoServerSample(1000);
  const normalized = String(value || '').toLowerCase();
  return all
    .filter((server) => String(server[field] || '').toLowerCase() === normalized)
    .slice(0, limit);
}

export async function fetchDirectoryFacets() {
  const servers = await fetchSeoServerSample(1000);
  const countries = [...new Set(servers.map((server) => server.location).filter(Boolean))].slice(0, 50);
  const versions = [...new Set(servers.map((server) => server.version).filter(Boolean))].slice(0, 50);

  return { countries, versions };
}
