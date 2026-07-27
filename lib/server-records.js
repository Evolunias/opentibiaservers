import { getSupabaseServerClient } from '@/lib/supabase-server';
import { buildServerSlug } from '@/lib/server-paths';
import { getTopOtservlistServerBySlug } from '@/lib/top-otservlist-servers';

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
  if (!slug) return null;
  const sourceFallback = getTopOtservlistServerBySlug(slug);
  if (!supabase) return sourceFallback;

  const { data, error } = await supabase
    .from('servers')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error && !isMissingColumn(error, 'slug')) {
    return null;
  }

  if (data) {
    return sourceFallback
      ? {
          ...sourceFallback,
          ...data,
          source_payload: {
            ...(sourceFallback.source_payload || {}),
            ...(data.source_payload || {}),
          },
          research_sources: data.research_sources?.length ? data.research_sources : sourceFallback.research_sources,
          feature_bullets: data.feature_bullets?.length ? data.feature_bullets : sourceFallback.feature_bullets,
          faq_items: data.faq_items?.length ? data.faq_items : sourceFallback.faq_items,
          custom_sections: data.custom_sections?.length ? data.custom_sections : sourceFallback.custom_sections,
        }
      : data;
  }

  const { data: fallbackRows, error: fallbackError } = await supabase
    .from('servers')
    .select('*')
    .order('players_online', { ascending: false, nullsFirst: false })
    .limit(1000);

  if (fallbackError) return sourceFallback;

  const matched = (fallbackRows || []).find((server) => buildServerSlug(server) === slug);
  if (!matched) return sourceFallback;

  return {
    ...(sourceFallback || {}),
    ...matched,
    slug,
    canonical_path: `/servers/${slug}`,
  };
}
