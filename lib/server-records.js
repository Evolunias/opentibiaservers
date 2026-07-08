import { getSupabaseServerClient } from '@/lib/supabase-server';

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

  const { data } = await supabase
    .from('servers')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  return data || null;
}
