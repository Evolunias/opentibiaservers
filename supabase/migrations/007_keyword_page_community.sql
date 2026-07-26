CREATE TABLE IF NOT EXISTS public.keyword_page_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug text NOT NULL,
  keyword text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS keyword_page_comments_page_idx
  ON public.keyword_page_comments(page_slug, created_at DESC);

CREATE TABLE IF NOT EXISTS public.keyword_page_screenshots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug text NOT NULL,
  keyword text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  caption text,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS keyword_page_screenshots_page_idx
  ON public.keyword_page_screenshots(page_slug, created_at DESC);

ALTER TABLE public.keyword_page_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keyword_page_screenshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published keyword comments are public" ON public.keyword_page_comments
  FOR SELECT USING (status = 'published');
CREATE POLICY "Authenticated users can create keyword comments" ON public.keyword_page_comments
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own keyword comments" ON public.keyword_page_comments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Published keyword screenshots are public" ON public.keyword_page_screenshots
  FOR SELECT USING (status = 'published');
CREATE POLICY "Authenticated users can create keyword screenshots" ON public.keyword_page_screenshots
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own keyword screenshots" ON public.keyword_page_screenshots
  FOR UPDATE USING (auth.uid() = user_id);

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.keyword_page_comments;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.keyword_page_screenshots;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
