-- =============================================================================
-- OpenTibiaServers modern forum schema + OTLand-inspired seed
-- Idempotent. Safe to run in Supabase SQL Editor.
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.forum_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.forum_boards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid NOT NULL REFERENCES public.forum_sections(id) ON DELETE CASCADE,
  parent_board_id uuid REFERENCES public.forum_boards(id) ON DELETE CASCADE,
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  is_locked boolean NOT NULL DEFAULT false,
  topic_count integer NOT NULL DEFAULT 0,
  post_count integer NOT NULL DEFAULT 0,
  last_topic_id uuid,
  last_activity_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.forum_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id uuid NOT NULL REFERENCES public.forum_boards(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  title text NOT NULL,
  slug text NOT NULL,
  body text,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'locked', 'hidden')),
  pinned boolean NOT NULL DEFAULT false,
  reply_count integer NOT NULL DEFAULT 0,
  view_count integer NOT NULL DEFAULT 0,
  last_post_at timestamptz NOT NULL DEFAULT now(),
  last_post_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (board_id, slug)
);

CREATE TABLE IF NOT EXISTS public.forum_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid NOT NULL REFERENCES public.forum_topics(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  body text NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'hidden', 'flagged')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS forum_boards_section_idx ON public.forum_boards(section_id, sort_order);
CREATE INDEX IF NOT EXISTS forum_boards_parent_idx ON public.forum_boards(parent_board_id, sort_order);
CREATE INDEX IF NOT EXISTS forum_topics_board_idx ON public.forum_topics(board_id, pinned DESC, last_post_at DESC);
CREATE INDEX IF NOT EXISTS forum_posts_topic_idx ON public.forum_posts(topic_id, created_at);

