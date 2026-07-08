ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS template_name text NOT NULL DEFAULT 'directory_pro';
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS promo_headline text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS promo_subheadline text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS contact_discord text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS launcher_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS trailer_url text;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS feature_bullets text[] NOT NULL DEFAULT '{}'::text[];
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS gallery_images text[] NOT NULL DEFAULT '{}'::text[];
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS faq_items jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS custom_sections jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS owner_edit_updated_at timestamp with time zone;

CREATE INDEX IF NOT EXISTS servers_template_name_idx ON public.servers(template_name);
