import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { applyPresentationMetrics } from '@/lib/presentation-metrics';
import { applyServerIdentity, collapseCanonicalServers } from '@/lib/server-identity';
import { applyVerifiedServerResearch } from '@/lib/verified-server-research';
import { filterVerifiedActiveServers } from '@/lib/server-availability';

const SUPABASE_URL_CANDIDATES = [
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_SUPABASE_DB_URL,
  process.env.PROJECT_URL,
  process.env.SUPABASE_URL,
  process.env.PLACEHOLDER_SUPABASE_URL,
];

const SUPABASE_KEY_CANDIDATES = [
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  process.env.NEXT_SUPABASE_KEY,
  process.env.PUBLISHABLE_KEY,
  process.env.SUPABASE_ANON_KEY,
];

const firstNonEmpty = (values = []) => values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';

const resolveSupabaseAnonKey = () => firstNonEmpty(SUPABASE_KEY_CANDIDATES);

const isValidUrl = (value) => {
  if (!value) return false;

  try {
    const url = new URL(value);
    return Boolean(['http:', 'https:'].includes(url.protocol) && url.hostname && !url.hostname.includes('placeholder'));
  } catch {
    return false;
  }
};

const resolveSupabaseUrl = () =>
  SUPABASE_URL_CANDIDATES.find(isValidUrl) || firstNonEmpty(SUPABASE_URL_CANDIDATES);

export const supabaseUrl = resolveSupabaseUrl();
export const supabaseAnonKey = resolveSupabaseAnonKey();
export const supabaseConfigError = !supabaseUrl
  ? 'Supabase URL is not configured.'
  : !isValidUrl(supabaseUrl)
    ? `Supabase URL is invalid or unreachable: ${supabaseUrl}`
    : !supabaseAnonKey
      ? 'Supabase publishable key is not configured.'
      : null;

export const supabase = createSupabaseClient(
  isValidUrl(supabaseUrl) ? supabaseUrl : 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);
export const createClient = () => supabase;
export const isSupabaseConfigured = !supabaseConfigError;

const escapeSupabasePattern = (value = '') =>
  String(value).replace(/[,%]/g, ' ').trim();

const isMissingRelationError = (error) =>
  error?.code === '42P01' ||
  error?.message?.includes('relation') ||
  error?.message?.includes('does not exist');

export const fetchServers = async (filters = {}, page = 1, pageSize = 12) => {
  if (supabaseConfigError) {
    const msg = `Supabase not configured. ${supabaseConfigError}`;
    console.error(msg);
    return { servers: [], total: 0, error: msg };
  }

  try {
    let query = supabase.from('servers').select('*');

    // Apply filters
    if (filters.world_type) {
      query = query.eq('world_type', filters.world_type);
    }
    if (filters.location) {
      query = query.eq('location', filters.location);
    }
    if (filters.is_online !== undefined) {
      query = query.eq('is_online', filters.is_online);
    }
    if (filters.pvp_type) {
      query = query.eq('pvp_type', filters.pvp_type);
    }
    if (filters.version) {
      query = query.eq('version', filters.version);
    }
    if (filters.min_players !== undefined && filters.min_players !== '') {
      query = query.gte('players_peak', Number(filters.min_players));
    }
    if (filters.min_rating !== undefined && filters.min_rating !== '') {
      query = query.gte('average_rating', Number(filters.min_rating));
    }
    if (filters.online_only === '1' || filters.online_only === true) {
      query = query.eq('is_online', true);
    }
    if (filters.online_only === '0') {
      query = query.eq('is_online', false);
    }
    // Add sorting
    switch (filters.sort) {
      case 'uptime':
        query = query.order('uptime_percent', { ascending: false, nullsFirst: false });
        break;
      case 'points':
        query = query.order('points', { ascending: false, nullsFirst: false });
        break;
      case 'votes':
        query = query.order('vote_count', { ascending: false, nullsFirst: false });
        break;
      case 'votes_today':
        query = query.order('votes_today', { ascending: false, nullsFirst: false });
        break;
      case 'rating':
        query = query.order('average_rating', { ascending: false, nullsFirst: false });
        break;
      case 'newest':
        query = query.order('updated_at', { ascending: false, nullsFirst: false });
        break;
      case 'name':
        query = query.order('name', { ascending: true });
        break;
      case 'players':
      case 'peak':
      default:
        query = query.order('players_peak', { ascending: false, nullsFirst: false });
        break;
    }

    query = query.limit(5000);

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching servers:', error);
      if ((error.code === '42703' || /vote_count|votes_today/i.test(error.message || '')) && !filters.__voteFallback) {
        return fetchServers({
          ...filters,
          sort: filters.sort === 'votes' || filters.sort === 'votes_today' ? 'peak' : filters.sort,
          __voteFallback: true,
        }, page, pageSize);
      }
      if (isMissingRelationError(error)) {
        return {
          servers: [],
          total: 0,
          error: 'Database migrations are incomplete. The servers table is missing.',
        };
      }
      return { servers: [], total: 0, error: error.message || 'Failed to fetch servers' };
    }

    const canonicalServers = filterVerifiedActiveServers(collapseCanonicalServers(
      (data || []).map((server) => applyVerifiedServerResearch(applyServerIdentity(applyPresentationMetrics(server))))
    ));
    const term = escapeSupabasePattern(filters.search).toLowerCase();
    let matchedServers = term
      ? canonicalServers.filter((server) => [server.name, server.host, server.root_domain, ...(server.identity_aliases || [])]
          .filter(Boolean).join(' ').toLowerCase().includes(term))
      : canonicalServers;
    if (filters.min_rating !== undefined && filters.min_rating !== '') {
      const minRating = Number(filters.min_rating);
      matchedServers = matchedServers.filter((server) => Number(server.average_rating || 0) >= minRating);
    }
    const from = (page - 1) * pageSize;
    return { servers: matchedServers.slice(from, from + pageSize), total: matchedServers.length };
  } catch (error) {
    console.error('Error in fetchServers:', error);
    return { servers: [], total: 0, error: error.message || 'Failed to fetch servers' };
  }
};

export const triggerServerSync = async (token = '') => {
  const msg = 'Automatic sync is disabled. Update the database manually on request.';
  console.warn(msg, token ? '(token provided)' : '');
  return { success: false, error: msg };
};

/**
 * Trigger server verification from edge function
 */
export const triggerServerVerification = async (serverId) => {
  if (supabaseConfigError) {
    const msg = `Cannot trigger verification. ${supabaseConfigError}`;
    console.error(msg);
    return { success: false, error: msg };
  }

  try {
    const url = `${supabaseUrl}/functions/v1/verify-server`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serverId }),
    }).catch(error => {
      console.error('Network error triggering verification:', error);
      throw error;
    });

    if (!response.ok) {
      const result = await response.json().catch(() => ({ error: 'Failed to parse response' }));
      console.error('Verification failed:', result);
      return { success: false, error: result?.error || 'Verification request failed' };
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error triggering verification:', error);
    return { success: false, error: error.message || 'Verification operation failed' };
  }
};
