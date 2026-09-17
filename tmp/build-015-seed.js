const fs = require('fs');
const path = require('path');

function esc(s) {
  return String(s).replace(/'/g, "''");
}

const authors = [
  'RuneCartographer','LuaNest','RookGuard','CanaryPatch','Mapwright','ScrollForge','BoneAltar',
  'ThaisWire','VenoreOps','KazordoonKit','CarlinRelay','DarashiaDev','SvargrondBit','EdronForge',
  'LibertyBayOps','PortHopeLua','AnkrahmunMap','GreyIsland','YalaharModule','OramondScript',
  'RoshamuulQA','KrailosPixel','IssaviBuild','BounacPainter','Gnomprona','CyclopediaBot','QuestLedger',
  'DepotSorter','ImbuementLab','ExivaPing','MagicWall','FireBombOps','SDEconomy','UHSupply',
  'ManaShield','SoftBootsLab','RingOfHealing','AxeOfCarving','CritChance','SkillTrainer',
  'HouseBroker','GuildHall','WarBanner','AntiCheatOwl','RateTuner','SpawnEditor','NPCWhisper'
];

const boards = {
  newsroom: [
    ['Welcome to the OpenTibiaServers forum','welcome-ots-forum', true, 'This board is for product updates, roadmap notes, and community announcements about the OpenTibiaServers directory and forum.\n\nPlease keep support questions in Support Desk, and keep release posts in the Release Bay boards.\n\nHouse rules:\n1) Be specific with versions (TFS/Canary/OTC build).\n2) No account trading.\n3) No doxxing or harassment.\n4) Server ads belong in Server Gala.'],
    ['September platform notes: forum + directory tabs','sept-platform-notes', true, 'We shipped Forum as the homepage with a Directory tab for listings.\n\nIf something looks off (empty boards, broken topic links, missing counts), reply here with browser + URL.\n\nUpcoming: clearer submit-server checks and owner-reported player metrics.']
  ],
  announcements: [
    ['Forum etiquette and moderation basics','forum-etiquette', true, 'Pinned for newcomers.\n\n- Search before posting duplicates.\n- Include OS, engine fork, client, and error text.\n- Spoiler economy exploits.\n- Staff may lock threads that become circular.'],
    ['Reporting bad directory listings','reporting-listings', false, 'If a listing spoofs players online or uses a broken website URL, open a thread in Directory Reports with the listing slug and screenshots.']
  ],
  'support-desk': [
    ['TFS 1.4 protocol mismatch after OTC update','tfs14-protocol-mismatch', false, 'After updating OTClient modules, login fails with "Protocol mismatch" against TFS 1.4.2.\n\nServer shows player connected then immediately removes the connection.\nClient console: ERROR: ProtocolGame parse message unhandled opcode.\n\nHas anyone mapped which OTC commit pairs cleanly with stock TFS 1.4 protocol?'],
    ['MySQL deadlock on player deaths table','mysql-deadlock-deaths', false, 'High rate server: InnoDB deadlock on `player_deaths` during raids.\nIsolation level is REPEATABLE READ.\nLooking for a safe index strategy or write batching pattern.']
  ],
  'support-requests': [
    ['Need help wiring config.lua market offers','config-market-offers', false, 'Market offers appear in DB but not in-game. Using Canary-based fork. `marketOfferDuration` is set. Any checklist before I paste full config?'],
    ['Docker compose: game port open but status closed','docker-status-closed', false, '7171/7172 published. Website status checker still shows offline. Host firewall allows TCP. Is the checker probing status protocol or HTTP only?']
  ],
  'ot-discussion': [
    ['Retention tips for mid-rate servers in 2026','retention-midrate-2026', false, 'Curious what actually keeps players past week two on mid-rate (XP 20-50x) without turning into a donation treadmill.\n\nThings that worked for us: weekly mini-raids, transparent ban logs, and a public roadmap board.'],
    ['Economy sinks that do not feel punitive','economy-sinks', false, 'Imbuements + hirelings helped, but gold still inflates. Looking for sinks players opt into (cosmetics, house upgrades) rather than repair taxes.']
  ],
  downloads: [
    ['Release checklist before posting a datapack','datapack-release-checklist', true, 'When posting downloads, include:\n- Engine compatibility\n- Client version\n- License\n- Known broken quests\n- Fresh vs migration install notes']
  ],
  datapacks: [
    ['Clean 8.60 datapack with fixed NPC destinations','datapack-860-npc-fix', false, 'Sharing a cleaned 8.60 datapack branch focused on NPC destination bugs and missing door actions. No custom map. MIT license. Feedback welcome on premium scroll shops.'],
    ['13.x canary datapack notes: fatigue + wheel','datapack-13x-wheel', false, 'Notes from integrating wheel of destiny tables into a Canary datapack. Watch out for missing `player_wheeldata` migrations on older schemas.']
  ],
  distributions: [
    ['Looking for a stable Canary base with AAC hooks','canary-base-aac', false, 'Evaluating distributions that already expose clean HTTP hooks for shop delivery. Prefer fewer custom C++ forks and more Lua.'],
    ['Fork comparison: custom spells vs maintainability','fork-spells-maintain', false, 'We added 40 custom spells in C++ last year and regret merge pain. Planning to move formulas to Lua. Anyone done that migration mid-season?']
  ],
  'archived-distributions': [
    ['Archive: old 0.3.6pl1 notes (historical)','archive-036-notes', false, 'Historical notes only. Do not use for new launches. Listing common pitfalls around beds and house auctions for archaeology.']
  ],
  maps: [
    ['RME tip: validate ground borders before spawn pass','rme-ground-borders', false, 'Border pass before spawns saved us days. Also export a walkability heat dump for pathfinding dead ends.'],
    ['Custom starter island size guidelines','starter-island-size', false, 'What tile footprint feels right for a custom Rook alternative without making early game a commute?']
  ],
  tools: [
    ['OTBM diff tool wishlist','otbm-diff-wishlist', false, 'Want a CLI that diffs two OTBMs and prints changed house IDs + spawn nodes. Does anything mature exist beyond ad-hoc scripts?'],
    ['Item editor: sidecars for client 13 assets','item-editor-13', false, 'Asset pipeline for 13.x appearances is awkward. Sharing a small converter script outline (not a full release yet).']
  ],
  'website-apps': [
    ['MyAAC shop delivery race condition','myaac-shop-race', false, 'Double-click on store purchase delivered twice. Added idempotency keys on delivery queue. Curious if others see this on PHP-FPM workers.'],
    ['Next.js launcher status page pattern','next-launcher-status', false, 'Using a public JSON status endpoint + Next.js edge cache. Keep TTL short (15s) or players see stale online counts.']
  ],
  graveyard: [
    ['Retired: experimental websocket proxy notes','retired-ws-proxy', false, 'Deprecated experiment. Leaving notes so nobody revives it without knowing the TLS termination footguns.']
  ],
  resources: [
    ['Shared Lua helpers for storage keys','lua-storage-helpers', false, 'Posting a tiny module for namespaced storage keys to avoid collisions between systems.']
  ],
  revscripts: [
    ['Revscript shop NPC with stock limits','revscript-shop-stock', false, 'RevScript shop that tracks daily stock in KV. Includes example for potions and runes. Compatible with recent Canary Lua API.'],
    ['Offline training RevScript caveats','revscript-offline-training', false, 'Offline training ticks were double-applying after crash recovery. Guard with a last_tick timestamp in player storage.']
  ],
  'cpp-patches': [
    ['Patch idea: rate-limit talkactions globally','cpp-rate-limit-talk', false, 'Draft C++ patch outline for global talkaction rate limits. Looking for review on lock scope before we open a PR on our fork.'],
    ['Crash in combat when target despawns mid-hit','cpp-combat-despawn', false, 'Stacktrace points to creature combat callback after despawn. Anyone shipping a null guard earlier in the pipeline?']
  ],
  'actions-events': [
    ['ActionID conventions that scale','actionid-conventions', false, 'We reserve ranges: 1000-1999 doors, 2000-2999 quests, 3000-3999 unique levers. Curious how other teams avoid collisions.'],
    ['MoveEvent for snow tiles eating FPS','moveevent-snow-fps', false, 'Snow MoveEvent logging was tanking FPS. Removed per-step DB writes; use memory counters flushed every minute.']
  ],
  'monsters-npcs-raids': [
    ['Raid XML: staggered waves without stampede','raid-stagger-waves', false, 'Staggering raid waves by 20-30s kept the city usable. Sharing spawn density numbers for dragons vs hydras.'],
    ['NPC bank with transfer fees','npc-bank-fees', false, 'Looking for a clean fee formula that discourages mule banks without punishing normal players.']
  ],
  'mods-lua': [
    ['Mod loader order bugs','mod-loader-order', false, 'Two mods both hooked onLogin; order depended on filesystem. Fixed with explicit priority field.']
  ],
  'globalevents-spells': [
    ['GlobalEvent save interval vs player experience','globalevent-save', false, 'Saving every 5 minutes caused hitch under 800 players. Moved to dirty-flag saves for combat-active players only.'],
    ['Spell: custom beam without hardcoding dirs','spell-beam-dirs', false, 'Sharing a direction table approach for beams so we stop copy-pasting eight cases.']
  ],
  'otclient-resources': [
    ['OTC module: compact battle list filters','otc-battle-filters', false, 'Module adds predator/skull filters to battle list. Tested on OTCv8. Feedback on mobile layouts welcome.'],
    ['Hotkey profiles per character','otc-hotkey-profiles', false, 'Looking for existing modules that store hotkeys per character name instead of globally.']
  ],
  tutorials: [
    ['How to write a useful OT tutorial','how-to-write-tutorials', true, 'Good tutorials state engine version, show exact file paths, and include a "verify it worked" section.']
  ],
  'tutorials-basic': [
    ['First server boot on Ubuntu 24.04','ubuntu-2404-first-boot', false, 'Checklist: deps, vcpkg/cmake notes, config.lua bind address, firewall, and a smoke test with a local OTC.'],
    ['Windows dev loop without pain','windows-dev-loop', false, 'Using WSL2 for the server and OTC on Windows host. Shared folder pitfalls included.']
  ],
  'tutorials-programming': [
    ['Lua patterns for maintainable quest chains','lua-quest-chains', false, 'Prefer data-driven step tables over nested ifs. Example structure inside.'],
    ['Debugging storage races','debug-storage-races', false, 'Two scripts writing the same storage key. Added assert helpers in DEV builds.']
  ],
  'tutorials-os': [
    ['systemd unit for TFS with restart limits','systemd-tfs-restart', false, 'Unit file tips: Restart=on-failure, limit bursts, and journald rate limits so crash loops do not fill disks.']
  ],
  'tutorials-misc': [
    ['Backing up houses and market offers','backup-houses-market', false, 'Logical dump order matters. Houses before tile items. Market offers need consistent foreign keys.']
  ],
  'tutorials-mapping': [
    ['Spawn brush workflow in RME','rme-spawn-brush', false, 'Brush densities and zone tags we use for cities vs hunting.']
  ],
  'mapping-showcase': [
    ['Show: desert outpost with vertical cliffs','showcase-desert-outpost', false, 'Screenshots description: sandstone cliffs, rope spots, and a small depot. Looking for feedback on climb readability.'],
    ['Show: swamp village lighting plan','showcase-swamp-village', false, 'Trying colored lights without turning the swamp into a nightclub. Palette notes included.']
  ],
  'mapping-contests': [
    ['Mini contest idea: 50x50 themed puzzle room','contest-50x50-puzzle', false, 'Proposal for a short mapping contest. Theme: puzzle room. Judging: clarity, fairness, aesthetics.']
  ],
  'spriting-showcase': [
    ['Outfit: field cartographer set','sprite-cartographer-outfit', false, 'WIP outfit frames for a cartographer theme. Looking for silhouette feedback at 32x32.']
  ],
  'server-gala': [
    ['Astra Veil — 8.60 mid-rate — soft launch Friday','gala-astra-veil', false, 'Fictional listing for format example.\nName: Astra Veil\nClient: 8.60\nXP: 30x | Skills: 12x | Loot: 2x\nLocation: EU\nAnti-cheat: dual client checks + staff review\nWebsite: example only\nLooking for testers on quests 1-20.'],
    ['Northmere RL map — long-term — NA','gala-northmere', false, 'Fictional NA long-term project. Focus on stable economy and public ban appeals. Not pay-to-win gear.']
  ],
  'test-server-gala': [
    ['Public QA: spell balance weekend','test-spell-balance', false, 'Test realm open this weekend for spell DPS logs. Bring spreadsheets.']
  ],
  jobs: [
    ['Hiring: mapper for custom starter area (paid)','job-mapper-starter', false, 'Looking for a mapper comfortable with RME and documentation. Paid milestone contract. Portfolio required.'],
    ['Collab: Lua scripter for house auctions','job-lua-house-auctions', false, 'Need help finishing house auction edge cases (guild bids, abandonment). Equity or paid — say your preference.']
  ],
  'tfs-development': [
    ['Discussion: decluttering combat pipeline','tfs-combat-pipeline', false, 'Design discussion: reducing branches in combat for readability without killing performance.'],
    ['CI ideas for datapack + engine PRs','tfs-ci-datapack', false, 'What smoke tests do you run in CI before merging engine changes that touch protocol?']
  ],
  'otclient-dev': [
    ['OTC: input latency on high refresh monitors','otc-input-latency', false, 'Noticing extra input lag on 240Hz. Anyone profiling the event loop vs vsync settings?'],
    ['UI anchor bugs when scaling UI','otc-ui-scale-anchors', false, 'Anchors drift at 125% scale. Repro steps attached in text form.']
  ],
  'chit-chat': [
    ['What OT project are you proud of this month?','chitchat-proud-month', false, 'Wins thread. Share a small victory — fixed a crash, finished a quest, shipped a module.'],
    ['Coffee or tea for late-night scripting','chitchat-coffee-tea', false, 'Scientific research needed. Also snacks that do not destroy keyboards.']
  ],
  'forum-games': [
    ['Word association: start with "depot"','game-word-depot', false, 'Forum game: reply with the first OT-related word you think of, then the next person continues.']
  ],
  sports: [
    ['Anyone watching the weekend matches?','sports-weekend', false, 'Sports chat — keep it friendly.']
  ],
  'tibia-official': [
    ['Retail patch observations vs OT feature parity','retail-vs-ot-parity', false, 'High-level comparison of recent retail quality-of-life vs what OT servers commonly implement. Not a leak thread.']
  ],
  multimedia: [
    ['Ambient playlist for mapping sessions','multimedia-mapping-playlist', false, 'Share instrumental playlists that help with long RME sessions.']
  ],
  'small-art': [
    ['Icon set: craft skills','small-art-craft-icons', false, '16x16 craft icons. Looking for contrast feedback on dark UI themes.']
  ],
  'large-art': [
    ['Banner draft for server launch','large-art-launch-banner', false, 'Composition critique wanted: character silhouette vs readable title.']
  ],
  screenshots: [
    ['Boss room before/after lighting','ss-boss-lighting', false, 'Same room, different light radii. Which reads better for telegraphs?']
  ],
  technology: [
    ['Postgres vs MySQL for OT in 2026','tech-postgres-mysql', false, 'Operational tradeoffs for backups, replication, and extension ecosystem when hosting OT.']
  ],
  design: [
    ['Directory card UI density','design-directory-density', false, 'How much metadata should a server card show before it feels noisy?']
  ],
  'design-requests': [
    ['Request: simple logo for "Harborlight OT"','design-req-harborlight', false, 'Fictional server name for practice. Want a lighthouse + tibia-adjacent motif without copying CipSoft art.']
  ],
  'programming-general': [
    ['When to stop micro-optimizing Lua','prog-lua-microopt', false, 'Rule of thumb: profile first. Sharing a case where table reuse mattered and one where it did not.']
  ],
  'programming-requests': [
    ['Request: review a queue worker design','prog-req-queue-worker', false, 'Design review please: Redis queue for shop deliveries with at-least-once semantics.']
  ],
  'web-development': [
    ['Auth session cookies on Next.js + Supabase','web-auth-supabase', false, 'Patterns for SSR session refresh without flicker on a directory site.']
  ],
  'webdev-requests': [
    ['Request: help with RLS policies for listings','webdev-req-rls', false, 'Want owners to edit own listings only. Draft policies in comments if you have battle-tested SQL.']
  ],
  games: [
    ['What non-OT games is the community playing?','games-non-ot', false, 'Off-topic games thread.']
  ],
  'league-of-legends': [
    ['OT community Clash night?','lol-clash-night', false, 'Gauge interest for a casual Clash night among OT folks.']
  ],
  'native-chatboards': [
    ['Language rooms guide','native-rooms-guide', true, 'Use the language boards for discussion in your preferred language. Keep spam and ads out.']
  ],
  'lang-swedish': [
    ['Hej! Presentera ditt OT-projekt','lang-se-intro', false, 'Beratta kort om projektet du jobbar pa och vilken motor ni anvander.']
  ],
  'lang-dutch': [
    ['NL: server hosting tips binnen EU','lang-nl-hosting', false, 'Ervaringen met EU VPS providers voor OT (latency + DDoS). Geen affiliate spam.']
  ],
  'lang-portuguese': [
    ['PT: checklist de abertura de servidor','lang-pt-checklist', false, 'Lista pratica: backup, anti-cheat basico, regras publicas, e canal de suporte.']
  ],
  'lang-polish': [
    ['PL: dyskusja o balansie custom itemow','lang-pl-balance', false, 'Jak testujecie itemy custom zanim wejda na produkuje?']
  ],
  'lang-polish-support': [
    ['PL support: blad logowania OTC','lang-pl-otc-login', false, 'Po aktualizacji modulow OTC logowanie spada na protocol error. Macie zestawienie wersji?']
  ],
  'lang-polish-tutorials': [
    ['PL tutorial: pierwszy GlobalEvent','lang-pl-globalevent', false, 'Krotki przewodnik: interwal, save, i jak uniknac podwojnego startu po crashu.']
  ],
  'lang-spanish': [
    ['ES: buenas practicas para anuncios de server','lang-es-ads', false, 'Que informacion minima debe tener un anuncio para no ser ruido: rates, ubicacion, reglas, anti-abuso.']
  ],
  'lang-norwegian': [
    ['NO: kartleggingstips for nye mapper','lang-no-mapping', false, 'Del gjerne RME-tips og vanlige nybegynnerfeil.']
  ],
  'lang-german': [
    ['DE: Performance-Tuning bei 500+ Spielern','lang-de-perf', false, 'Welche Metriken schaut ihr zuerst: SQL slow query, Lua profiling, oder network?']
  ],
  'directory-discussion': [
    ['What makes a trustworthy listing?','directory-trust', false, 'Vote: uptime history, owner verification, public rules, or peak players? Rank what you check first.'],
    ['Filters you want on the directory','directory-filters', false, 'Client version + region + monetization model seem basic. What else is high signal?']
  ],
  'directory-reports': [
    ['How to file a listing report','directory-how-to-report', true, 'Include listing URL/slug, what is wrong, and evidence. Do not post player personal data.']
  ],
  'site-feedback': [
    ['Forum topic view: what is missing?','feedback-topic-view', false, 'Reply with UX nits: pagination, quote button, markdown, etc.'],
    ['Submit server flow feedback','feedback-submit-server', false, 'We are tightening reachability checks. Tell us what confused you on submit.']
  ]
};

const replyPools = [
  ['Thanks for posting this — matching client/server protocol builds fixed it for us.', 'We hit the same issue after a module update.', 'Can you paste the exact engine commit hash?', 'Try a clean OTC profile before changing server code.', 'This should be pinned.'],
  ['We used a composite index on (player_id, time) and deadlocks dropped a lot.', 'Consider reducing raid write frequency.', 'Async queue for death logs helped our high-rate realm.', 'Share your SHOW ENGINE INNODB STATUS snippet if you can.'],
  ['Include license and engine version in the top post.', 'I can test this on a staging host this weekend.', 'Does it support fresh installs only?', 'Nice documentation.'],
  ['Mid-rate retention is mostly trust + content cadence for us.', 'Public ban appeals matter more than people admit.', 'Avoid hidden pay walls on core progression.', 'Curious about your first-week funnel numbers.'],
  ['Screenshots would help a lot.', 'The lighting on the left reads clearer.', 'Watch walkability near the cliffs.', 'Consider a rope marker tile.'],
  ['I can take a look if you post a minimal repro.', 'We solved similar with a debounce on the store button.', 'Idempotency keys are the way.', 'Are you on multiple app workers?'],
  ['Interessante abordagem.', 'Tambem vimos isso no nosso host.', 'Vale documentar a versao do client.', 'Obrigado por compartilhar.'],
  ['Dzieki za info.', 'U nas pomogla zmiana kolejnosci skryptow.', 'Mozesz wrzucic log z konsoli?', 'Trzymam kciuki.']
];

function pickReplies(seed, n) {
  const pool = replyPools[seed % replyPools.length];
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push({
      author: authors[(seed * 3 + i * 5) % authors.length],
      body: pool[i % pool.length]
    });
  }
  return out;
}

