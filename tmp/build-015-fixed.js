const fs = require('fs');
const dq = (s) => '$ots$' + String(s).replace(/\$ots\$/g, '') + '$ots$';

const authors = ['RuneCartographer','LuaNest','RookGuard','CanaryPatch','Mapwright','ScrollForge','BoneAltar','ThaisWire','VenoreOps','KazordoonKit','CarlinRelay','DarashiaDev','SvargrondBit','EdronForge','LibertyBayOps','PortHopeLua','AnkrahmunMap','GreyIsland','YalaharModule','OramondScript','QuestLedger','DepotSorter','ImbuementLab','ExivaPing','MagicWall','FireBombOps','UHSupply','ManaShield','SoftBootsLab','GuildHall','WarBanner','AntiCheatOwl','RateTuner','SpawnEditor','NPCWhisper','CritChance','HouseBroker','SkillTrainer','RingOfHealing','AxeOfCarving'];

const boards = {
  'newsroom': [
    ['Welcome to the OpenTibiaServers forum','welcome-ots-forum',true,'This board is for product updates and community announcements about the OpenTibiaServers directory and forum.\n\nHouse rules:\n1) Be specific with versions (TFS/Canary/OTC build).\n2) No account trading.\n3) No harassment.\n4) Server ads belong in Server Gala.'],
    ['September platform notes: forum + directory tabs','sept-platform-notes',true,'Forum is the homepage with a Directory tab for listings.\n\nIf something looks off, reply with browser + URL.\n\nUpcoming: clearer submit-server checks and owner-reported player metrics.']
  ],
  'announcements': [
    ['Forum etiquette and moderation basics','forum-etiquette',true,'Pinned for newcomers.\n\n- Search before posting duplicates.\n- Include OS, engine fork, client, and error text.\n- Spoiler economy exploits.\n- Staff may lock circular threads.'],
    ['Reporting bad directory listings','reporting-listings',false,'If a listing spoofs players online or uses a broken website URL, open a thread in Directory Reports with the listing slug and screenshots.']
  ],
  'support-desk': [
    ['TFS 1.4 protocol mismatch after OTC update','tfs14-protocol-mismatch',false,'After updating OTClient modules, login fails with Protocol mismatch against TFS 1.4.2.\n\nServer shows player connected then removes the connection.\nClient: ERROR ProtocolGame parse message unhandled opcode.\n\nWhich OTC commit pairs cleanly with stock TFS 1.4 protocol?'],
    ['MySQL deadlock on player deaths table','mysql-deadlock-deaths',false,'High rate server: InnoDB deadlock on player_deaths during raids.\nIsolation level is REPEATABLE READ.\nLooking for a safe index strategy or write batching pattern.']
  ],
  'support-requests': [
    ['Need help wiring config.lua market offers','config-market-offers',false,'Market offers appear in DB but not in-game. Canary-based fork. marketOfferDuration is set. Any checklist before I paste full config?'],
    ['Docker compose: game port open but status closed','docker-status-closed',false,'7171/7172 published. Website status checker still shows offline. Host firewall allows TCP. Is the checker probing status protocol or HTTP only?']
  ],
  'ot-discussion': [
    ['Retention tips for mid-rate servers in 2026','retention-midrate-2026',false,'What keeps players past week two on mid-rate (XP 20-50x) without a donation treadmill?\n\nThings that worked for us: weekly mini-raids, transparent ban logs, and a public roadmap board.'],
    ['Economy sinks that do not feel punitive','economy-sinks',false,'Imbuements + hirelings helped, but gold still inflates. Looking for sinks players opt into (cosmetics, house upgrades) rather than repair taxes.']
  ],
  'downloads': [
    ['Release checklist before posting a datapack','datapack-release-checklist',true,'When posting downloads, include:\n- Engine compatibility\n- Client version\n- License\n- Known broken quests\n- Fresh vs migration install notes']
  ],
  'datapacks': [
    ['Clean 8.60 datapack with fixed NPC destinations','datapack-860-npc-fix',false,'Sharing a cleaned 8.60 datapack branch focused on NPC destination bugs and missing door actions. No custom map. MIT license.'],
    ['13.x canary datapack notes: fatigue + wheel','datapack-13x-wheel',false,'Notes from integrating wheel of destiny tables into a Canary datapack. Watch for missing player_wheeldata migrations on older schemas.']
  ],
  'distributions': [
    ['Looking for a stable Canary base with AAC hooks','canary-base-aac',false,'Evaluating distributions that expose clean HTTP hooks for shop delivery. Prefer fewer custom C++ forks and more Lua.'],
    ['Fork comparison: custom spells vs maintainability','fork-spells-maintain',false,'We added 40 custom spells in C++ last year and regret merge pain. Planning to move formulas to Lua. Anyone done that migration mid-season?']
  ],
  'maps': [
    ['RME tip: validate ground borders before spawn pass','rme-ground-borders',false,'Border pass before spawns saved us days. Also export a walkability heat dump for pathfinding dead ends.'],
    ['Custom starter island size guidelines','starter-island-size',false,'What tile footprint feels right for a custom Rook alternative without making early game a commute?']
  ],
  'tools': [
    ['OTBM diff tool wishlist','otbm-diff-wishlist',false,'Want a CLI that diffs two OTBMs and prints changed house IDs + spawn nodes. Does anything mature exist beyond ad-hoc scripts?']
  ],
  'website-apps': [
    ['MyAAC shop delivery race condition','myaac-shop-race',false,'Double-click on store purchase delivered twice. Added idempotency keys on delivery queue. Curious if others see this on PHP-FPM workers.'],
    ['Next.js launcher status page pattern','next-launcher-status',false,'Using a public JSON status endpoint + Next.js edge cache. Keep TTL short (15s) or players see stale online counts.']
  ],
  'revscripts': [
    ['Revscript shop NPC with stock limits','revscript-shop-stock',false,'RevScript shop that tracks daily stock in KV. Includes example for potions and runes. Compatible with recent Canary Lua API.'],
    ['Offline training RevScript caveats','revscript-offline-training',false,'Offline training ticks were double-applying after crash recovery. Guard with a last_tick timestamp in player storage.']
  ],
  'cpp-patches': [
    ['Patch idea: rate-limit talkactions globally','cpp-rate-limit-talk',false,'Draft C++ patch outline for global talkaction rate limits. Looking for review on lock scope before we open a PR on our fork.'],
    ['Crash in combat when target despawns mid-hit','cpp-combat-despawn',false,'Stacktrace points to creature combat callback after despawn. Anyone shipping a null guard earlier in the pipeline?']
  ],
  'actions-events': [
    ['ActionID conventions that scale','actionid-conventions',false,'We reserve ranges: 1000-1999 doors, 2000-2999 quests, 3000-3999 unique levers. Curious how other teams avoid collisions.']
  ],
  'monsters-npcs-raids': [
    ['Raid XML: staggered waves without stampede','raid-stagger-waves',false,'Staggering raid waves by 20-30s kept the city usable. Sharing spawn density numbers for dragons vs hydras.']
  ],
  'mods-lua': [
    ['Mod loader order bugs','mod-loader-order',false,'Two mods both hooked onLogin; order depended on filesystem. Fixed with explicit priority field.']
  ],
  'globalevents-spells': [
    ['GlobalEvent save interval vs player experience','globalevent-save',false,'Saving every 5 minutes caused hitch under 800 players. Moved to dirty-flag saves for combat-active players only.']
  ],
  'otclient-resources': [
    ['OTC module: compact battle list filters','otc-battle-filters',false,'Module adds predator/skull filters to battle list. Tested on OTCv8. Feedback on mobile layouts welcome.']
  ],
  'tutorials': [
    ['How to write a useful OT tutorial','how-to-write-tutorials',true,'Good tutorials state engine version, show exact file paths, and include a verify it worked section.']
  ],
  'tutorials-basic': [
    ['First server boot on Ubuntu 24.04','ubuntu-2404-first-boot',false,'Checklist: deps, cmake notes, config.lua bind address, firewall, and a smoke test with a local OTC.'],
    ['Windows dev loop without pain','windows-dev-loop',false,'Using WSL2 for the server and OTC on Windows host. Shared folder pitfalls included.']
  ],
  'tutorials-programming': [
    ['Lua patterns for maintainable quest chains','lua-quest-chains',false,'Prefer data-driven step tables over nested ifs. Example structure inside.']
  ],
  'tutorials-os': [
    ['systemd unit for TFS with restart limits','systemd-tfs-restart',false,'Unit file tips: Restart=on-failure, limit bursts, and journald rate limits so crash loops do not fill disks.']
  ],
  'tutorials-mapping': [
    ['Spawn brush workflow in RME','rme-spawn-brush',false,'Brush densities and zone tags we use for cities vs hunting.']
  ],
  'mapping-showcase': [
    ['Show: desert outpost with vertical cliffs','showcase-desert-outpost',false,'Sandstone cliffs, rope spots, and a small depot. Looking for feedback on climb readability.']
  ],
  'mapping-contests': [
    ['Mini contest idea: 50x50 themed puzzle room','contest-50x50-puzzle',false,'Proposal for a short mapping contest. Theme: puzzle room. Judging: clarity, fairness, aesthetics.']
  ],
  'spriting-showcase': [
    ['Outfit: field cartographer set','sprite-cartographer-outfit',false,'WIP outfit frames for a cartographer theme. Looking for silhouette feedback at 32x32.']
  ],
  'server-gala': [
    ['Astra Veil - 8.60 mid-rate - soft launch Friday','gala-astra-veil',false,'Fictional listing for format example.\nName: Astra Veil\nClient: 8.60\nXP: 30x | Skills: 12x | Loot: 2x\nLocation: EU\nAnti-cheat: dual client checks + staff review\nLooking for testers on quests 1-20.'],
    ['Northmere RL map - long-term - NA','gala-northmere',false,'Fictional NA long-term project. Focus on stable economy and public ban appeals. Not pay-to-win gear.']
  ],
  'test-server-gala': [
    ['Public QA: spell balance weekend','test-spell-balance',false,'Test realm open this weekend for spell DPS logs. Bring spreadsheets.']
  ],
  'jobs': [
    ['Hiring: mapper for custom starter area (paid)','job-mapper-starter',false,'Looking for a mapper comfortable with RME and documentation. Paid milestone contract. Portfolio required.'],
    ['Collab: Lua scripter for house auctions','job-lua-house-auctions',false,'Need help finishing house auction edge cases (guild bids, abandonment). Equity or paid - say your preference.']
  ],
  'tfs-development': [
    ['Discussion: decluttering combat pipeline','tfs-combat-pipeline',false,'Design discussion: reducing branches in combat for readability without killing performance.']
  ],
  'otclient-dev': [
    ['OTC: input latency on high refresh monitors','otc-input-latency',false,'Noticing extra input lag on 240Hz. Anyone profiling the event loop vs vsync settings?']
  ],
  'chit-chat': [
    ['What OT project are you proud of this month?','chitchat-proud-month',false,'Wins thread. Share a small victory - fixed a crash, finished a quest, shipped a module.']
  ],
  'forum-games': [
    ['Word association: start with depot','game-word-depot',false,'Forum game: reply with the first OT-related word you think of, then the next person continues.']
  ],
  'tibia-official': [
    ['Retail patch observations vs OT feature parity','retail-vs-ot-parity',false,'High-level comparison of recent retail quality-of-life vs what OT servers commonly implement.']
  ],
  'multimedia': [
    ['Ambient playlist for mapping sessions','multimedia-mapping-playlist',false,'Share instrumental playlists that help with long RME sessions.']
  ],
  'small-art': [
    ['Icon set: craft skills','small-art-craft-icons',false,'16x16 craft icons. Looking for contrast feedback on dark UI themes.']
  ],
  'large-art': [
    ['Banner draft for server launch','large-art-launch-banner',false,'Composition critique wanted: character silhouette vs readable title.']
  ],
  'screenshots': [
    ['Boss room before/after lighting','ss-boss-lighting',false,'Same room, different light radii. Which reads better for telegraphs?']
  ],
  'technology': [
    ['Postgres vs MySQL for OT in 2026','tech-postgres-mysql',false,'Operational tradeoffs for backups, replication, and extension ecosystem when hosting OT.']
  ],
  'design': [
    ['Directory card UI density','design-directory-density',false,'How much metadata should a server card show before it feels noisy?']
  ],
  'design-requests': [
    ['Request: simple logo for Harborlight OT','design-req-harborlight',false,'Fictional server name for practice. Want a lighthouse motif without copying official art.']
  ],
  'programming-general': [
    ['When to stop micro-optimizing Lua','prog-lua-microopt',false,'Rule of thumb: profile first. Sharing a case where table reuse mattered and one where it did not.']
  ],
  'programming-requests': [
    ['Request: review a queue worker design','prog-req-queue-worker',false,'Design review please: Redis queue for shop deliveries with at-least-once semantics.']
  ],
  'web-development': [
    ['Auth session cookies on Next.js + Supabase','web-auth-supabase',false,'Patterns for SSR session refresh without flicker on a directory site.']
  ],
  'webdev-requests': [
    ['Request: help with RLS policies for listings','webdev-req-rls',false,'Want owners to edit own listings only. Draft policies in comments if you have battle-tested SQL.']
  ],
  'games': [
    ['What non-OT games is the community playing?','games-non-ot',false,'Off-topic games thread.']
  ],
  'league-of-legends': [
    ['OT community Clash night?','lol-clash-night',false,'Gauge interest for a casual Clash night among OT folks.']
  ],
  'native-chatboards': [
    ['Language rooms guide','native-rooms-guide',true,'Use the language boards for discussion in your preferred language. Keep spam and ads out.']
  ],
  'lang-swedish': [
    ['Hej! Presentera ditt OT-projekt','lang-se-intro',false,'Beratta kort om projektet du jobbar pa och vilken motor ni anvander.']
  ],
  'lang-dutch': [
    ['NL: server hosting tips binnen EU','lang-nl-hosting',false,'Ervaringen met EU VPS providers voor OT (latency + DDoS). Geen affiliate spam.']
  ],
  'lang-portuguese': [
    ['PT: checklist de abertura de servidor','lang-pt-checklist',false,'Lista pratica: backup, anti-cheat basico, regras publicas, e canal de suporte.']
  ],
  'lang-polish': [
    ['PL: dyskusja o balansie custom itemow','lang-pl-balance',false,'Jak testujecie itemy custom zanim wejda na produkuje?']
  ],
  'lang-polish-support': [
    ['PL support: blad logowania OTC','lang-pl-otc-login',false,'Po aktualizacji modulow OTC logowanie spada na protocol error. Macie zestawienie wersji?']
  ],
  'lang-spanish': [
    ['ES: buenas practicas para anuncios de server','lang-es-ads',false,'Que informacion minima debe tener un anuncio: rates, ubicacion, reglas, anti-abuso.']
  ],
  'lang-german': [
    ['DE: Performance-Tuning bei 500+ Spielern','lang-de-perf',false,'Welche Metriken schaut ihr zuerst: SQL slow query, Lua profiling, oder network?']
  ],
  'directory-discussion': [
    ['What makes a trustworthy listing?','directory-trust',false,'Vote: uptime history, owner verification, public rules, or peak players? Rank what you check first.'],
    ['Filters you want on the directory','directory-filters',false,'Client version + region + monetization model seem basic. What else is high signal?']
  ],
  'directory-reports': [
    ['How to file a listing report','directory-how-to-report',true,'Include listing URL/slug, what is wrong, and evidence. Do not post player personal data.']
  ],
  'site-feedback': [
    ['Forum topic view: what is missing?','feedback-topic-view',false,'Reply with UX nits: pagination, quote button, markdown, etc.'],
    ['Submit server flow feedback','feedback-submit-server',false,'We are tightening reachability checks. Tell us what confused you on submit.']
  ]
};

