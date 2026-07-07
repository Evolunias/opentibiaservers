-- Source-aware fields for imported server listings.
-- These columns keep opentibiaservers.com independent from any one source
-- while preserving complete otservlist.org records for later remapping.

ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'user_submission';
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_id text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_rank integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS host text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS max_players integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS points integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS unique_players integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS multi_client_level text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS monsters_count integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS npcs_count integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS server_engine text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_owner_name text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_added_text text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_updated_text text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_last_update_text text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS external_launch_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS last_seen_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS source_payload jsonb NOT NULL DEFAULT '{}'::jsonb;

UPDATE public.servers
SET host = COALESCE(host, ip),
    last_seen_at = COALESCE(last_seen_at, last_check, updated_at, now())
WHERE host IS NULL OR last_seen_at IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS servers_source_source_id_uidx
  ON public.servers (source, source_id)
  WHERE source_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS servers_source_idx ON public.servers (source);
CREATE INDEX IF NOT EXISTS servers_players_online_idx ON public.servers (players_online DESC);
CREATE INDEX IF NOT EXISTS servers_last_seen_at_idx ON public.servers (last_seen_at DESC);
CREATE INDEX IF NOT EXISTS servers_version_idx ON public.servers (version);
CREATE INDEX IF NOT EXISTS servers_location_idx ON public.servers (location);
CREATE INDEX IF NOT EXISTS servers_points_idx ON public.servers (points DESC);

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.servers;
EXCEPTION
  WHEN duplicate_object THEN NULL;
  WHEN undefined_object THEN NULL;
END $$;
