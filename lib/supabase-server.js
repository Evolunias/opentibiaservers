import { createClient } from '@supabase/supabase-js';

function firstNonEmpty(values = []) {
  return values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';
}

function firstValidUrl(values = []) {
  return values.find((value) => {
    if (typeof value !== 'string' || !value.trim()) return false;
    try {
      const parsedUrl = new URL(value.trim());
      return ['http:', 'https:'].includes(parsedUrl.protocol) && parsedUrl.hostname;
    } catch {
      return false;
    }
  })?.trim() || '';
}

export function getSupabaseServerClient() {
  const url = firstValidUrl([
    process.env.SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_DB_URL,
    process.env.PROJECT_URL,
    process.env.PLACEHOLDER_SUPABASE_URL,
  ]);
  const key = firstNonEmpty([
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY,
    process.env.SECRET_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_SUPABASE_KEY,
  ]);

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