function hashViews(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return 40 + (h % 900);
}

const lines = [];
lines.push(`-- =============================================================================`);
lines.push(`-- OpenTibiaServers forum synthetic seed (original content)`);
lines.push(`-- Idempotent. Paste into Supabase SQL Editor after 012 board migration.`);
lines.push(`-- Synthetic authors use author_name with NULL user_id.`);
lines.push(`-- =============================================================================`);
lines.push('');
lines.push(`ALTER TABLE public.forum_topics ADD COLUMN IF NOT EXISTS author_name text;`);
lines.push(`ALTER TABLE public.forum_posts ADD COLUMN IF NOT EXISTS author_name text;`);
lines.push('');
lines.push(`CREATE OR REPLACE FUNCTION public.ots_seed_forum_topic(`);
lines.push(`  p_board_slug text,`);
lines.push(`  p_topic_slug text,`);
lines.push(`  p_title text,`);
lines.push(`  p_author text,`);
lines.push(`  p_body text,`);
lines.push(`  p_pinned boolean DEFAULT false,`);
lines.push(`  p_hours_ago integer DEFAULT 48,`);
lines.push(`  p_replies jsonb DEFAULT '[]'::jsonb`);
lines.push(`) RETURNS uuid`);
lines.push(`LANGUAGE plpgsql`);
lines.push(`SECURITY DEFINER`);
lines.push(`SET search_path = public`);
lines.push(`AS $$`);
lines.push(`DECLARE`);
lines.push(`  v_board_id uuid;`);
lines.push(`  v_topic_id uuid;`);
lines.push(`  v_created timestamptz;`);
lines.push(`  v_last timestamptz;`);
lines.push(`  v_reply jsonb;`);
lines.push(`  v_idx integer := 0;`);
lines.push(`  v_views integer;`);
lines.push(`BEGIN`);
lines.push(`  SELECT id INTO v_board_id FROM public.forum_boards WHERE slug = p_board_slug;`);
lines.push(`  IF v_board_id IS NULL THEN`);
lines.push(`    RAISE NOTICE 'Skipping missing board %', p_board_slug;`);
lines.push(`    RETURN NULL;`);
lines.push(`  END IF;`);
lines.push('');
lines.push(`  v_created := now() - make_interval(hours => GREATEST(p_hours_ago, 1));`);
lines.push(`  v_views := 40 + (abs(hashtext(p_topic_slug)) % 900);`);
lines.push('');
lines.push(`  INSERT INTO public.forum_topics AS t (`);
lines.push(`    board_id, user_id, title, slug, body, status, pinned, view_count, author_name, created_at, updated_at, last_post_at`);
lines.push(`  ) VALUES (`);
lines.push(`    v_board_id, NULL, p_title, p_topic_slug, p_body, 'open', COALESCE(p_pinned, false), v_views, p_author, v_created, v_created, v_created`);
lines.push(`  )`);
lines.push(`  ON CONFLICT (board_id, slug) DO UPDATE SET`);
lines.push(`    title = EXCLUDED.title,`);
lines.push(`    body = EXCLUDED.body,`);
lines.push(`    pinned = EXCLUDED.pinned,`);
lines.push(`    author_name = EXCLUDED.author_name,`);
lines.push(`    view_count = EXCLUDED.view_count,`);
lines.push(`    updated_at = now()`);
lines.push(`  RETURNING id INTO v_topic_id;`);
lines.push('');
lines.push(`  DELETE FROM public.forum_posts WHERE topic_id = v_topic_id AND user_id IS NULL;`);
lines.push('');
lines.push(`  INSERT INTO public.forum_posts (topic_id, user_id, body, status, author_name, created_at, updated_at)`);
lines.push(`  VALUES (v_topic_id, NULL, p_body, 'published', p_author, v_created, v_created);`);
lines.push('');
lines.push(`  v_last := v_created;`);
lines.push(`  FOR v_reply IN SELECT * FROM jsonb_array_elements(COALESCE(p_replies, '[]'::jsonb))`);
lines.push(`  LOOP`);
lines.push(`    v_idx := v_idx + 1;`);
lines.push(`    v_last := v_created + make_interval(hours => v_idx * 3);`);
lines.push(`    INSERT INTO public.forum_posts (topic_id, user_id, body, status, author_name, created_at, updated_at)`);
lines.push(`    VALUES (`);
lines.push(`      v_topic_id,`);
lines.push(`      NULL,`);
lines.push(`      COALESCE(v_reply->>'body', ''),`);
lines.push(`      'published',`);
lines.push(`      COALESCE(v_reply->>'author', 'Member'),`);
lines.push(`      v_last,`);
lines.push(`      v_last`);
lines.push(`    );`);
lines.push(`  END LOOP;`);
lines.push('');
lines.push(`  UPDATE public.forum_topics`);
lines.push(`  SET reply_count = GREATEST(v_idx, 0),`);
lines.push(`      last_post_at = v_last,`);
lines.push(`      last_post_user_id = NULL,`);
lines.push(`      updated_at = now()`);
lines.push(`  WHERE id = v_topic_id;`);
lines.push('');
lines.push(`  PERFORM public.refresh_forum_board_stats(v_board_id);`);
lines.push(`  RETURN v_topic_id;`);
lines.push(`END;`);
lines.push(`$$;`);
lines.push('');

