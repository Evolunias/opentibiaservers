ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_schema_version smallint NOT NULL DEFAULT 1;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS is_wiki_formatted boolean NOT NULL DEFAULT false;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_markdown text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_data jsonb NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_research_status text NOT NULL DEFAULT 'not_started'
  CHECK (wiki_research_status IN ('not_started', 'source_backed', 'community_reported', 'needs_research'));
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_formatted_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS wiki_source_hash text;

CREATE INDEX IF NOT EXISTS servers_wiki_pending_idx
  ON public.servers (is_wiki_formatted, source_rank ASC NULLS LAST, updated_at DESC NULLS LAST);
