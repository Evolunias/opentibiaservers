import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase credentials not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
  );
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder');

export const fetchServers = async (filters = {}, page = 1, pageSize = 12) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    const msg = 'Supabase not configured. Cannot fetch servers.';
    console.error(msg);
    return { servers: [], total: 0, error: msg };
  }

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
  if (filters.search) {
    query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
  }

  // Add sorting
  query = query.order('players_online', { ascending: false });

  // Add pagination
  const from = (page - 1) * pageSize;
  query = query.range(from, from + pageSize - 1);

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching servers:', error);
    return { servers: [], total: 0, error };
  }

  return { servers: data || [], total: count || 0 };
};

/**
 * Trigger server sync from Supabase Edge Function
 * Can be called manually or set up with a cron service
 */
export const triggerServerSync = async (token = '') => {
  if (!supabaseUrl) {
    const msg = 'Supabase URL not configured. Cannot trigger sync.';
    console.error(msg);
    return { success: false, error: msg };
  }

  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/sync-servers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sync-token': token,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Sync failed:', result);
      return { success: false, error: result.error };
    }

    console.log('Sync successful:', result);
    return result;
  } catch (error) {
    console.error('Error triggering sync:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Trigger server verification from edge function
 */
export const triggerServerVerification = async (serverId) => {
  if (!supabaseUrl) {
    const msg = 'Supabase URL not configured. Cannot trigger verification.';
    console.error(msg);
    return { success: false, error: msg };
  }

  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/verify-server`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ serverId }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Verification failed:', result);
      return { success: false, error: result.error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error triggering verification:', error);
    return { success: false, error: error.message };
  }
};
