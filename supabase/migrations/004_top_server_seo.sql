ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS slug text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS canonical_path text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS seo_title text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS seo_description text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS keyword_primary text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS keyword_aliases text[] NOT NULL DEFAULT '{}'::text[];
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS official_summary text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS official_facts jsonb NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS research_sources jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS hero_image_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS official_last_researched_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS content_status text NOT NULL DEFAULT 'imported'
  CHECK (content_status IN ('imported', 'enriched', 'editorial_reviewed'));

CREATE UNIQUE INDEX IF NOT EXISTS servers_slug_uidx
  ON public.servers(slug)
  WHERE slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS servers_keyword_primary_idx ON public.servers(keyword_primary);
CREATE INDEX IF NOT EXISTS servers_content_status_idx ON public.servers(content_status);