let topicCount = 0;
let replyCount = 0;
let hour = 900;
for (const [board, topics] of Object.entries(boards)) {
  topics.forEach((t, idx) => {
    const [title, slug, pinned, body] = t;
    const author = authors[(topicCount * 7 + idx) % authors.length];
    const nReplies = 2 + ((topicCount + idx) % 6);
    const replies = pickReplies(topicCount + idx, nReplies);
    replyCount += nReplies;
    topicCount += 1;
    hour -= 3;
    const repliesJson = JSON.stringify(replies).replace(/'/g, "''");
    lines.push(`SELECT public.ots_seed_forum_topic(`);
    lines.push(`  '${esc(board)}',`);
    lines.push(`  '${esc(slug)}',`);
    lines.push(`  '${esc(title)}',`);
    lines.push(`  '${esc(author)}',`);
    lines.push(`  '${esc(body)}',`);
    lines.push(`  ${pinned ? 'true' : 'false'},`);
    lines.push(`  ${Math.max(hour, 2)},`);
    lines.push(`  '${repliesJson}'::jsonb`);
    lines.push(`);`);
    lines.push('');
  });
}

lines.push(`-- Refresh all boards that have topics`);
lines.push(`DO $$`);
lines.push(`DECLARE r record;`);
lines.push(`BEGIN`);
lines.push(`  FOR r IN SELECT DISTINCT b.id FROM public.forum_boards b`);
lines.push(`    INNER JOIN public.forum_topics t ON t.board_id = b.id`);
lines.push(`  LOOP`);
lines.push(`    PERFORM public.refresh_forum_board_stats(r.id);`);
lines.push(`  END LOOP;`);
lines.push(`END $$;`);
lines.push('');
lines.push(`SELECT`);
lines.push(`  (SELECT COUNT(*) FROM public.forum_topics WHERE author_name IS NOT NULL) AS seeded_topics,`);
lines.push(`  (SELECT COUNT(*) FROM public.forum_posts WHERE author_name IS NOT NULL) AS seeded_posts;`);
lines.push('');

const sql = lines.join('\n');
const mig = path.join('supabase', 'migrations', '015_forum_synthetic_seed.sql');
const paste = 'C:\\\\Users\\\\Admin\\\\Desktop\\\\015_forum_seed_paste.sql';
fs.writeFileSync(mig, sql);
fs.writeFileSync(paste, sql);
console.log(JSON.stringify({ topics: topicCount, replies: replyCount, posts: topicCount + replyCount, bytes: sql.length, mig, paste }, null, 2));
