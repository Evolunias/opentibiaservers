-- OpenTibiaServers forum synthetic seed (FIXED)
-- Idempotent. Paste into Supabase SQL Editor.
-- Dollar-quoted strings avoid apostrophe parse errors.

ALTER TABLE public.forum_topics ADD COLUMN IF NOT EXISTS author_name text;
ALTER TABLE public.forum_posts ADD COLUMN IF NOT EXISTS author_name text;

CREATE OR REPLACE FUNCTION public.ots_seed_forum_topic(
  p_board_slug text,
  p_topic_slug text,
  p_title text,
  p_author text,
  p_body text,
  p_pinned boolean DEFAULT false,
  p_hours_ago integer DEFAULT 48,
  p_replies jsonb DEFAULT '[]'::jsonb
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $fn$
DECLARE
  v_board_id uuid;
  v_topic_id uuid;
  v_created timestamptz;
  v_last timestamptz;
  v_reply jsonb;
  v_idx integer := 0;
  v_views integer;
BEGIN
  SELECT id INTO v_board_id FROM public.forum_boards WHERE slug = p_board_slug;
  IF v_board_id IS NULL THEN
    RAISE NOTICE 'Skipping missing board %', p_board_slug;
    RETURN NULL;
  END IF;

  v_created := now() - make_interval(hours => GREATEST(p_hours_ago, 1));
  v_views := 40 + (abs(hashtext(p_topic_slug)) % 900);

  INSERT INTO public.forum_topics (
    board_id, user_id, title, slug, body, status, pinned, view_count, author_name, created_at, updated_at, last_post_at
  ) VALUES (
    v_board_id, NULL, p_title, p_topic_slug, p_body, 'open', COALESCE(p_pinned, false), v_views, p_author, v_created, v_created, v_created
  )
  ON CONFLICT (board_id, slug) DO UPDATE SET
    title = EXCLUDED.title,
    body = EXCLUDED.body,
    pinned = EXCLUDED.pinned,
    author_name = EXCLUDED.author_name,
    view_count = EXCLUDED.view_count,
    updated_at = now()
  RETURNING id INTO v_topic_id;

  DELETE FROM public.forum_posts WHERE topic_id = v_topic_id AND user_id IS NULL;

  INSERT INTO public.forum_posts (topic_id, user_id, body, status, author_name, created_at, updated_at)
  VALUES (v_topic_id, NULL, p_body, 'published', p_author, v_created, v_created);

  v_last := v_created;
  FOR v_reply IN SELECT value FROM jsonb_array_elements(COALESCE(p_replies, '[]'::jsonb)) AS elem(value)
  LOOP
    v_idx := v_idx + 1;
    v_last := v_created + make_interval(hours => v_idx * 3);
    INSERT INTO public.forum_posts (topic_id, user_id, body, status, author_name, created_at, updated_at)
    VALUES (
      v_topic_id,
      NULL,
      COALESCE(v_reply->>'body', ''),
      'published',
      COALESCE(v_reply->>'author', 'Member'),
      v_last,
      v_last
    );
  END LOOP;

  UPDATE public.forum_topics
  SET reply_count = GREATEST(v_idx, 0),
      last_post_at = v_last,
      last_post_user_id = NULL,
      updated_at = now()
  WHERE id = v_topic_id;

  BEGIN
    PERFORM public.refresh_forum_board_stats(v_board_id);
  EXCEPTION WHEN OTHERS THEN
    NULL;
  END;

  RETURN v_topic_id;
END;
$fn$;

SELECT public.ots_seed_forum_topic(
  $ots$newsroom$ots$,
  $ots$welcome-ots-forum$ots$,
  $ots$Welcome to the OpenTibiaServers forum$ots$,
  $ots$RuneCartographer$ots$,
  $ots$This board is for product updates and community announcements about the OpenTibiaServers directory and forum.

House rules:
1) Be specific with versions (TFS/Canary/OTC build).
2) No account trading.
3) No harassment.
4) Server ads belong in Server Gala.$ots$,
  true,
  897,
  $ots$[{"author":"RuneCartographer","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"ScrollForge","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$newsroom$ots$,
  $ots$sept-platform-notes$ots$,
  $ots$September platform notes: forum + directory tabs$ots$,
  $ots$VenoreOps$ots$,
  $ots$Forum is the homepage with a Directory tab for listings.

If something looks off, reply with browser + URL.

Upcoming: clearer submit-server checks and owner-reported player metrics.$ots$,
  true,
  894,
  $ots$[{"author":"BoneAltar","body":"Include license and engine version in the top post."},{"author":"DarashiaDev","body":"I can test this on a staging host this weekend."},{"author":"AnkrahmunMap","body":"Does it support fresh installs only?"},{"author":"DepotSorter","body":"Include license and engine version in the top post."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$announcements$ots$,
  $ots$forum-etiquette$ots$,
  $ots$Forum etiquette and moderation basics$ots$,
  $ots$LibertyBayOps$ots$,
  $ots$Pinned for newcomers.

- Search before posting duplicates.
- Include OS, engine fork, client, and error text.
- Spoiler economy exploits.
- Staff may lock circular threads.$ots$,
  true,
  891,
  $ots$[{"author":"BoneAltar","body":"Include license and engine version in the top post."},{"author":"DarashiaDev","body":"I can test this on a staging host this weekend."},{"author":"AnkrahmunMap","body":"Does it support fresh installs only?"},{"author":"DepotSorter","body":"Include license and engine version in the top post."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$announcements$ots$,
  $ots$reporting-listings$ots$,
  $ots$Reporting bad directory listings$ots$,
  $ots$ImbuementLab$ots$,
  $ots$If a listing spoofs players online or uses a broken website URL, open a thread in Directory Reports with the listing slug and screenshots.$ots$,
  false,
  888,
  $ots$[{"author":"SvargrondBit","body":"Screenshots would help a lot."},{"author":"GreyIsland","body":"The lighting on the left reads clearer."},{"author":"ImbuementLab","body":"Watch walkability near the cliffs."},{"author":"ManaShield","body":"Screenshots would help a lot."},{"author":"RateTuner","body":"The lighting on the left reads clearer."},{"author":"SkillTrainer","body":"Watch walkability near the cliffs."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$support-desk$ots$,
  $ots$tfs14-protocol-mismatch$ots$,
  $ots$TFS 1.4 protocol mismatch after OTC update$ots$,
  $ots$SoftBootsLab$ots$,
  $ots$After updating OTClient modules, login fails with Protocol mismatch against TFS 1.4.2.

Server shows player connected then removes the connection.
Client: ERROR ProtocolGame parse message unhandled opcode.

Which OTC commit pairs cleanly with stock TFS 1.4 protocol?$ots$,
  false,
  885,
  $ots$[{"author":"SvargrondBit","body":"Screenshots would help a lot."},{"author":"GreyIsland","body":"The lighting on the left reads clearer."},{"author":"ImbuementLab","body":"Watch walkability near the cliffs."},{"author":"ManaShield","body":"Screenshots would help a lot."},{"author":"RateTuner","body":"The lighting on the left reads clearer."},{"author":"SkillTrainer","body":"Watch walkability near the cliffs."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$support-desk$ots$,
  $ots$mysql-deadlock-deaths$ots$,
  $ots$MySQL deadlock on player deaths table$ots$,
  $ots$HouseBroker$ots$,
  $ots$High rate server: InnoDB deadlock on player_deaths during raids.
Isolation level is REPEATABLE READ.
Looking for a safe index strategy or write batching pattern.$ots$,
  false,
  882,
  $ots$[{"author":"YalaharModule","body":"Interessante abordagem."},{"author":"ExivaPing","body":"Tambem vimos isso no nosso host."},{"author":"SoftBootsLab","body":"Vale documentar a versao do client."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$support-requests$ots$,
  $ots$config-market-offers$ots$,
  $ots$Need help wiring config.lua market offers$ots$,
  $ots$RookGuard$ots$,
  $ots$Market offers appear in DB but not in-game. Canary-based fork. marketOfferDuration is set. Any checklist before I paste full config?$ots$,
  false,
  879,
  $ots$[{"author":"YalaharModule","body":"Interessante abordagem."},{"author":"ExivaPing","body":"Tambem vimos isso no nosso host."},{"author":"SoftBootsLab","body":"Vale documentar a versao do client."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$support-requests$ots$,
  $ots$docker-status-closed$ots$,
  $ots$Docker compose: game port open but status closed$ots$,
  $ots$CarlinRelay$ots$,
  $ots$7171/7172 published. Website status checker still shows offline. Host firewall allows TCP. Is the checker probing status protocol or HTTP only?$ots$,
  false,
  876,
  $ots$[{"author":"MagicWall","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GuildHall","body":"We hit the same issue after a module update."},{"author":"NPCWhisper","body":"Can you paste the exact engine commit hash?"},{"author":"AxeOfCarving","body":"Try a clean OTC profile before changing server code."},{"author":"Mapwright","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$ot-discussion$ots$,
  $ots$retention-midrate-2026$ots$,
  $ots$Retention tips for mid-rate servers in 2026$ots$,
  $ots$AnkrahmunMap$ots$,
  $ots$What keeps players past week two on mid-rate (XP 20-50x) without a donation treadmill?

Things that worked for us: weekly mini-raids, transparent ban logs, and a public roadmap board.$ots$,
  false,
  873,
  $ots$[{"author":"MagicWall","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GuildHall","body":"We hit the same issue after a module update."},{"author":"NPCWhisper","body":"Can you paste the exact engine commit hash?"},{"author":"AxeOfCarving","body":"Try a clean OTC profile before changing server code."},{"author":"Mapwright","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$ot-discussion$ots$,
  $ots$economy-sinks$ots$,
  $ots$Economy sinks that do not feel punitive$ots$,
  $ots$MagicWall$ots$,
  $ots$Imbuements + hirelings helped, but gold still inflates. Looking for sinks players opt into (cosmetics, house upgrades) rather than repair taxes.$ots$,
  false,
  870,
  $ots$[{"author":"WarBanner","body":"Include license and engine version in the top post."},{"author":"CritChance","body":"I can test this on a staging host this weekend."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$downloads$ots$,
  $ots$datapack-release-checklist$ots$,
  $ots$Release checklist before posting a datapack$ots$,
  $ots$WarBanner$ots$,
  $ots$When posting downloads, include:
- Engine compatibility
- Client version
- License
- Known broken quests
- Fresh vs migration install notes$ots$,
  true,
  867,
  $ots$[{"author":"WarBanner","body":"Include license and engine version in the top post."},{"author":"CritChance","body":"I can test this on a staging host this weekend."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$datapacks$ots$,
  $ots$datapack-860-npc-fix$ots$,
  $ots$Clean 8.60 datapack with fixed NPC destinations$ots$,
  $ots$SkillTrainer$ots$,
  $ots$Sharing a cleaned 8.60 datapack branch focused on NPC destination bugs and missing door actions. No custom map. MIT license.$ots$,
  false,
  864,
  $ots$[{"author":"SpawnEditor","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"RingOfHealing","body":"Public ban appeals matter more than people admit."},{"author":"CanaryPatch","body":"Avoid hidden pay walls on core progression."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$datapacks$ots$,
  $ots$datapack-13x-wheel$ots$,
  $ots$13.x canary datapack notes: fatigue + wheel$ots$,
  $ots$ScrollForge$ots$,
  $ots$Notes from integrating wheel of destiny tables into a Canary datapack. Watch for missing player_wheeldata migrations on older schemas.$ots$,
  false,
  861,
  $ots$[{"author":"AxeOfCarving","body":"I can take a look if you post a minimal repro."},{"author":"Mapwright","body":"We solved similar with a debounce on the store button."},{"author":"KazordoonKit","body":"Idempotency keys are the way."},{"author":"LibertyBayOps","body":"I can take a look if you post a minimal repro."},{"author":"OramondScript","body":"We solved similar with a debounce on the store button."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$distributions$ots$,
  $ots$canary-base-aac$ots$,
  $ots$Looking for a stable Canary base with AAC hooks$ots$,
  $ots$DarashiaDev$ots$,
  $ots$Evaluating distributions that expose clean HTTP hooks for shop delivery. Prefer fewer custom C++ forks and more Lua.$ots$,
  false,
  858,
  $ots$[{"author":"AxeOfCarving","body":"I can take a look if you post a minimal repro."},{"author":"Mapwright","body":"We solved similar with a debounce on the store button."},{"author":"KazordoonKit","body":"Idempotency keys are the way."},{"author":"LibertyBayOps","body":"I can take a look if you post a minimal repro."},{"author":"OramondScript","body":"We solved similar with a debounce on the store button."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$distributions$ots$,
  $ots$fork-spells-maintain$ots$,
  $ots$Fork comparison: custom spells vs maintainability$ots$,
  $ots$OramondScript$ots$,
  $ots$We added 40 custom spells in C++ last year and regret merge pain. Planning to move formulas to Lua. Anyone done that migration mid-season?$ots$,
  false,
  855,
  $ots$[{"author":"ScrollForge","body":"Dzieki za info."},{"author":"CarlinRelay","body":"U nas pomogla zmiana kolejnosci skryptow."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$maps$ots$,
  $ots$rme-ground-borders$ots$,
  $ots$RME tip: validate ground borders before spawn pass$ots$,
  $ots$FireBombOps$ots$,
  $ots$Border pass before spawns saved us days. Also export a walkability heat dump for pathfinding dead ends.$ots$,
  false,
  852,
  $ots$[{"author":"ScrollForge","body":"Dzieki za info."},{"author":"CarlinRelay","body":"U nas pomogla zmiana kolejnosci skryptow."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$maps$ots$,
  $ots$starter-island-size$ots$,
  $ots$Custom starter island size guidelines$ots$,
  $ots$SpawnEditor$ots$,
  $ots$What tile footprint feels right for a custom Rook alternative without making early game a commute?$ots$,
  false,
  849,
  $ots$[{"author":"DarashiaDev","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"AnkrahmunMap","body":"Consider reducing raid write frequency."},{"author":"DepotSorter","body":"Async queue for death logs helped our high-rate realm."},{"author":"UHSupply","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tools$ots$,
  $ots$otbm-diff-wishlist$ots$,
  $ots$OTBM diff tool wishlist$ots$,
  $ots$AxeOfCarving$ots$,
  $ots$Want a CLI that diffs two OTBMs and prints changed house IDs + spawn nodes. Does anything mature exist beyond ad-hoc scripts?$ots$,
  false,
  846,
  $ots$[{"author":"DarashiaDev","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"AnkrahmunMap","body":"Consider reducing raid write frequency."},{"author":"DepotSorter","body":"Async queue for death logs helped our high-rate realm."},{"author":"UHSupply","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$website-apps$ots$,
  $ots$myaac-shop-race$ots$,
  $ots$MyAAC shop delivery race condition$ots$,
  $ots$BoneAltar$ots$,
  $ots$Double-click on store purchase delivered twice. Added idempotency keys on delivery queue. Curious if others see this on PHP-FPM workers.$ots$,
  false,
  843,
  $ots$[{"author":"LibertyBayOps","body":"Include license and engine version in the top post."},{"author":"OramondScript","body":"I can test this on a staging host this weekend."},{"author":"MagicWall","body":"Does it support fresh installs only?"},{"author":"GuildHall","body":"Include license and engine version in the top post."},{"author":"NPCWhisper","body":"I can test this on a staging host this weekend."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$website-apps$ots$,
  $ots$next-launcher-status$ots$,
  $ots$Next.js launcher status page pattern$ots$,
  $ots$LibertyBayOps$ots$,
  $ots$Using a public JSON status endpoint + Next.js edge cache. Keep TTL short (15s) or players see stale online counts.$ots$,
  false,
  840,
  $ots$[{"author":"QuestLedger","body":"Screenshots would help a lot."},{"author":"FireBombOps","body":"The lighting on the left reads clearer."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$revscripts$ots$,
  $ots$revscript-shop-stock$ots$,
  $ots$Revscript shop NPC with stock limits$ots$,
  $ots$QuestLedger$ots$,
  $ots$RevScript shop that tracks daily stock in KV. Includes example for potions and runes. Compatible with recent Canary Lua API.$ots$,
  false,
  837,
  $ots$[{"author":"QuestLedger","body":"Screenshots would help a lot."},{"author":"FireBombOps","body":"The lighting on the left reads clearer."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$revscripts$ots$,
  $ots$revscript-offline-training$ots$,
  $ots$Offline training RevScript caveats$ots$,
  $ots$SoftBootsLab$ots$,
  $ots$Offline training ticks were double-applying after crash recovery. Guard with a last_tick timestamp in player storage.$ots$,
  false,
  834,
  $ots$[{"author":"UHSupply","body":"Interessante abordagem."},{"author":"AntiCheatOwl","body":"Tambem vimos isso no nosso host."},{"author":"HouseBroker","body":"Vale documentar a versao do client."},{"author":"LuaNest","body":"Interessante abordagem."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$cpp-patches$ots$,
  $ots$cpp-rate-limit-talk$ots$,
  $ots$Patch idea: rate-limit talkactions globally$ots$,
  $ots$NPCWhisper$ots$,
  $ots$Draft C++ patch outline for global talkaction rate limits. Looking for review on lock scope before we open a PR on our fork.$ots$,
  false,
  831,
  $ots$[{"author":"UHSupply","body":"Interessante abordagem."},{"author":"AntiCheatOwl","body":"Tambem vimos isso no nosso host."},{"author":"HouseBroker","body":"Vale documentar a versao do client."},{"author":"LuaNest","body":"Interessante abordagem."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$cpp-patches$ots$,
  $ots$cpp-combat-despawn$ots$,
  $ots$Crash in combat when target despawns mid-hit$ots$,
  $ots$RookGuard$ots$,
  $ots$Stacktrace points to creature combat callback after despawn. Anyone shipping a null guard earlier in the pipeline?$ots$,
  false,
  828,
  $ots$[{"author":"RateTuner","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"SkillTrainer","body":"We hit the same issue after a module update."},{"author":"RookGuard","body":"Can you paste the exact engine commit hash?"},{"author":"ThaisWire","body":"Try a clean OTC profile before changing server code."},{"author":"SvargrondBit","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GreyIsland","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$actions-events$ots$,
  $ots$actionid-conventions$ots$,
  $ots$ActionID conventions that scale$ots$,
  $ots$VenoreOps$ots$,
  $ots$We reserve ranges: 1000-1999 doors, 2000-2999 quests, 3000-3999 unique levers. Curious how other teams avoid collisions.$ots$,
  false,
  825,
  $ots$[{"author":"RateTuner","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"SkillTrainer","body":"We hit the same issue after a module update."},{"author":"RookGuard","body":"Can you paste the exact engine commit hash?"},{"author":"ThaisWire","body":"Try a clean OTC profile before changing server code."},{"author":"SvargrondBit","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GreyIsland","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$monsters-npcs-raids$ots$,
  $ots$raid-stagger-waves$ots$,
  $ots$Raid XML: staggered waves without stampede$ots$,
  $ots$PortHopeLua$ots$,
  $ots$Staggering raid waves by 20-30s kept the city usable. Sharing spawn density numbers for dragons vs hydras.$ots$,
  false,
  822,
  $ots$[{"author":"CritChance","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"RuneCartographer","body":"Consider reducing raid write frequency."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$mods-lua$ots$,
  $ots$mod-loader-order$ots$,
  $ots$Mod loader order bugs$ots$,
  $ots$ImbuementLab$ots$,
  $ots$Two mods both hooked onLogin; order depended on filesystem. Fixed with explicit priority field.$ots$,
  false,
  819,
  $ots$[{"author":"RingOfHealing","body":"Include license and engine version in the top post."},{"author":"CanaryPatch","body":"I can test this on a staging host this weekend."},{"author":"VenoreOps","body":"Does it support fresh installs only?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$globalevents-spells$ots$,
  $ots$globalevent-save$ots$,
  $ots$GlobalEvent save interval vs player experience$ots$,
  $ots$GuildHall$ots$,
  $ots$Saving every 5 minutes caused hitch under 800 players. Moved to dirty-flag saves for combat-active players only.$ots$,
  false,
  816,
  $ots$[{"author":"LuaNest","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"BoneAltar","body":"Public ban appeals matter more than people admit."},{"author":"DarashiaDev","body":"Avoid hidden pay walls on core progression."},{"author":"AnkrahmunMap","body":"Mid-rate retention is mostly trust + content cadence for us."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$otclient-resources$ots$,
  $ots$otc-battle-filters$ots$,
  $ots$OTC module: compact battle list filters$ots$,
  $ots$HouseBroker$ots$,
  $ots$Module adds predator/skull filters to battle list. Tested on OTCv8. Feedback on mobile layouts welcome.$ots$,
  false,
  813,
  $ots$[{"author":"Mapwright","body":"Screenshots would help a lot."},{"author":"KazordoonKit","body":"The lighting on the left reads clearer."},{"author":"LibertyBayOps","body":"Watch walkability near the cliffs."},{"author":"OramondScript","body":"Screenshots would help a lot."},{"author":"MagicWall","body":"The lighting on the left reads clearer."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials$ots$,
  $ots$how-to-write-tutorials$ots$,
  $ots$How to write a useful OT tutorial$ots$,
  $ots$CanaryPatch$ots$,
  $ots$Good tutorials state engine version, show exact file paths, and include a verify it worked section.$ots$,
  true,
  810,
  $ots$[{"author":"ThaisWire","body":"I can take a look if you post a minimal repro."},{"author":"SvargrondBit","body":"We solved similar with a debounce on the store button."},{"author":"GreyIsland","body":"Idempotency keys are the way."},{"author":"ImbuementLab","body":"I can take a look if you post a minimal repro."},{"author":"ManaShield","body":"We solved similar with a debounce on the store button."},{"author":"RateTuner","body":"Idempotency keys are the way."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials-basic$ots$,
  $ots$ubuntu-2404-first-boot$ots$,
  $ots$First server boot on Ubuntu 24.04$ots$,
  $ots$CarlinRelay$ots$,
  $ots$Checklist: deps, cmake notes, config.lua bind address, firewall, and a smoke test with a local OTC.$ots$,
  false,
  807,
  $ots$[{"author":"CarlinRelay","body":"Interessante abordagem."},{"author":"PortHopeLua","body":"Tambem vimos isso no nosso host."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials-basic$ots$,
  $ots$windows-dev-loop$ots$,
  $ots$Windows dev loop without pain$ots$,
  $ots$YalaharModule$ots$,
  $ots$Using WSL2 for the server and OTC on Windows host. Shared folder pitfalls included.$ots$,
  false,
  804,
  $ots$[{"author":"AnkrahmunMap","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"DepotSorter","body":"We hit the same issue after a module update."},{"author":"UHSupply","body":"Can you paste the exact engine commit hash?"},{"author":"AntiCheatOwl","body":"Try a clean OTC profile before changing server code."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials-programming$ots$,
  $ots$lua-quest-chains$ots$,
  $ots$Lua patterns for maintainable quest chains$ots$,
  $ots$MagicWall$ots$,
  $ots$Prefer data-driven step tables over nested ifs. Example structure inside.$ots$,
  false,
  801,
  $ots$[{"author":"AnkrahmunMap","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"DepotSorter","body":"We hit the same issue after a module update."},{"author":"UHSupply","body":"Can you paste the exact engine commit hash?"},{"author":"AntiCheatOwl","body":"Try a clean OTC profile before changing server code."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials-os$ots$,
  $ots$systemd-tfs-restart$ots$,
  $ots$systemd unit for TFS with restart limits$ots$,
  $ots$AntiCheatOwl$ots$,
  $ots$Unit file tips: Restart=on-failure, limit bursts, and journald rate limits so crash loops do not fill disks.$ots$,
  false,
  798,
  $ots$[{"author":"OramondScript","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"MagicWall","body":"Consider reducing raid write frequency."},{"author":"GuildHall","body":"Async queue for death logs helped our high-rate realm."},{"author":"NPCWhisper","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"AxeOfCarving","body":"Consider reducing raid write frequency."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials-mapping$ots$,
  $ots$rme-spawn-brush$ots$,
  $ots$Spawn brush workflow in RME$ots$,
  $ots$RingOfHealing$ots$,
  $ots$Brush densities and zone tags we use for cities vs hunting.$ots$,
  false,
  795,
  $ots$[{"author":"ImbuementLab","body":"Include license and engine version in the top post."},{"author":"ManaShield","body":"I can test this on a staging host this weekend."},{"author":"RateTuner","body":"Does it support fresh installs only?"},{"author":"SkillTrainer","body":"Include license and engine version in the top post."},{"author":"RookGuard","body":"I can test this on a staging host this weekend."},{"author":"ThaisWire","body":"Does it support fresh installs only?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$mapping-showcase$ots$,
  $ots$showcase-desert-outpost$ots$,
  $ots$Show: desert outpost with vertical cliffs$ots$,
  $ots$ScrollForge$ots$,
  $ots$Sandstone cliffs, rope spots, and a small depot. Looking for feedback on climb readability.$ots$,
  false,
  792,
  $ots$[{"author":"FireBombOps","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"WarBanner","body":"Public ban appeals matter more than people admit."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$mapping-contests$ots$,
  $ots$contest-50x50-puzzle$ots$,
  $ots$Mini contest idea: 50x50 themed puzzle room$ots$,
  $ots$SvargrondBit$ots$,
  $ots$Proposal for a short mapping contest. Theme: puzzle room. Judging: clarity, fairness, aesthetics.$ots$,
  false,
  789,
  $ots$[{"author":"SoftBootsLab","body":"Screenshots would help a lot."},{"author":"SpawnEditor","body":"The lighting on the left reads clearer."},{"author":"RingOfHealing","body":"Watch walkability near the cliffs."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$spriting-showcase$ots$,
  $ots$sprite-cartographer-outfit$ots$,
  $ots$Outfit: field cartographer set$ots$,
  $ots$OramondScript$ots$,
  $ots$WIP outfit frames for a cartographer theme. Looking for silhouette feedback at 32x32.$ots$,
  false,
  786,
  $ots$[{"author":"AntiCheatOwl","body":"I can take a look if you post a minimal repro."},{"author":"HouseBroker","body":"We solved similar with a debounce on the store button."},{"author":"LuaNest","body":"Idempotency keys are the way."},{"author":"BoneAltar","body":"I can take a look if you post a minimal repro."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$server-gala$ots$,
  $ots$gala-astra-veil$ots$,
  $ots$Astra Veil - 8.60 mid-rate - soft launch Friday$ots$,
  $ots$UHSupply$ots$,
  $ots$Fictional listing for format example.
Name: Astra Veil
Client: 8.60
XP: 30x | Skills: 12x | Loot: 2x
Location: EU
Anti-cheat: dual client checks + staff review
Looking for testers on quests 1-20.$ots$,
  false,
  783,
  $ots$[{"author":"NPCWhisper","body":"Interessante abordagem."},{"author":"AxeOfCarving","body":"Tambem vimos isso no nosso host."},{"author":"Mapwright","body":"Vale documentar a versao do client."},{"author":"KazordoonKit","body":"Interessante abordagem."},{"author":"LibertyBayOps","body":"Tambem vimos isso no nosso host."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$server-gala$ots$,
  $ots$gala-northmere$ots$,
  $ots$Northmere RL map - long-term - NA$ots$,
  $ots$NPCWhisper$ots$,
  $ots$Fictional NA long-term project. Focus on stable economy and public ban appeals. Not pay-to-win gear.$ots$,
  false,
  780,
  $ots$[{"author":"RuneCartographer","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"ScrollForge","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$test-server-gala$ots$,
  $ots$test-spell-balance$ots$,
  $ots$Public QA: spell balance weekend$ots$,
  $ots$RuneCartographer$ots$,
  $ots$Test realm open this weekend for spell DPS logs. Bring spreadsheets.$ots$,
  false,
  777,
  $ots$[{"author":"RuneCartographer","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"ScrollForge","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$jobs$ots$,
  $ots$job-mapper-starter$ots$,
  $ots$Hiring: mapper for custom starter area (paid)$ots$,
  $ots$ThaisWire$ots$,
  $ots$Looking for a mapper comfortable with RME and documentation. Paid milestone contract. Portfolio required.$ots$,
  false,
  774,
  $ots$[{"author":"CanaryPatch","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"VenoreOps","body":"Consider reducing raid write frequency."},{"author":"EdronForge","body":"Async queue for death logs helped our high-rate realm."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$jobs$ots$,
  $ots$job-lua-house-auctions$ots$,
  $ots$Collab: Lua scripter for house auctions$ots$,
  $ots$PortHopeLua$ots$,
  $ots$Need help finishing house auction edge cases (guild bids, abandonment). Equity or paid - say your preference.$ots$,
  false,
  771,
  $ots$[{"author":"KazordoonKit","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"LibertyBayOps","body":"Public ban appeals matter more than people admit."},{"author":"OramondScript","body":"Avoid hidden pay walls on core progression."},{"author":"MagicWall","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"GuildHall","body":"Public ban appeals matter more than people admit."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tfs-development$ots$,
  $ots$tfs-combat-pipeline$ots$,
  $ots$Discussion: decluttering combat pipeline$ots$,
  $ots$DepotSorter$ots$,
  $ots$Design discussion: reducing branches in combat for readability without killing performance.$ots$,
  false,
  768,
  $ots$[{"author":"KazordoonKit","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"LibertyBayOps","body":"Public ban appeals matter more than people admit."},{"author":"OramondScript","body":"Avoid hidden pay walls on core progression."},{"author":"MagicWall","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"GuildHall","body":"Public ban appeals matter more than people admit."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$otclient-dev$ots$,
  $ots$otc-input-latency$ots$,
  $ots$OTC: input latency on high refresh monitors$ots$,
  $ots$SoftBootsLab$ots$,
  $ots$Noticing extra input lag on 240Hz. Anyone profiling the event loop vs vsync settings?$ots$,
  false,
  765,
  $ots$[{"author":"SvargrondBit","body":"Screenshots would help a lot."},{"author":"GreyIsland","body":"The lighting on the left reads clearer."},{"author":"ImbuementLab","body":"Watch walkability near the cliffs."},{"author":"ManaShield","body":"Screenshots would help a lot."},{"author":"RateTuner","body":"The lighting on the left reads clearer."},{"author":"SkillTrainer","body":"Watch walkability near the cliffs."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$chit-chat$ots$,
  $ots$chitchat-proud-month$ots$,
  $ots$What OT project are you proud of this month?$ots$,
  $ots$CritChance$ots$,
  $ots$Wins thread. Share a small victory - fixed a crash, finished a quest, shipped a module.$ots$,
  false,
  762,
  $ots$[{"author":"PortHopeLua","body":"I can take a look if you post a minimal repro."},{"author":"QuestLedger","body":"We solved similar with a debounce on the store button."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$forum-games$ots$,
  $ots$game-word-depot$ots$,
  $ots$Word association: start with depot$ots$,
  $ots$RookGuard$ots$,
  $ots$Forum game: reply with the first OT-related word you think of, then the next person continues.$ots$,
  false,
  759,
  $ots$[{"author":"YalaharModule","body":"Interessante abordagem."},{"author":"ExivaPing","body":"Tambem vimos isso no nosso host."},{"author":"SoftBootsLab","body":"Vale documentar a versao do client."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tibia-official$ots$,
  $ots$retail-vs-ot-parity$ots$,
  $ots$Retail patch observations vs OT feature parity$ots$,
  $ots$KazordoonKit$ots$,
  $ots$High-level comparison of recent retail quality-of-life vs what OT servers commonly implement.$ots$,
  false,
  756,
  $ots$[{"author":"DepotSorter","body":"Dzieki za info."},{"author":"UHSupply","body":"U nas pomogla zmiana kolejnosci skryptow."},{"author":"AntiCheatOwl","body":"Mozesz wrzucic log z konsoli?"},{"author":"HouseBroker","body":"Dzieki za info."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$multimedia$ots$,
  $ots$multimedia-mapping-playlist$ots$,
  $ots$Ambient playlist for mapping sessions$ots$,
  $ots$AnkrahmunMap$ots$,
  $ots$Share instrumental playlists that help with long RME sessions.$ots$,
  false,
  753,
  $ots$[{"author":"MagicWall","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GuildHall","body":"We hit the same issue after a module update."},{"author":"NPCWhisper","body":"Can you paste the exact engine commit hash?"},{"author":"AxeOfCarving","body":"Try a clean OTC profile before changing server code."},{"author":"Mapwright","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$small-art$ots$,
  $ots$small-art-craft-icons$ots$,
  $ots$Icon set: craft skills$ots$,
  $ots$ExivaPing$ots$,
  $ots$16x16 craft icons. Looking for contrast feedback on dark UI themes.$ots$,
  false,
  750,
  $ots$[{"author":"ManaShield","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"RateTuner","body":"Consider reducing raid write frequency."},{"author":"SkillTrainer","body":"Async queue for death logs helped our high-rate realm."},{"author":"RookGuard","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"ThaisWire","body":"Consider reducing raid write frequency."},{"author":"SvargrondBit","body":"Async queue for death logs helped our high-rate realm."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$large-art$ots$,
  $ots$large-art-launch-banner$ots$,
  $ots$Banner draft for server launch$ots$,
  $ots$WarBanner$ots$,
  $ots$Composition critique wanted: character silhouette vs readable title.$ots$,
  false,
  747,
  $ots$[{"author":"WarBanner","body":"Include license and engine version in the top post."},{"author":"CritChance","body":"I can test this on a staging host this weekend."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$screenshots$ots$,
  $ots$ss-boss-lighting$ots$,
  $ots$Boss room before/after lighting$ots$,
  $ots$SkillTrainer$ots$,
  $ots$Same room, different light radii. Which reads better for telegraphs?$ots$,
  false,
  744,
  $ots$[{"author":"SpawnEditor","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"RingOfHealing","body":"Public ban appeals matter more than people admit."},{"author":"CanaryPatch","body":"Avoid hidden pay walls on core progression."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$technology$ots$,
  $ots$tech-postgres-mysql$ots$,
  $ots$Postgres vs MySQL for OT in 2026$ots$,
  $ots$Mapwright$ots$,
  $ots$Operational tradeoffs for backups, replication, and extension ecosystem when hosting OT.$ots$,
  false,
  741,
  $ots$[{"author":"HouseBroker","body":"Screenshots would help a lot."},{"author":"LuaNest","body":"The lighting on the left reads clearer."},{"author":"BoneAltar","body":"Watch walkability near the cliffs."},{"author":"DarashiaDev","body":"Screenshots would help a lot."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$design$ots$,
  $ots$design-directory-density$ots$,
  $ots$Directory card UI density$ots$,
  $ots$DarashiaDev$ots$,
  $ots$How much metadata should a server card show before it feels noisy?$ots$,
  false,
  738,
  $ots$[{"author":"AxeOfCarving","body":"I can take a look if you post a minimal repro."},{"author":"Mapwright","body":"We solved similar with a debounce on the store button."},{"author":"KazordoonKit","body":"Idempotency keys are the way."},{"author":"LibertyBayOps","body":"I can take a look if you post a minimal repro."},{"author":"OramondScript","body":"We solved similar with a debounce on the store button."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$design-requests$ots$,
  $ots$design-req-harborlight$ots$,
  $ots$Request: simple logo for Harborlight OT$ots$,
  $ots$YalaharModule$ots$,
  $ots$Fictional server name for practice. Want a lighthouse motif without copying official art.$ots$,
  false,
  735,
  $ots$[{"author":"RookGuard","body":"Interessante abordagem."},{"author":"ThaisWire","body":"Tambem vimos isso no nosso host."},{"author":"SvargrondBit","body":"Vale documentar a versao do client."},{"author":"GreyIsland","body":"Interessante abordagem."},{"author":"ImbuementLab","body":"Tambem vimos isso no nosso host."},{"author":"ManaShield","body":"Vale documentar a versao do client."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$programming-general$ots$,
  $ots$prog-lua-microopt$ots$,
  $ots$When to stop micro-optimizing Lua$ots$,
  $ots$FireBombOps$ots$,
  $ots$Rule of thumb: profile first. Sharing a case where table reuse mattered and one where it did not.$ots$,
  false,
  732,
  $ots$[{"author":"ScrollForge","body":"Dzieki za info."},{"author":"CarlinRelay","body":"U nas pomogla zmiana kolejnosci skryptow."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$programming-requests$ots$,
  $ots$prog-req-queue-worker$ots$,
  $ots$Request: review a queue worker design$ots$,
  $ots$RateTuner$ots$,
  $ots$Design review please: Redis queue for shop deliveries with at-least-once semantics.$ots$,
  false,
  729,
  $ots$[{"author":"VenoreOps","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"EdronForge","body":"We hit the same issue after a module update."},{"author":"YalaharModule","body":"Can you paste the exact engine commit hash?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$web-development$ots$,
  $ots$web-auth-supabase$ots$,
  $ots$Auth session cookies on Next.js + Supabase$ots$,
  $ots$AxeOfCarving$ots$,
  $ots$Patterns for SSR session refresh without flicker on a directory site.$ots$,
  false,
  726,
  $ots$[{"author":"DarashiaDev","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"AnkrahmunMap","body":"Consider reducing raid write frequency."},{"author":"DepotSorter","body":"Async queue for death logs helped our high-rate realm."},{"author":"UHSupply","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$webdev-requests$ots$,
  $ots$webdev-req-rls$ots$,
  $ots$Request: help with RLS policies for listings$ots$,
  $ots$BoneAltar$ots$,
  $ots$Want owners to edit own listings only. Draft policies in comments if you have battle-tested SQL.$ots$,
  false,
  723,
  $ots$[{"author":"LibertyBayOps","body":"Include license and engine version in the top post."},{"author":"OramondScript","body":"I can test this on a staging host this weekend."},{"author":"MagicWall","body":"Does it support fresh installs only?"},{"author":"GuildHall","body":"Include license and engine version in the top post."},{"author":"NPCWhisper","body":"I can test this on a staging host this weekend."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$games$ots$,
  $ots$games-non-ot$ots$,
  $ots$What non-OT games is the community playing?$ots$,
  $ots$EdronForge$ots$,
  $ots$Off-topic games thread.$ots$,
  false,
  720,
  $ots$[{"author":"GreyIsland","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"ImbuementLab","body":"Public ban appeals matter more than people admit."},{"author":"ManaShield","body":"Avoid hidden pay walls on core progression."},{"author":"RateTuner","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"SkillTrainer","body":"Public ban appeals matter more than people admit."},{"author":"RookGuard","body":"Avoid hidden pay walls on core progression."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$league-of-legends$ots$,
  $ots$lol-clash-night$ots$,
  $ots$OT community Clash night?$ots$,
  $ots$QuestLedger$ots$,
  $ots$Gauge interest for a casual Clash night among OT folks.$ots$,
  false,
  717,
  $ots$[{"author":"QuestLedger","body":"Screenshots would help a lot."},{"author":"FireBombOps","body":"The lighting on the left reads clearer."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$native-chatboards$ots$,
  $ots$native-rooms-guide$ots$,
  $ots$Language rooms guide$ots$,
  $ots$ManaShield$ots$,
  $ots$Use the language boards for discussion in your preferred language. Keep spam and ads out.$ots$,
  true,
  714,
  $ots$[{"author":"ExivaPing","body":"I can take a look if you post a minimal repro."},{"author":"SoftBootsLab","body":"We solved similar with a debounce on the store button."},{"author":"SpawnEditor","body":"Idempotency keys are the way."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-swedish$ots$,
  $ots$lang-se-intro$ots$,
  $ots$Hej! Presentera ditt OT-projekt$ots$,
  $ots$NPCWhisper$ots$,
  $ots$Beratta kort om projektet du jobbar pa och vilken motor ni anvander.$ots$,
  false,
  711,
  $ots$[{"author":"UHSupply","body":"Interessante abordagem."},{"author":"AntiCheatOwl","body":"Tambem vimos isso no nosso host."},{"author":"HouseBroker","body":"Vale documentar a versao do client."},{"author":"LuaNest","body":"Interessante abordagem."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-dutch$ots$,
  $ots$lang-nl-hosting$ots$,
  $ots$NL: server hosting tips binnen EU$ots$,
  $ots$LuaNest$ots$,
  $ots$Ervaringen met EU VPS providers voor OT (latency + DDoS). Geen affiliate spam.$ots$,
  false,
  708,
  $ots$[{"author":"GuildHall","body":"Dzieki za info."},{"author":"NPCWhisper","body":"U nas pomogla zmiana kolejnosci skryptow."},{"author":"AxeOfCarving","body":"Mozesz wrzucic log z konsoli?"},{"author":"Mapwright","body":"Dzieki za info."},{"author":"KazordoonKit","body":"U nas pomogla zmiana kolejnosci skryptow."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-portuguese$ots$,
  $ots$lang-pt-checklist$ots$,
  $ots$PT: checklist de abertura de servidor$ots$,
  $ots$VenoreOps$ots$,
  $ots$Lista pratica: backup, anti-cheat basico, regras publicas, e canal de suporte.$ots$,
  false,
  705,
  $ots$[{"author":"RateTuner","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"SkillTrainer","body":"We hit the same issue after a module update."},{"author":"RookGuard","body":"Can you paste the exact engine commit hash?"},{"author":"ThaisWire","body":"Try a clean OTC profile before changing server code."},{"author":"SvargrondBit","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"GreyIsland","body":"We hit the same issue after a module update."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-polish$ots$,
  $ots$lang-pl-balance$ots$,
  $ots$PL: dyskusja o balansie custom itemow$ots$,
  $ots$PortHopeLua$ots$,
  $ots$Jak testujecie itemy custom zanim wejda na produkuje?$ots$,
  false,
  702,
  $ots$[{"author":"CritChance","body":"We used a composite index on (player_id, time) and deadlocks dropped a lot."},{"author":"RuneCartographer","body":"Consider reducing raid write frequency."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-polish-support$ots$,
  $ots$lang-pl-otc-login$ots$,
  $ots$PL support: blad logowania OTC$ots$,
  $ots$ImbuementLab$ots$,
  $ots$Po aktualizacji modulow OTC logowanie spada na protocol error. Macie zestawienie wersji?$ots$,
  false,
  699,
  $ots$[{"author":"RingOfHealing","body":"Include license and engine version in the top post."},{"author":"CanaryPatch","body":"I can test this on a staging host this weekend."},{"author":"VenoreOps","body":"Does it support fresh installs only?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-spanish$ots$,
  $ots$lang-es-ads$ots$,
  $ots$ES: buenas practicas para anuncios de server$ots$,
  $ots$GuildHall$ots$,
  $ots$Que informacion minima debe tener un anuncio: rates, ubicacion, reglas, anti-abuso.$ots$,
  false,
  696,
  $ots$[{"author":"LuaNest","body":"Mid-rate retention is mostly trust + content cadence for us."},{"author":"BoneAltar","body":"Public ban appeals matter more than people admit."},{"author":"DarashiaDev","body":"Avoid hidden pay walls on core progression."},{"author":"AnkrahmunMap","body":"Mid-rate retention is mostly trust + content cadence for us."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$lang-german$ots$,
  $ots$lang-de-perf$ots$,
  $ots$DE: Performance-Tuning bei 500+ Spielern$ots$,
  $ots$HouseBroker$ots$,
  $ots$Welche Metriken schaut ihr zuerst: SQL slow query, Lua profiling, oder network?$ots$,
  false,
  693,
  $ots$[{"author":"Mapwright","body":"Screenshots would help a lot."},{"author":"KazordoonKit","body":"The lighting on the left reads clearer."},{"author":"LibertyBayOps","body":"Watch walkability near the cliffs."},{"author":"OramondScript","body":"Screenshots would help a lot."},{"author":"MagicWall","body":"The lighting on the left reads clearer."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$directory-discussion$ots$,
  $ots$directory-trust$ots$,
  $ots$What makes a trustworthy listing?$ots$,
  $ots$CanaryPatch$ots$,
  $ots$Vote: uptime history, owner verification, public rules, or peak players? Rank what you check first.$ots$,
  false,
  690,
  $ots$[{"author":"ThaisWire","body":"I can take a look if you post a minimal repro."},{"author":"SvargrondBit","body":"We solved similar with a debounce on the store button."},{"author":"GreyIsland","body":"Idempotency keys are the way."},{"author":"ImbuementLab","body":"I can take a look if you post a minimal repro."},{"author":"ManaShield","body":"We solved similar with a debounce on the store button."},{"author":"RateTuner","body":"Idempotency keys are the way."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$directory-discussion$ots$,
  $ots$directory-filters$ots$,
  $ots$Filters you want on the directory$ots$,
  $ots$DarashiaDev$ots$,
  $ots$Client version + region + monetization model seem basic. What else is high signal?$ots$,
  false,
  687,
  $ots$[{"author":"EdronForge","body":"Dzieki za info."},{"author":"YalaharModule","body":"U nas pomogla zmiana kolejnosci skryptow."},{"author":"ExivaPing","body":"Mozesz wrzucic log z konsoli?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$directory-reports$ots$,
  $ots$directory-how-to-report$ots$,
  $ots$How to file a listing report$ots$,
  $ots$GreyIsland$ots$,
  $ots$Include listing URL/slug, what is wrong, and evidence. Do not post player personal data.$ots$,
  true,
  684,
  $ots$[{"author":"EdronForge","body":"Dzieki za info."},{"author":"YalaharModule","body":"U nas pomogla zmiana kolejnosci skryptow."},{"author":"ExivaPing","body":"Mozesz wrzucic log z konsoli?"}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$site-feedback$ots$,
  $ots$feedback-topic-view$ots$,
  $ots$Forum topic view: what is missing?$ots$,
  $ots$MagicWall$ots$,
  $ots$Reply with UX nits: pagination, quote button, markdown, etc.$ots$,
  false,
  681,
  $ots$[{"author":"AnkrahmunMap","body":"Thanks for posting this - matching client/server protocol builds fixed it for us."},{"author":"DepotSorter","body":"We hit the same issue after a module update."},{"author":"UHSupply","body":"Can you paste the exact engine commit hash?"},{"author":"AntiCheatOwl","body":"Try a clean OTC profile before changing server code."}]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$site-feedback$ots$,
  $ots$feedback-submit-server$ots$,
  $ots$Submit server flow feedback$ots$,
  $ots$RateTuner$ots$,
  $ots$We are tightening reachability checks. Tell us what confused you on submit.$ots$,
  false,
  678,
  $ots$[{"author":"ImbuementLab","body":"Include license and engine version in the top post."},{"author":"ManaShield","body":"I can test this on a staging host this weekend."},{"author":"RateTuner","body":"Does it support fresh installs only?"},{"author":"SkillTrainer","body":"Include license and engine version in the top post."},{"author":"RookGuard","body":"I can test this on a staging host this weekend."},{"author":"ThaisWire","body":"Does it support fresh installs only?"}]$ots$::jsonb
);

DO $do$
DECLARE r record;
BEGIN
  FOR r IN SELECT DISTINCT b.id FROM public.forum_boards b
    INNER JOIN public.forum_topics t ON t.board_id = b.id
  LOOP
    BEGIN
      PERFORM public.refresh_forum_board_stats(r.id);
    EXCEPTION WHEN OTHERS THEN
      NULL;
    END;
  END LOOP;
END
$do$;

SELECT
  (SELECT COUNT(*) FROM public.forum_topics WHERE author_name IS NOT NULL) AS seeded_topics,
  (SELECT COUNT(*) FROM public.forum_posts WHERE author_name IS NOT NULL) AS seeded_posts;