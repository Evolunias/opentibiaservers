import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL_CANDIDATES = [
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_SUPABASE_DB_URL,
  process.env.PROJECT_URL,
  process.env.SUPABASE_URL,
];

const SUPABASE_KEY_CANDIDATES = [
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  process.env.NEXT_SUPABASE_KEY,
  process.env.PUBLISHABLE_KEY,
  process.env.SUPABASE_ANON_KEY,
];

const firstNonEmpty = (values = []) => values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';

const resolveSupabaseUrl = () => firstNonEmpty(SUPABASE_URL_CANDIDATES);
const resolveSupabaseAnonKey = () => firstNonEmpty(SUPABASE_KEY_CANDIDATES);

const isValidUrl = (value) => {
  if (!value) return false;

  try {
    const url = new URL(value);
    return Boolean(url.protocol && url.hostname && !url.hostname.includes('placeholder'));
  } catch {
    return false;
  }
};

export const supabaseUrl = resolveSupabaseUrl();
export const supabaseAnonKey = resolveSupabaseAnonKey();
export const supabaseConfigError = !supabaseUrl
  ? 'Supabase URL is not configured.'
  : !isValidUrl(supabaseUrl)
    ? `Supabase URL is invalid or unreachable: ${supabaseUrl}`
    : !supabaseAnonKey
      ? 'Supabase publishable key is not configured.'
      : null;

if (supabaseConfigError) {
  console.error(`Supabase configuration error: ${supabaseConfigError}`);
}

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
    let query = supabase.from('servers').select('*', { count: 'exact' });

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
    if (filters.source) {
      query = query.eq('source', filters.source);
    }
    if (filters.version) {
      query = query.eq('version', filters.version);
    }
    if (filters.min_players !== undefined && filters.min_players !== '') {
      query = query.gte('players_online', Number(filters.min_players));
    }
    if (filters.search) {
      const term = escapeSupabasePattern(filters.search);
      if (term) {
        query = query.or(`name.ilike.%${term}%,description.ilike.%${term}%,ip.ilike.%${term}%,host.ilike.%${term}%`);
      }
    }

    // Add sorting
    switch (filters.sort) {
      case 'uptime':
        query = query.order('uptime_percent', { ascending: false, nullsFirst: false });
        break;
      case 'points':
        query = query.order('points', { ascending: false, nullsFirst: false });
        break;
      case 'rating':
        query = query.order('average_rating', { ascending: false, nullsFirst: false });
        break;
      case 'newest':
        query = query.order('last_seen_at', { ascending: false, nullsFirst: false });
        break;
      case 'name':
        query = query.order('name', { ascending: true });
        break;
      case 'players':
      default:
        query = query.order('players_online', { ascending: false, nullsFirst: false });
        break;
    }

    // Add pagination
    const from = (page - 1) * pageSize;
    query = query.range(from, from + pageSize - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching servers:', error);
      if (isMissingRelationError(error)) {
        return {
          servers: [],
          total: 0,
          error: 'Database migrations are incomplete. The servers table is missing.',
        };
      }
      return { servers: [], total: 0, error: error.message || 'Failed to fetch servers' };
    }

    return { servers: data || [], total: count || 0 };
  } catch (error) {
    console.error('Error in fetchServers:', error);
    return { servers: [], total: 0, error: error.message || 'Failed to fetch servers' };
  }
};

/**
 * Trigger server sync from Supabase Edge Function
 * Can be called manually or set up with a cron service
 */
export const triggerServerSync = async (token = '') => {
  if (supabaseConfigError) {
    const msg = `Cannot trigger sync. ${supabaseConfigError}`;
    console.error(msg);
    return { success: false, error: msg };
  }

  try {
    const url = `${supabaseUrl}/functions/v1/sync-servers`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sync-token': token,
      },
    }).catch(error => {
      console.error('Network error triggering sync:', error);
      throw error;
    });

    if (!response.ok) {
      const result = await response.json().catch(() => ({ error: 'Failed to parse response' }));
      console.error('Sync failed:', result);
      return { success: false, error: result?.error || 'Sync request failed' };
    }

    const result = await response.json();
    console.log('Sync successful:', result);
    return result;
  } catch (error) {
    console.error('Error triggering sync:', error);
    return { success: false, error: error.message || 'Sync operation failed' };
  }
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