const replyPools = [
  ['Thanks for posting this - matching client/server protocol builds fixed it for us.','We hit the same issue after a module update.','Can you paste the exact engine commit hash?','Try a clean OTC profile before changing server code.'],
  ['We used a composite index on (player_id, time) and deadlocks dropped a lot.','Consider reducing raid write frequency.','Async queue for death logs helped our high-rate realm.'],
  ['Include license and engine version in the top post.','I can test this on a staging host this weekend.','Does it support fresh installs only?'],
  ['Mid-rate retention is mostly trust + content cadence for us.','Public ban appeals matter more than people admit.','Avoid hidden pay walls on core progression.'],
  ['Screenshots would help a lot.','The lighting on the left reads clearer.','Watch walkability near the cliffs.'],
  ['I can take a look if you post a minimal repro.','We solved similar with a debounce on the store button.','Idempotency keys are the way.'],
  ['Interessante abordagem.','Tambem vimos isso no nosso host.','Vale documentar a versao do client.'],
  ['Dzieki za info.','U nas pomogla zmiana kolejnosci skryptow.','Mozesz wrzucic log z konsoli?']
];

function pickReplies(seed, n) {
  const pool = replyPools[seed % replyPools.length];
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push({ author: authors[(seed * 3 + i * 5) % authors.length], body: pool[i % pool.length] });
  }
  return out;
}

