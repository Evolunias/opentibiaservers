-- =============================================================================
-- OpenTibiaServers schema catch-up (idempotent)
-- Fixes: column servers.slug does not exist
-- Also ensures reviews, votes, SEO, and ranking columns/tables the app queries.
-- Safe to re-run in Supabase SQL Editor.
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- -----------------------------------------------------------------------------
-- 1) Core listing columns used by directory / filters / cards
-- -----------------------------------------------------------------------------
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS host text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS website_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS external_launch_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS location text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS version text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS world_type text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS is_online boolean DEFAULT false;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS players_online integer DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS players_peak integer DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now();

-- Source / import fields
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source text DEFAULT 'user_submission';
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_id text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_rank integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS points integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS last_seen_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_payload jsonb NOT NULL DEFAULT '{}'::jsonb;

-- Ratings (used by filters, cards, rankings)
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS average_rating numeric(3, 2) NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS review_count integer NOT NULL DEFAULT 0;

-- Votes (used by /rankings and ServerCommunityPanel)
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS vote_count integer NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS votes_today integer NOT NULL DEFAULT 0;

-- SEO / identity
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
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS content_status text NOT NULL DEFAULT 'imported';
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS legacy_name text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS legacy_slug text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS root_domain text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS canonical_slug text;

-- Claim / ownership extras (harmless if unused)
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS owner_user_id uuid;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS claimed_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS claim_status text NOT NULL DEFAULT 'unclaimed';

-- Backfill host from ip when possible
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'servers' AND column_name = 'ip'
  ) THEN
    UPDATE public.servers
    SET host = COALESCE(NULLIF(host, ''), ip)
    WHERE host IS NULL OR host = '';
  END IF;
END $$;

