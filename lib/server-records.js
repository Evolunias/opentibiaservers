import { getSupabaseServerClient } from '@/lib/supabase-server';
import { buildServerSlug } from '@/lib/server-paths';
import { getTopOtservlistServerBySlug } from '@/lib/top-otservlist-servers';
import { applyPresentationMetrics } from '@/lib/presentation-metrics';
import { applyServerIdentity, collapseCanonicalServers } from '@/lib/server-identity';

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

  return data ? applyServerIdentity(applyPresentationMetrics(data)) : null;
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

  if (data && buildServerSlug(data) === slug) {
    return applyServerIdentity(sourceFallback
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
      : data);
  }

  const { data: fallbackRows, error: fallbackError } = await supabase
    .from('servers')
    .select('*')
    .order('players_online', { ascending: false, nullsFirst: false })
    .limit(5000);

  if (fallbackError) return sourceFallback;

  const matched = collapseCanonicalServers(fallbackRows || []).find((server) => server.slug === slug);
  if (!matched) return sourceFallback;

  return applyServerIdentity(applyPresentationMetrics({
    ...(sourceFallback || {}),
    ...matched,
    slug,
    canonical_path: `/servers/${slug}`,
  }));
}
