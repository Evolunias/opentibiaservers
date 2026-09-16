-- Daily signed-in votes for OpenTibiaServers directory rankings.
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS vote_count integer NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS votes_today integer NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS public.server_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vote_date date NOT NULL DEFAULT ((timezone('utc', now()))::date),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (server_id, user_id, vote_date)
);

CREATE INDEX IF NOT EXISTS server_votes_server_idx ON public.server_votes(server_id, vote_date DESC);
CREATE INDEX IF NOT EXISTS server_votes_user_idx ON public.server_votes(user_id, vote_date DESC);
CREATE INDEX IF NOT EXISTS servers_vote_count_idx ON public.servers(vote_count DESC);
CREATE INDEX IF NOT EXISTS servers_votes_today_idx ON public.servers(votes_today DESC);

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

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.server_votes;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL;
END $$;
