-- Platform features for OpenTibiaServers.com:
-- account types, claim workflow, reviews, listing conversations,
-- community boards, and uptime monitoring history.

ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS account_type text NOT NULL DEFAULT 'player'
  CHECK (account_type IN ('player', 'server_owner', 'community_manager', 'admin'));
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS display_name text;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS bio text;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS website_url text;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS discord_handle text;
ALTER TABLE public.user_profiles ADD COLUMN IF NOT EXISTS reputation_score integer NOT NULL DEFAULT 0;

ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS owner_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS claimed_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS claim_status text NOT NULL DEFAULT 'unclaimed'
  CHECK (claim_status IN ('unclaimed', 'pending', 'claimed', 'rejected'));
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS average_rating numeric(3, 2) NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS review_count integer NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS conversation_count integer NOT NULL DEFAULT 0;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS last_monitor_status text
  CHECK (last_monitor_status IN ('online', 'offline', 'unknown'));
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS last_monitor_checked_at timestamp with time zone;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS last_response_time_ms integer;
ALTER TABLE public.servers ADD COLUMN IF NOT EXISTS monitor_enabled boolean NOT NULL DEFAULT true;

UPDATE public.servers
SET owner_user_id = COALESCE(owner_user_id, user_id),
    claim_status = CASE
      WHEN COALESCE(owner_user_id, user_id) IS NOT NULL THEN 'claimed'
      ELSE claim_status
    END,
    claimed_at = CASE
      WHEN COALESCE(owner_user_id, user_id) IS NOT NULL THEN COALESCE(claimed_at, created_at, now())
      ELSE claimed_at
    END
WHERE user_id IS NOT NULL OR owner_user_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS public.server_claims (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  claimant_user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  claimant_role text NOT NULL DEFAULT 'owner' CHECK (claimant_role IN ('owner', 'manager', 'community_manager')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
  proof_type text NOT NULL DEFAULT 'website_dns' CHECK (proof_type IN ('website_dns', 'email_domain', 'source_profile', 'manual')),
  proof_value text NOT NULL,
  note text,
  reviewed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS server_claims_pending_unique_idx
  ON public.server_claims(server_id, claimant_user_id)
  WHERE status = 'pending';
CREATE INDEX IF NOT EXISTS server_claims_server_idx ON public.server_claims(server_id);
CREATE INDEX IF NOT EXISTS server_claims_claimant_idx ON public.server_claims(claimant_user_id);

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
  UNIQUE(server_id, user_id)
);

CREATE INDEX IF NOT EXISTS server_reviews_server_idx ON public.server_reviews(server_id, created_at DESC);
CREATE INDEX IF NOT EXISTS server_reviews_user_idx ON public.server_reviews(user_id, created_at DESC);

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

CREATE TABLE IF NOT EXISTS public.server_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES public.server_messages(id) ON DELETE CASCADE,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden', 'flagged')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS server_messages_server_idx ON public.server_messages(server_id, created_at DESC);

CREATE TABLE IF NOT EXISTS public.community_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

INSERT INTO public.community_categories(slug, name, description, sort_order)
VALUES
  ('general', 'General Discussion', 'Community conversation for Open Tibia players and server teams.', 10),
  ('server-launches', 'Server Launches', 'Announce, discuss, and track new Open Tibia launches.', 20),
  ('support', 'Support and Reports', 'Ask for help, report issues, and coordinate with communities.', 30)
ON CONFLICT (slug) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.community_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES public.community_categories(id) ON DELETE SET NULL,
  server_id uuid REFERENCES public.servers(id) ON DELETE SET NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'locked', 'hidden')),
  pinned boolean NOT NULL DEFAULT false,
  reply_count integer NOT NULL DEFAULT 0,
  last_activity_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS community_topics_category_idx ON public.community_topics(category_id, last_activity_at DESC);
CREATE INDEX IF NOT EXISTS community_topics_server_idx ON public.community_topics(server_id, last_activity_at DESC);