CREATE OR REPLACE FUNCTION public.refresh_forum_board_stats(board_uuid uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.forum_boards b
  SET topic_count = (
        SELECT COUNT(*)::integer FROM public.forum_topics t
        WHERE t.board_id = board_uuid AND t.status <> 'hidden'
      ),
      post_count = (
        SELECT COALESCE(SUM(t.reply_count + 1), 0)::integer
        FROM public.forum_topics t
        WHERE t.board_id = board_uuid AND t.status <> 'hidden'
      ),
      last_activity_at = (
        SELECT MAX(t.last_post_at) FROM public.forum_topics t
        WHERE t.board_id = board_uuid AND t.status <> 'hidden'
      ),
      last_topic_id = (
        SELECT t.id FROM public.forum_topics t
        WHERE t.board_id = board_uuid AND t.status <> 'hidden'
        ORDER BY t.last_post_at DESC NULLS LAST LIMIT 1
      )
  WHERE b.id = board_uuid;
END; $$;

CREATE OR REPLACE FUNCTION public.refresh_forum_topic_stats(topic_uuid uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE board_uuid uuid;
BEGIN
  SELECT board_id INTO board_uuid FROM public.forum_topics WHERE id = topic_uuid;
  UPDATE public.forum_topics t
  SET reply_count = GREATEST((
        SELECT COUNT(*)::integer - 1 FROM public.forum_posts p
        WHERE p.topic_id = topic_uuid AND p.status = 'published'
      ), 0),
      last_post_at = COALESCE((
        SELECT MAX(p.created_at) FROM public.forum_posts p
        WHERE p.topic_id = topic_uuid AND p.status = 'published'
      ), t.created_at),
      last_post_user_id = (
        SELECT p.user_id FROM public.forum_posts p
        WHERE p.topic_id = topic_uuid AND p.status = 'published'
        ORDER BY p.created_at DESC LIMIT 1
      ),
      updated_at = now()
  WHERE t.id = topic_uuid;
  IF board_uuid IS NOT NULL THEN
    PERFORM public.refresh_forum_board_stats(board_uuid);
  END IF;
END; $$;

CREATE OR REPLACE FUNCTION public.forum_post_stats_trigger()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  PERFORM public.refresh_forum_topic_stats(COALESCE(NEW.topic_id, OLD.topic_id));
  RETURN COALESCE(NEW, OLD);
END; $$;

CREATE OR REPLACE FUNCTION public.forum_topic_stats_trigger()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    PERFORM public.refresh_forum_board_stats(OLD.board_id);
    RETURN OLD;
  END IF;
  PERFORM public.refresh_forum_board_stats(NEW.board_id);
  IF TG_OP = 'UPDATE' AND OLD.board_id IS DISTINCT FROM NEW.board_id THEN
    PERFORM public.refresh_forum_board_stats(OLD.board_id);
  END IF;
  RETURN NEW;
END; $$;

DROP TRIGGER IF EXISTS forum_posts_refresh_stats ON public.forum_posts;
CREATE TRIGGER forum_posts_refresh_stats
AFTER INSERT OR UPDATE OR DELETE ON public.forum_posts
FOR EACH ROW EXECUTE FUNCTION public.forum_post_stats_trigger();

DROP TRIGGER IF EXISTS forum_topics_refresh_stats ON public.forum_topics;
CREATE TRIGGER forum_topics_refresh_stats
AFTER INSERT OR UPDATE OR DELETE ON public.forum_topics
FOR EACH ROW EXECUTE FUNCTION public.forum_topic_stats_trigger();

ALTER TABLE public.forum_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_boards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Forum sections are public" ON public.forum_sections;
CREATE POLICY "Forum sections are public" ON public.forum_sections FOR SELECT USING (true);
DROP POLICY IF EXISTS "Forum boards are public" ON public.forum_boards;
CREATE POLICY "Forum boards are public" ON public.forum_boards FOR SELECT USING (true);
DROP POLICY IF EXISTS "Visible forum topics are public" ON public.forum_topics;
CREATE POLICY "Visible forum topics are public" ON public.forum_topics
  FOR SELECT USING (status <> 'hidden' OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Authenticated users can create forum topics" ON public.forum_topics;
CREATE POLICY "Authenticated users can create forum topics" ON public.forum_topics
  FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update own forum topics" ON public.forum_topics;
CREATE POLICY "Users can update own forum topics" ON public.forum_topics
  FOR UPDATE USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Visible forum posts are public" ON public.forum_posts;
CREATE POLICY "Visible forum posts are public" ON public.forum_posts
  FOR SELECT USING (status = 'published' OR auth.uid() = user_id);
DROP POLICY IF EXISTS "Authenticated users can create forum posts" ON public.forum_posts;
CREATE POLICY "Authenticated users can create forum posts" ON public.forum_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update own forum posts" ON public.forum_posts;
CREATE POLICY "Users can update own forum posts" ON public.forum_posts
  FOR UPDATE USING (auth.uid() = user_id);

INSERT INTO public.forum_sections (slug, name, description, sort_order) VALUES
  ('site-pulse', 'Site Pulse', 'Product news, policy changes, and community-wide notices for OpenTibiaServers.', 10),
  ('support-lab', 'Support Lab', 'Get unblocked fast with troubleshooting for servers, clients, scripts, and tooling.', 20),
  ('open-tibia-hq', 'Open Tibia HQ', 'Strategy, product talk, and long-form discussion about the OT ecosystem.', 30),
  ('release-bay', 'Release Bay', 'Ship distributions, datapacks, maps, tools, and website stacks the community can reuse.', 40),
  ('code-forge', 'Code Forge', 'Production-ready scripts, engine patches, and client extensions with clear scope.', 50),
  ('learn-track', 'Learn Track', 'Guided walkthroughs for setup, scripting, mapping, ops, and shipping quality.', 60),
  ('showcase', 'Showcase', 'Present maps, sprites, and creative builds with enough context for feedback.', 70),
  ('servers-talent', 'Servers & Talent', 'Launch listings, recruitment, and team formation for OT projects.', 80),
  ('engine-room', 'Engine Room', 'Focused boards for The Forgotten Server and OTClient collaborators.', 90),
  ('lounge', 'Community Lounge', 'Off-topic, games, multimedia, and language rooms that keep the culture healthy.', 100),
  ('feedback-ops', 'Feedback & Ops', 'Improve OpenTibiaServers itself — suggestions, reports, and announcements.', 110)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  sort_order = EXCLUDED.sort_order;

CREATE OR REPLACE FUNCTION public.ots_upsert_forum_board(
  p_section_slug text,
  p_slug text,
  p_name text,
  p_description text,
  p_sort integer,
  p_parent_slug text DEFAULT NULL
) RETURNS void LANGUAGE plpgsql AS $$
DECLARE
  v_section_id uuid;
  v_parent_id uuid;
BEGIN
  SELECT id INTO v_section_id FROM public.forum_sections WHERE slug = p_section_slug;
  IF v_section_id IS NULL THEN RAISE EXCEPTION 'Missing section %', p_section_slug; END IF;
  IF p_parent_slug IS NOT NULL THEN
    SELECT id INTO v_parent_id FROM public.forum_boards WHERE slug = p_parent_slug;
  END IF;
  INSERT INTO public.forum_boards(section_id, parent_board_id, slug, name, description, sort_order)
  VALUES (v_section_id, v_parent_id, p_slug, p_name, p_description, p_sort)
  ON CONFLICT (slug) DO UPDATE SET
    section_id = EXCLUDED.section_id,
    parent_board_id = EXCLUDED.parent_board_id,
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order;
END; $$;

SELECT public.ots_upsert_forum_board('site-pulse', 'newsroom', 'Newsroom', 'Release notes, roadmap highlights, and community-facing updates from OpenTibiaServers.', 10, NULL);
SELECT public.ots_upsert_forum_board('site-pulse', 'announcements', 'Announcements', 'High-signal notices about platform rules, features, and operational changes.', 20, NULL);
SELECT public.ots_upsert_forum_board('support-lab', 'support-desk', 'Support Desk', 'Reproduce bugs, share logs, and get practical fixes for OT servers and clients.', 10, NULL);
SELECT public.ots_upsert_forum_board('support-lab', 'support-requests', 'Support Requests', 'Ask for targeted help on configs, crashes, networking, and deployment blockers.', 20, 'support-desk');
SELECT public.ots_upsert_forum_board('open-tibia-hq', 'ot-discussion', 'Open Tibia Discussion', 'Architecture choices, economy design, retention, and the broader OT landscape.', 10, NULL);
SELECT public.ots_upsert_forum_board('release-bay', 'downloads', 'Downloads', 'Publish polished assets with version notes, licenses, and install expectations.', 10, NULL);
SELECT public.ots_upsert_forum_board('release-bay', 'datapacks', 'Datapacks', 'Content packs ready for evaluation — include client version and dependency notes.', 20, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'distributions', 'Distributions', 'Full server bases and forks with clear upgrade paths and known limitations.', 30, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'archived-distributions', 'Archived Distributions', 'Historical bases kept for reference. Prefer active boards for new releases.', 40, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'maps', 'Maps', 'Playable worlds and map packages with spawn/quest coverage summaries.', 50, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'tools', 'Tools', 'Editors, converters, monitors, and utilities that improve OT workflows.', 60, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'website-apps', 'Website Applications', 'AAC, shop, launcher, and web dashboards with stack and security notes.', 70, 'downloads');
SELECT public.ots_upsert_forum_board('release-bay', 'graveyard', 'The Graveyard', 'Deprecated projects retired from active support. Useful for archaeology, not production.', 80, 'downloads');
SELECT public.ots_upsert_forum_board('code-forge', 'resources', 'Code Resources', 'Reusable modules with API surface, compatibility range, and test notes.', 10, NULL);
SELECT public.ots_upsert_forum_board('code-forge', 'revscripts', 'Revscripts', 'Modern Lua systems written for current TFS/Canary-style stacks.', 20, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'cpp-patches', 'C++ Patches', 'Engine-level changes with build targets, risk notes, and rollback advice.', 30, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'actions-events', 'Actions, MoveEvents & TalkActions', 'Gameplay hooks and commands with event flow and edge-case coverage.', 40, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'monsters-npcs-raids', 'Monsters, NPCs & Raids', 'Creature and encounter packages with balance context and spawn guidance.', 50, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'mods-lua', 'Mods & Lua Functions', 'Shared libraries and helpers that reduce duplication across projects.', 60, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'globalevents-spells', 'GlobalEvents, Spells & CreatureEvents', 'Timed systems, combat formulas, and creature lifecycle logic.', 70, 'resources');
SELECT public.ots_upsert_forum_board('code-forge', 'otclient-resources', 'OTClient Resources', 'UI modules, protocols, and client-side extensions for OTC / OTCv8.', 80, 'resources');
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials', 'Tutorials', 'Step-by-step guides that a new maintainer can follow without tribal knowledge.', 10, NULL);
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials-basic', 'Basics', 'First-week setup: environments, configs, and healthy project structure.', 20, 'tutorials');
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials-programming', 'Programming & Scripting', 'Patterns for Lua/C++ work that stay maintainable under real traffic.', 30, 'tutorials');
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials-os', 'Operating Systems', 'Linux/Windows ops for hosting, networking, backups, and observability.', 40, 'tutorials');
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials-misc', 'Miscellaneous', 'Practical OT knowledge that does not fit a single discipline.', 50, 'tutorials');
SELECT public.ots_upsert_forum_board('learn-track', 'tutorials-mapping', 'Mapping', 'Workflow for Remere/RME, ground truth, and content validation.', 60, 'tutorials');
SELECT public.ots_upsert_forum_board('showcase', 'mapping-showcase', 'Mapping Showcase', 'Show worlds with screenshots, design goals, and feedback prompts.', 10, NULL);
SELECT public.ots_upsert_forum_board('showcase', 'mapping-contests', 'Mapping Contests', 'Timed challenges with rules, judging criteria, and submission windows.', 20, 'mapping-showcase');
SELECT public.ots_upsert_forum_board('showcase', 'spriting-showcase', 'Spriting Showcase', 'Item/outfit/effect art with style notes and usage terms.', 30, NULL);
SELECT public.ots_upsert_forum_board('servers-talent', 'server-gala', 'Server Gala', 'Advertise launches with rates, rules, geography, and anti-abuse posture.', 10, NULL);
SELECT public.ots_upsert_forum_board('servers-talent', 'test-server-gala', 'Test Server Gala', 'QA and closed tests. Keep expectations clear and feedback channels open.', 20, 'server-gala');
SELECT public.ots_upsert_forum_board('servers-talent', 'jobs', 'Jobs & Collaboration', 'Hire, join, or assemble OT teams with role scope and time commitment.', 30, NULL);
SELECT public.ots_upsert_forum_board('engine-room', 'tfs-development', 'The Forgotten Server Development', 'Deep TFS collaboration beyond GitHub issues — design debates and release planning.', 10, NULL);
SELECT public.ots_upsert_forum_board('engine-room', 'otclient-dev', 'OTClient Development', 'Client bugs, protocol work, UI systems, and contribution coordination.', 20, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'chit-chat', 'Chit Chat', 'Friendly off-topic space. Keep it civil and keep OT boards focused.', 10, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'forum-games', 'Forum Games', 'Lightweight community games and recurring threads.', 20, 'chit-chat');
SELECT public.ots_upsert_forum_board('lounge', 'sports', 'Sports', 'Talk matches, seasons, and watch parties.', 30, 'chit-chat');
SELECT public.ots_upsert_forum_board('lounge', 'tibia-official', 'Tibia', 'Discussion about CipSoft Tibia news, nostalgia, and comparisons to OT.', 40, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'multimedia', 'Multimedia', 'Music, video, streams, and creative media around OT culture.', 50, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'small-art', 'Small Art', 'Icons, logos, and compact visual assets.', 60, 'multimedia');
SELECT public.ots_upsert_forum_board('lounge', 'large-art', 'Large Art', 'Banners, concept pieces, and larger illustrations.', 70, 'multimedia');
SELECT public.ots_upsert_forum_board('lounge', 'screenshots', 'Screenshots', 'In-game captures with context — build, event, or release moment.', 80, 'multimedia');
SELECT public.ots_upsert_forum_board('lounge', 'technology', 'Technology', 'Hardware, cloud, security, and tooling adjacent to running OT projects.', 90, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'design', 'Design', 'UX, branding, and product design for OT websites and launchers.', 100, 'technology');
SELECT public.ots_upsert_forum_board('lounge', 'design-requests', 'Design Requests & Support', 'Request visuals or get feedback on existing brand systems.', 110, 'design');
SELECT public.ots_upsert_forum_board('lounge', 'programming-general', 'Programming', 'General software engineering talk that still helps OT builders.', 120, 'technology');
SELECT public.ots_upsert_forum_board('lounge', 'programming-requests', 'Programming Requests & Support', 'Ask for architectural advice or pair on non-OT-specific code problems.', 130, 'programming-general');
SELECT public.ots_upsert_forum_board('lounge', 'web-development', 'Web Development', 'Next.js, APIs, auth, and storefront patterns used by OT sites.', 140, 'technology');
SELECT public.ots_upsert_forum_board('lounge', 'webdev-requests', 'Web Development Requests & Support', 'Help threads for AAC, dashboards, and website integrations.', 150, 'web-development');
SELECT public.ots_upsert_forum_board('lounge', 'games', 'Games', 'Non-Tibia games the community is playing together.', 160, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'league-of-legends', 'League of Legends', 'LoL queues, patches, and community nights.', 170, 'games');
SELECT public.ots_upsert_forum_board('lounge', 'native-chatboards', 'Native Language Rooms', 'Chat in your preferred language while staying connected to the global OT scene.', 180, NULL);
SELECT public.ots_upsert_forum_board('lounge', 'lang-swedish', 'Swedish', 'Swedish-language discussion for OT developers and players.', 190, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-dutch', 'Dutch', 'Dutch-language room for OT news, help, and projects.', 200, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-portuguese', 'Portuguese', 'Portuguese-language space for discussion, support, and OT launches.', 210, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-polish', 'Polish', 'Polish OT community — discussion, help, and projects.', 220, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-polish-support', 'Polish Support', 'Technical help and support in Polish.', 230, 'lang-polish');
SELECT public.ots_upsert_forum_board('lounge', 'lang-polish-tutorials', 'Polish Tutorials', 'Guides and educational materials in Polish.', 240, 'lang-polish');
SELECT public.ots_upsert_forum_board('lounge', 'lang-spanish', 'Spanish', 'Spanish OT community for support, development, and announcements.', 250, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-norwegian', 'Norwegian', 'Norwegian-language room for OT discussion and collaboration.', 260, 'native-chatboards');
SELECT public.ots_upsert_forum_board('lounge', 'lang-german', 'German', 'German-language OT discussion, help, and project updates.', 270, 'native-chatboards');
SELECT public.ots_upsert_forum_board('feedback-ops', 'directory-discussion', 'Directory Discussion', 'Talk about rankings, listings quality, and how the server directory should evolve.', 10, NULL);
SELECT public.ots_upsert_forum_board('feedback-ops', 'directory-reports', 'Listing Reports', 'Report spoofed stats, broken links, or policy violations on directory listings.', 20, 'directory-discussion');
SELECT public.ots_upsert_forum_board('feedback-ops', 'site-feedback', 'Site Feedback', 'Feature requests, UX critiques, and prioritization input for OpenTibiaServers.', 30, NULL);

DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.forum_topics;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL; END $$;
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE public.forum_posts;
EXCEPTION WHEN duplicate_object THEN NULL; WHEN undefined_object THEN NULL; END $$;

SELECT s.name AS section, COUNT(b.id) AS boards
FROM public.forum_sections s
LEFT JOIN public.forum_boards b ON b.section_id = s.id
GROUP BY s.name, s.sort_order
ORDER BY s.sort_order;
