ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS forum_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS community_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS support_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS contact_email text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS official_website_verified_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS screenshots_verified_at timestamp with time zone;

CREATE INDEX IF NOT EXISTS servers_forum_url_idx ON public.servers(forum_url) WHERE forum_url IS NOT NULL;
CREATE INDEX IF NOT EXISTS servers_community_url_idx ON public.servers(community_url) WHERE community_url IS NOT NULL;
