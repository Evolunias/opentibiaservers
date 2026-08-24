import { getSupabaseServerClient } from '@/lib/supabase-server';
import { applyPresentationMetrics } from '@/lib/presentation-metrics';

const DEFAULT_PAGE_SIZE = 25;

function isMissingColumn(error, column) {
  return error?.code === '42703' || new RegExp(`column .*${column}.* does not exist`, 'i').test(error?.message || '');
}

function normalizeServer(server = {}) {
  return applyPresentationMetrics({
    ...server,
    source: server.source || 'otservlist.org',
    host: server.host || server.ip,
    last_seen_at: server.last_seen_at || server.last_check || server.updated_at,
    max_players: server.max_players ?? null,
    points: server.points ?? null,
  });
}

export async function fetchDirectoryServers({ page = 1, pageSize = DEFAULT_PAGE_SIZE, onlineOnly = false } = {}) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { servers: [], total: 0, error: 'Supabase server client is not configured.' };
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('servers')
    .select('*', { count: 'exact' })
    .order('players_peak', { ascending: false, nullsFirst: false })
    .range(from, to);

  if (onlineOnly) query = query.eq('is_online', true);

  const { data, error, count } = await query;

  if (!error) {
    return {
      servers: (data || []).map(normalizeServer),
      total: count || 0,
      error: null,
    };
  }

  if (!isMissingColumn(error, 'players_peak') && !isMissingColumn(error, 'is_online')) {
    return { servers: [], total: 0, error: error.message };
  }

  const fallback = await supabase
    .from('servers')
    .select('*', { count: 'exact' })
    .range(from, to);

  if (fallback.error) {
    return { servers: [], total: 0, error: fallback.error.message };
  }

  return {
    servers: (fallback.data || []).map(normalizeServer),
    total: fallback.count || 0,
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
