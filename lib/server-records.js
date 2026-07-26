import { getSupabaseServerClient } from '@/lib/supabase-server';
import { buildServerSlug } from '@/lib/server-paths';

function isMissingColumn(error, column) {
  return error?.code === '42703' || new RegExp(`column .*${column}.* does not exist`, 'i').test(error?.message || '');
}

export async function getServerRecordById(id) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !id) return null;

  const { data } = await supabase
    .from('servers')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  return data || null;
}

export async function getServerRecordBySlug(slug) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !slug) return null;

  const { data, error } = await supabase
    .from('servers')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error && !isMissingColumn(error, 'slug')) {
    return null;
  }

  if (data) return data;

  const { data: fallbackRows, error: fallbackError } = await supabase
    .from('servers')
    .select('*')
    .order('players_online', { ascending: false, nullsFirst: false })
    .limit(1000);

  if (fallbackError) return null;

  const matched = (fallbackRows || []).find((server) => buildServerSlug(server) === slug);
  if (!matched) return null;

  return {
    ...matched,
    slug,
    canonical_path: `/servers/${slug}`,
  };
}