-- -----------------------------------------------------------------------------
-- 2) Slug helper + backfill (fixes "column servers.slug does not exist")
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.ots_slugify(raw_value text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT NULLIF(
    trim(both '-' FROM regexp_replace(lower(trim(coalesce(raw_value, ''))), '[^a-z0-9]+', '-', 'g')),
    ''
  );
$$;

UPDATE public.servers
SET slug = public.ots_slugify(name)
WHERE slug IS NULL OR slug = '';

-- Deduplicate any colliding slugs by appending a short id suffix
WITH ranked AS (
  SELECT
    id,
    slug,
    ROW_NUMBER() OVER (PARTITION BY slug ORDER BY updated_at DESC NULLS LAST, id) AS rn
  FROM public.servers
  WHERE slug IS NOT NULL AND slug <> ''
)
UPDATE public.servers s
SET slug = s.slug || '-' || substr(replace(s.id::text, '-', ''), 1, 8)
FROM ranked r
WHERE s.id = r.id
  AND r.rn > 1;

UPDATE public.servers
SET canonical_slug = COALESCE(NULLIF(canonical_slug, ''), slug),
    legacy_slug = COALESCE(NULLIF(legacy_slug, ''), slug),
    canonical_path = COALESCE(NULLIF(canonical_path, ''), '/servers/' || slug)
WHERE slug IS NOT NULL AND slug <> '';

CREATE UNIQUE INDEX IF NOT EXISTS servers_slug_uidx
  ON public.servers(slug)
  WHERE slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS servers_canonical_slug_idx ON public.servers(canonical_slug);
CREATE INDEX IF NOT EXISTS servers_average_rating_idx ON public.servers(average_rating DESC);
CREATE INDEX IF NOT EXISTS servers_vote_count_idx ON public.servers(vote_count DESC);
CREATE INDEX IF NOT EXISTS servers_votes_today_idx ON public.servers(votes_today DESC);
CREATE INDEX IF NOT EXISTS servers_players_peak_idx ON public.servers(players_peak DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS servers_players_online_idx ON public.servers(players_online DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS servers_is_online_idx ON public.servers(is_online);

-- -----------------------------------------------------------------------------
-- 3) Reviews table + rating refresh
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.server_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title text,
  body text,
  gameplay_rating integer CHECK (gameplay_rating BETWEEN 1 AND 5),
  community_rating integer CHECK (community_rating BETWEEN 1 AND 5),
  stability_rating integer CHECK (stability_rating BETWEEN 1 AND 5),
  staff_rating integer CHECK (staff_rating BETWEEN 1 AND 5),
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden', 'flagged')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (server_id, user_id)
);

CREATE INDEX IF NOT EXISTS server_reviews_server_idx
  ON public.server_reviews(server_id, created_at DESC);
CREATE INDEX IF NOT EXISTS server_reviews_user_idx
  ON public.server_reviews(user_id, created_at DESC);

CREATE OR REPLACE FUNCTION public.refresh_server_rating(server_uuid uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.servers
  SET average_rating = COALESCE((
        SELECT ROUND(AVG(rating)::numeric, 2)
        FROM public.server_reviews
        WHERE server_id = server_uuid AND status = 'published'
      ), 0),
      review_count = (
        SELECT COUNT(*)::integer
        FROM public.server_reviews
        WHERE server_id = server_uuid AND status = 'published'
      ),
      updated_at = now()
  WHERE id = server_uuid;
END;
$$;

CREATE OR REPLACE FUNCTION public.server_review_rating_trigger()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM public.refresh_server_rating(COALESCE(NEW.server_id, OLD.server_id));
  RETURN COALESCE(NEW, OLD);
END;
$$;

DROP TRIGGER IF EXISTS refresh_server_rating_on_review ON public.server_reviews;
CREATE TRIGGER refresh_server_rating_on_review
AFTER INSERT OR UPDATE OR DELETE ON public.server_reviews
FOR EACH ROW EXECUTE FUNCTION public.server_review_rating_trigger();

ALTER TABLE public.server_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Published reviews are public" ON public.server_reviews;
CREATE POLICY "Published reviews are public" ON public.server_reviews
  FOR SELECT USING (status = 'published' OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Authenticated users can create reviews" ON public.server_reviews;
CREATE POLICY "Authenticated users can create reviews" ON public.server_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own reviews" ON public.server_reviews;
CREATE POLICY "Users can update own reviews" ON public.server_reviews
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own reviews" ON public.server_reviews;
CREATE POLICY "Users can delete own reviews" ON public.server_reviews
  FOR DELETE USING (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- 4) Daily votes table + counters
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.server_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vote_date date NOT NULL DEFAULT ((timezone('utc', now()))::date),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (server_id, user_id, vote_date)
);

CREATE INDEX IF NOT EXISTS server_votes_server_idx
  ON public.server_votes(server_id, vote_date DESC);
CREATE INDEX IF NOT EXISTS server_votes_user_idx
  ON public.server_votes(user_id, vote_date DESC);

CREATE OR REPLACE FUNCTION public.refresh_server_votes(server_uuid uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  today_utc date := (timezone('utc', now()))::date;
BEGIN
  UPDATE public.servers
  SET vote_count = (
        SELECT COUNT(*)::integer FROM public.server_votes WHERE server_id = server_uuid
      ),
      votes_today = (
        SELECT COUNT(*)::integer FROM public.server_votes
        WHERE server_id = server_uuid AND vote_date = today_utc
      ),
      updated_at = now()
  WHERE id = server_uuid;
END;
$$;

CREATE OR REPLACE FUNCTION public.server_vote_refresh_trigger()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM public.refresh_server_votes(COALESCE(NEW.server_id, OLD.server_id));
  RETURN COALESCE(NEW, OLD);
END;
$$;

DROP TRIGGER IF EXISTS refresh_server_votes_on_change ON public.server_votes;
CREATE TRIGGER refresh_server_votes_on_change
AFTER INSERT OR UPDATE OR DELETE ON public.server_votes
FOR EACH ROW EXECUTE FUNCTION public.server_vote_refresh_trigger();

ALTER TABLE public.server_votes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Votes are public" ON public.server_votes;
CREATE POLICY "Votes are public" ON public.server_votes
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can cast votes" ON public.server_votes;
CREATE POLICY "Authenticated users can cast votes" ON public.server_votes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own votes" ON public.server_votes;
CREATE POLICY "Users can delete own votes" ON public.server_votes
  FOR DELETE USING (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- 5) Slug aliases table (canonical redirects)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.server_slug_aliases (
  legacy_slug text PRIMARY KEY,
  canonical_slug text NOT NULL,
  server_id uuid REFERENCES public.servers(id) ON DELETE CASCADE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS server_slug_aliases_canonical_idx
  ON public.server_slug_aliases(canonical_slug);

-- -----------------------------------------------------------------------------
-- 6) Realtime publication (ignore if already added / unavailable)
-- -----------------------------------------------------------------------------
DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.servers;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL; WHEN undefined_table THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.server_reviews;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL; WHEN undefined_table THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.server_votes;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL; WHEN undefined_table THEN NULL;
END $$;

-- -----------------------------------------------------------------------------
-- 7) Quick verification (optional result set)
-- -----------------------------------------------------------------------------
SELECT
  column_name,
  data_type
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'servers'
  AND column_name IN (
    'slug', 'canonical_slug', 'host', 'average_rating', 'review_count',
    'vote_count', 'votes_today', 'players_peak', 'players_online', 'is_online'
  )
ORDER BY column_name;
