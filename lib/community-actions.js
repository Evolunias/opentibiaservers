import { supabase, supabaseConfigError } from '@/lib/supabase';

const todayUtc = () => new Date().toISOString().slice(0, 10);

export async function resolveServerBySlug(slug) {
  if (!slug || supabaseConfigError) return { server: null, error: supabaseConfigError || 'Missing slug' };

  const { data, error } = await supabase
    .from('servers')
    .select('id, slug, name, average_rating, review_count, vote_count, votes_today, players_peak, players_online, world_type, location, version, is_online')
    .eq('slug', slug)
    .maybeSingle();

  if (error && error.code !== 'PGRST116') {
    return { server: null, error: error.message };
  }

  if (data) return { server: data, error: null };

  const { data: rows, error: listError } = await supabase
    .from('servers')
    .select('id, slug, name, average_rating, review_count, vote_count, votes_today, players_peak, players_online, world_type, location, version, is_online')
    .ilike('name', slug.replace(/-/g, ' '))
    .limit(5);

  if (listError) return { server: null, error: listError.message };
  const match = (rows || []).find((row) => String(row.slug || '').toLowerCase() === String(slug).toLowerCase()) || rows?.[0] || null;
  return { server: match, error: null };
}

export async function fetchServerReviews(serverId, limit = 25) {
  if (!serverId) return { reviews: [], error: null };
  const { data, error } = await supabase
    .from('server_reviews')
    .select('*')
    .eq('server_id', serverId)
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(limit);
  return { reviews: data || [], error: error?.message || null };
}

export async function fetchUserVoteToday(serverId, userId) {
  if (!serverId || !userId) return { voted: false, error: null };
  const { data, error } = await supabase
    .from('server_votes')
    .select('id')
    .eq('server_id', serverId)
    .eq('user_id', userId)
    .eq('vote_date', todayUtc())
    .maybeSingle();
  if (error && error.code !== 'PGRST116') return { voted: false, error: error.message };
  return { voted: Boolean(data?.id), error: null };
}

export async function castDailyVote(serverId, userId) {
  if (!serverId || !userId) return { success: false, error: 'Sign in required' };
  if (supabaseConfigError) return { success: false, error: supabaseConfigError };

  const { error } = await supabase.from('server_votes').insert([
    {
      server_id: serverId,
      user_id: userId,
      vote_date: todayUtc(),
    },
  ]);

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'You already voted for this server today.' };
    }
    if (error.message?.includes('server_votes') || error.code === '42P01') {
      return { success: false, error: 'Vote storage is not migrated yet. Apply supabase/migrations/010_server_votes.sql.' };
    }
    return { success: false, error: error.message };
  }

  return { success: true, error: null };
}

export async function upsertServerReview({ serverId, userId, rating, title, body }) {
  if (!serverId || !userId) return { success: false, error: 'Sign in required' };

  const { error } = await supabase.from('server_reviews').upsert(
    {
      server_id: serverId,
      user_id: userId,
      rating: Number(rating),
      title: title || null,
      body: body || null,
      status: 'published',
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'server_id,user_id' },
  );

  if (error) return { success: false, error: error.message };
  return { success: true, error: null };
}

export async function fetchRankedServers({ sort = 'votes', limit = 50 } = {}) {
  if (supabaseConfigError) return { servers: [], error: supabaseConfigError };

  let query = supabase
    .from('servers')
    .select('id, slug, name, average_rating, review_count, vote_count, votes_today, players_peak, players_online, world_type, location, version, is_online, host, website_url');

  switch (sort) {
    case 'rating':
      query = query.order('average_rating', { ascending: false, nullsFirst: false }).order('review_count', { ascending: false, nullsFirst: false });
      break;
    case 'peak':
      query = query.order('players_peak', { ascending: false, nullsFirst: false });
      break;
    case 'today':
      query = query.order('votes_today', { ascending: false, nullsFirst: false }).order('vote_count', { ascending: false, nullsFirst: false });
      break;
    case 'votes':
    default:
      query = query.order('vote_count', { ascending: false, nullsFirst: false }).order('average_rating', { ascending: false, nullsFirst: false });
      break;
  }

  const { data, error } = await query.limit(limit);
  if (error) {
    if (error.message?.includes('vote_count') || error.code === '42703') {
      const fallback = await supabase
        .from('servers')
        .select('id, slug, name, average_rating, review_count, players_peak, players_online, world_type, location, version, is_online, host, website_url')
        .order('average_rating', { ascending: false, nullsFirst: false })
        .limit(limit);
      return {
        servers: (fallback.data || []).map((row) => ({ ...row, vote_count: 0, votes_today: 0 })),
        error: fallback.error?.message || null,
      };
    }
    return { servers: [], error: error.message };
  }

  return { servers: data || [], error: null };
}