const lines = [];
lines.push('-- OpenTibiaServers forum synthetic seed (FIXED)');
lines.push('-- Idempotent. Paste into Supabase SQL Editor.');
lines.push('-- Dollar-quoted strings avoid apostrophe parse errors.');
lines.push('');
lines.push('ALTER TABLE public.forum_topics ADD COLUMN IF NOT EXISTS author_name text;');
lines.push('ALTER TABLE public.forum_posts ADD COLUMN IF NOT EXISTS author_name text;');
lines.push('');
lines.push(`CREATE OR REPLACE FUNCTION public.ots_seed_forum_topic(
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
$fn$;`);
lines.push('');

let topicCount = 0;
let hour = 900;
for (const [board, topics] of Object.entries(boards)) {
  topics.forEach((t, idx) => {
    const [title, slug, pinned, body] = t;
    const author = authors[(topicCount * 7 + idx) % authors.length];
    const nReplies = 2 + ((topicCount + idx) % 5);
    const replies = pickReplies(topicCount + idx, nReplies);
    topicCount += 1;
    hour -= 3;
    lines.push('SELECT public.ots_seed_forum_topic(');
    lines.push('  ' + dq(board) + ',');
    lines.push('  ' + dq(slug) + ',');
    lines.push('  ' + dq(title) + ',');
    lines.push('  ' + dq(author) + ',');
    lines.push('  ' + dq(body) + ',');
    lines.push('  ' + (pinned ? 'true' : 'false') + ',');
    lines.push('  ' + Math.max(hour, 2) + ',');
    lines.push('  ' + dq(JSON.stringify(replies)) + '::jsonb');
    lines.push(');');
    lines.push('');
  });
}

lines.push(`DO $do$
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
$do$;`);
lines.push('');
lines.push('SELECT');
lines.push('  (SELECT COUNT(*) FROM public.forum_topics WHERE author_name IS NOT NULL) AS seeded_topics,');
lines.push('  (SELECT COUNT(*) FROM public.forum_posts WHERE author_name IS NOT NULL) AS seeded_posts;');

const sql = lines.join('\n');
fs.writeFileSync('C:/Users/Admin/Desktop/015_forum_seed_paste.sql', sql);
fs.writeFileSync('supabase/migrations/015_forum_synthetic_seed.sql', sql);
console.log(JSON.stringify({ topics: topicCount, bytes: Buffer.byteLength(sql), lines: lines.length }));