CREATE TABLE IF NOT EXISTS public.community_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid NOT NULL REFERENCES public.community_topics(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden', 'flagged')),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS community_posts_topic_idx ON public.community_posts(topic_id, created_at);

CREATE OR REPLACE FUNCTION public.refresh_topic_activity(topic_uuid uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.community_topics
  SET reply_count = GREATEST((
        SELECT COUNT(*)::integer - 1
        FROM public.community_posts
        WHERE topic_id = topic_uuid AND status = 'published'
      ), 0),
      last_activity_at = COALESCE((
        SELECT MAX(created_at)
        FROM public.community_posts
        WHERE topic_id = topic_uuid AND status = 'published'
      ), created_at),
      updated_at = now()
  WHERE id = topic_uuid;
END;
$$;

CREATE OR REPLACE FUNCTION public.community_post_activity_trigger()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM public.refresh_topic_activity(COALESCE(NEW.topic_id, OLD.topic_id));
  RETURN COALESCE(NEW, OLD);
END;
$$;

DROP TRIGGER IF EXISTS refresh_topic_activity_on_post ON public.community_posts;
CREATE TRIGGER refresh_topic_activity_on_post
AFTER INSERT OR UPDATE OR DELETE ON public.community_posts
FOR EACH ROW EXECUTE FUNCTION public.community_post_activity_trigger();

CREATE TABLE IF NOT EXISTS public.server_uptime_checks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  server_id uuid NOT NULL REFERENCES public.servers(id) ON DELETE CASCADE,
  checked_at timestamp with time zone NOT NULL DEFAULT now(),
  status text NOT NULL CHECK (status IN ('online', 'offline', 'unknown')),
  response_time_ms integer,
  error text,
  source text NOT NULL DEFAULT 'opentibiaservers_monitor'
);

CREATE INDEX IF NOT EXISTS server_uptime_checks_server_time_idx
  ON public.server_uptime_checks(server_id, checked_at DESC);

ALTER TABLE public.server_claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.server_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.server_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.server_uptime_checks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Claims are readable by claimant or server owner" ON public.server_claims
  FOR SELECT USING (auth.uid() = claimant_user_id OR EXISTS (
    SELECT 1 FROM public.servers s WHERE s.id = server_id AND (s.owner_user_id = auth.uid() OR s.user_id = auth.uid())
  ));
CREATE POLICY "Authenticated users can create claims" ON public.server_claims
  FOR INSERT WITH CHECK (auth.uid() = claimant_user_id);
CREATE POLICY "Claimants can update pending claims" ON public.server_claims
  FOR UPDATE USING (auth.uid() = claimant_user_id AND status = 'pending');

CREATE POLICY "Published reviews are public" ON public.server_reviews
  FOR SELECT USING (status = 'published' OR auth.uid() = user_id);
CREATE POLICY "Authenticated users can create reviews" ON public.server_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own reviews" ON public.server_reviews
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own reviews" ON public.server_reviews
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Published listing messages are public" ON public.server_messages
  FOR SELECT USING (status = 'published' OR auth.uid() = user_id);
CREATE POLICY "Authenticated users can create listing messages" ON public.server_messages
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own listing messages" ON public.server_messages
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Community categories are public" ON public.community_categories
  FOR SELECT USING (true);
CREATE POLICY "Visible topics are public" ON public.community_topics
  FOR SELECT USING (status <> 'hidden' OR auth.uid() = user_id);
CREATE POLICY "Authenticated users can create topics" ON public.community_topics
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own topics" ON public.community_topics
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Visible posts are public" ON public.community_posts
  FOR SELECT USING (status = 'published' OR auth.uid() = user_id);
CREATE POLICY "Authenticated users can create posts" ON public.community_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own posts" ON public.community_posts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Uptime checks are public" ON public.server_uptime_checks
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own servers" ON public.servers;
CREATE POLICY "Users can update own servers" ON public.servers
  FOR UPDATE USING (auth.uid() = user_id OR auth.uid() = owner_user_id);

CREATE INDEX IF NOT EXISTS servers_owner_user_id_idx ON public.servers(owner_user_id);
CREATE INDEX IF NOT EXISTS servers_average_rating_idx ON public.servers(average_rating DESC);
CREATE INDEX IF NOT EXISTS servers_last_monitor_checked_idx ON public.servers(last_monitor_checked_at DESC);

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.server_reviews;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.server_messages;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.community_topics;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL;
END $$;

DO $$
BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.community_posts;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL;
END $$;
