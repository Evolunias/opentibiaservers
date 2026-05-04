import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export const fetchServers = async (filters = {}, page = 1, pageSize = 12) => {
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
