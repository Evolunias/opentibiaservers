/**
 * Generate original synthetic OT forum seed SQL (NO third-party scrape).
 * Output: Desktop 016_forum_seed_50k_part*.sql — paste into Supabase SQL Editor.
 * Target: >= 50_000 posts (OP + replies). VirusTotal required on file boards.
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = 'C:\\Users\\Admin\\Desktop';
const TARGET_POSTS = 52000;
const TOPICS = 9000; // ~5.7 posts/topic average including OP
const PART_TOPICS = 900; // ~10 parts for editor-friendly size

const BOARDS = [
  'newsroom', 'announcements', 'support-desk', 'support-requests', 'ot-discussion',
  'downloads', 'datapacks', 'distributions', 'maps', 'tools', 'website-apps',
  'resources', 'revscripts', 'cpp-patches', 'actions-events', 'monsters-npcs-raids',
  'mods-lua', 'globalevents-spells', 'otclient-resources',
  'tutorials', 'tutorials-basic', 'tutorials-programming', 'tutorials-os', 'tutorials-mapping',
  'mapping-showcase', 'spriting-showcase',
  'server-gala', 'test-server-gala', 'jobs',
  'tfs-development', 'otclient-dev',
  'chit-chat', 'forum-games', 'multimedia', 'screenshots', 'technology', 'web-development',
  'directory-discussion', 'site-feedback',
];

const FILE_BOARDS = new Set(['downloads', 'datapacks', 'distributions', 'maps', 'tools', 'website-apps', 'resources', 'otclient-resources']);

const AUTHORS = [
  'RuneCartographer','Mapwright','Spellforge','DepotClerk','TempleGuard','Bonebeast','CarlinCourier',
  'VenoreVintner','KazordoonSmith','AbDendrielScout','SvargrondRanger','YalaharArchivist','LibertyBayPilot',
  'ThaisInnkeep','EdronLibrarian','AnkrahmunScribe','DarashiaTrader','PortHopeGuide','GrayBeachWatcher',
  'CrystalServerOps','LuaLoom','ProtocolFox','SpritePixel','RaidTimer','QuestBroker','LootLedger',
  'HouseDeed','GuildBanker','AntiCheatOwl','BackupBeacon','LatencyLlama','SpawnCurator','NpcScript',
  'CanaryFork','OTCModule','RemereBrush','DatPacker','SHAVerifier','VirusCheckBot','PatchNotes',
];

const VT_RULE = `FILE SHARE RULE (required):
1) Prefer hosting on a reputable mirror (GitHub Releases, your site HTTPS).
2) Every download link MUST include a VirusTotal analysis URL for that exact file hash.
3) Paste: file name, version, SHA-256, VirusTotal link, supported client/engine, license.
4) Archives without a VirusTotal link will be removed.
Example VT link format: https://www.virustotal.com/gui/file/<sha256>`;

function esc(s) {
  return String(s).replace(/\$ots\$/g, '$ ots $');
}

function q(s) {
  return `$ots$${esc(s)}$ots$`;
}

function pick(arr, i) {
  return arr[i % arr.length];
}

function vtDemo(i) {
  // Fake-looking but clearly synthetic demo hashes (not real malware scans)
  const hex = Buffer.from(`ots-synthetic-file-${i}-openTibiaServers`).toString('hex').padEnd(64, '0').slice(0, 64);
  return {
    sha: hex,
    url: `https://www.virustotal.com/gui/file/${hex}`,
  };
}

const TITLE_STEMS = [
  'Looking for feedback on', 'How we fixed', 'Best practice for', 'Open discussion:', 'Release notes:',
  'Need help with', 'Showcase:', 'Tutorial draft:', 'Performance tip:', 'Security checklist:',
  'Map WIP:', 'Script review request:', 'Client module idea:', 'Hosting question:', 'Economy design:',
  'Anti-rollback notes:', 'Backup strategy for', 'Quest design for', 'Raid schedule ideas:', 'Guild war rules for',
];

const SUBJECTS = [
  'TFS 1.4/1.5 market offers', 'OTC v8 minimap cache', 'MySQL connection pooling', 'depot inbox overflow',
  'house auction cron', 'blessings pricing', 'exp stages config', 'spawn density on desert',
  'custom outfits pipeline', 'protocol game feature flags', 'store inbox delivery', 'guild motd moderation',
  'map sector compression', 'Lua hotspot profiling', 'Windows service wrappers', 'Linux systemd unit',
  'Cloudflare orange-cloud warning', 'status.json player counts', 'SHA-256 release signing',
  'datapack migration 13.x', 'canary vs TFS tradeoffs', 'NPC banking edge cases', 'party shared exp',
  'PZ lock clarity', 'skull system tuning', 'imbuement mockups', 'wheel of destiny stubs',
  'boss lever cooldowns', 'daily reward streak', 'prey analog design', 'bestiary points economy',
];

const BODY_OPENERS = [
  'Sharing what worked on our test world this week.',
  'We hit a reproducible crash after 6-8 hours uptime.',
  'Looking for a second pair of eyes before we tag a release.',
  'This is an original write-up for OpenTibiaServers — not copied from elsewhere.',
  'Collecting practical notes so new server owners avoid the same traps.',
];

const BODY_DETAILS = [
  'Environment: Ubuntu 22.04, 4 vCPU, 8GB RAM, MariaDB 10.11.',
  'Client target: 12.x/13.x OTC builds with our custom modules disabled for the repro.',
  'We logged query times over 200ms on market browse during peak hour.',
  'Map size is roughly mid-scale with custom hunting zones east of the desert.',
  'Scripts are Lua-only so far; no C++ patches in this branch.',
  'We keep configs in git and treat live changes as a hotfix branch.',
];

const BODY_ASKS = [
  'Has anyone stress-tested this with 200+ CCU?',
  'What would you change about the economy numbers?',
  'Any safer pattern for rolling this out without wiping houses?',
  'Is there a cleaner way to validate datapack XML before boot?',
  'Would you accept this as a draft tutorial under Learn Track?',
];

const REPLY_LINES = [
  'Thanks — we saw the same spike when market history grew past 500k rows.',
  'Try indexing the player storage lookups; it helped our spawn scripts.',
  'I would pin a status endpoint and keep Cloudflare off the game port.',
  'Agree on the VirusTotal rule for binaries. Hash + VT link or it does not ship.',
  'We documented a similar path in our ops notes last month.',
  'Consider feature-flagging it for premium only during the first week.',
  'If you share the stacktrace (redact IPs), I can compare with our build.',
  'Map looks promising. Hunting loop needs clearer signage near the temple.',
  'For Windows hosts, mark the service recovery options or it will not auto-restart.',
  'Good call separating AAC auth from game auth cookies.',
];

function topicPayload(i) {
  const board = pick(BOARDS, i * 7 + 3);
  const author = pick(AUTHORS, i * 3 + 1);
  const title = `${pick(TITLE_STEMS, i)} ${pick(SUBJECTS, i * 5)} (#${i + 1})`;
  const slug = `ots-syn-${String(i + 1).padStart(5, '0')}-${board}`.slice(0, 80);
  const isFile = FILE_BOARDS.has(board);
  const vt = vtDemo(i);
  let body = [
    pick(BODY_OPENERS, i),
    '',
    pick(BODY_DETAILS, i),
    pick(BODY_DETAILS, i + 2),
    '',
    pick(BODY_ASKS, i),
  ];
  if (isFile) {
    body = body.concat([
      '',
      '---',
      VT_RULE,
      '',
      `Synthetic example package: ots-community-tool-${i + 1}.zip`,
      `SHA-256: ${vt.sha}`,
      `VirusTotal: ${vt.url}`,
      'Note: demo hash for seed content only — replace with your real release hash before publishing.',
    ]);
  }
  const replyCount = 3 + ((i * 17) % 6); // 3..8 replies -> ~4-9 posts/topic with OP
  const replies = [];
  for (let r = 0; r < replyCount; r++) {
    const ra = pick(AUTHORS, i + r * 11 + 4);
    let rb = pick(REPLY_LINES, i + r * 3);
    if (isFile && r === 0) {
      rb += ` Also: please keep the VirusTotal link next to the mirror. Example: ${vt.url}`;
    }
    replies.push({ author: ra, body: rb });
  }
  const hoursAgo = 2 + ((i * 13) % 2000);
  return { board, slug, title, author, body: body.join('\n'), replies, hoursAgo, pinned: false };
}

function emitTopic(t) {
  const repliesJson = JSON.stringify(t.replies).replace(/\$ots\$/g, '$ ots $');
  return [
    'SELECT public.ots_seed_forum_topic(',
    `  ${q(t.board)},`,
    `  ${q(t.slug)},`,
    `  ${q(t.title)},`,
    `  ${q(t.author)},`,
    `  ${q(t.body)},`,
    `  ${t.pinned ? 'true' : 'false'},`,
    `  ${t.hoursAgo},`,
    `  ${q(repliesJson)}::jsonb`,
    ');',
    '',
  ].join('\n');
}

function header(part, parts) {
  return `-- OpenTibiaServers synthetic forum seed PART ${part}/${parts}
-- ORIGINAL content only. No OTLand / third-party republication.
-- Idempotent via ots_seed_forum_topic (slug upsert).
-- File boards include VirusTotal link requirements.
-- Paste into Supabase SQL Editor after 012 + function from 015.

`;
}

function ensureFn() {
  // Pull function from existing 015 - assume already applied; still redefine for safety
  return fs.readFileSync(path.join('supabase', 'migrations', '015_forum_synthetic_seed.sql'), 'utf8')
    .split('SELECT public.ots_seed_forum_topic')[0];
}

function vtSticky() {
  const boards = [...FILE_BOARDS];
  let out = '-- === VirusTotal file-share rules (pinned) ===\n';
  for (const board of boards) {
    const vt = vtDemo(board.length * 99);
    const body = `Pinned policy for ${board}

${VT_RULE}

Moderation: posts that share executables, zips, rar, 7z, or installers without a VirusTotal link may be locked or removed.

Synthetic demo (format only):
SHA-256: ${vt.sha}
VirusTotal: ${vt.url}`;
    out += emitTopic({
      board,
      slug: `vt-policy-${board}`,
      title: `RULE: VirusTotal links required for files (${board})`,
      author: 'VirusCheckBot',
      body,
      replies: [
        { author: 'RuneCartographer', body: 'Confirmed — this is site policy for OpenTibiaServers file boards.' },
        { author: 'SHAVerifier', body: 'Tip: hash the exact bytes you upload. If you rebuild the zip, re-scan and update the VT link.' },
      ],
      hoursAgo: 5000,
      pinned: true,
    });
  }
  return out;
}

function main() {
  const fn = ensureFn();
  const parts = Math.ceil(TOPICS / PART_TOPICS);
  let postEstimate = 0;
  const vtBlock = vtSticky();

  for (let p = 0; p < parts; p++) {
    const start = p * PART_TOPICS;
    const end = Math.min(TOPICS, start + PART_TOPICS);
    const lines = [header(p + 1, parts)];
    if (p === 0) {
      lines.push(fn);
      lines.push(vtBlock);
    }
    for (let i = start; i < end; i++) {
      const t = topicPayload(i);
      postEstimate += 1 + t.replies.length;
      lines.push(emitTopic(t));
    }
    const outPath = path.join(OUT_DIR, `016_forum_seed_50k_part${p + 1}.sql`);
    fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
    const mb = (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2);
    console.log(`Wrote ${outPath} (${mb} MB) topics ${start + 1}-${end}`);
  }

  const manifest = path.join(OUT_DIR, '016_forum_seed_50k_README.txt');
  fs.writeFileSync(
    manifest,
    `OpenTibiaServers 50k+ synthetic forum seed
========================================
Parts: ${parts} files on Desktop: 016_forum_seed_50k_part1.sql ... part${parts}.sql
Estimated posts: ~${postEstimate} (target >= ${TARGET_POSTS})
Topics: ${TOPICS}
Content: ORIGINAL synthetic OT-community text only (no OTLand scrape/republish)
VirusTotal: pinned rule topics on file boards + every file-board seed post includes VT link format

How to apply:
1) Ensure migrations 012 (forum) and 015 function already ran (part1 redefines the function).
2) In Supabase SQL Editor, run part1, wait for success, then part2...part${parts}.
3) If a part times out, re-run the same part (upsert/idempotent for topics; posts for that topic are replaced).

Do NOT paste OTLand content. Do NOT host binaries from third-party forums without rights + VT scan.
`,
    'utf8'
  );
  console.log('Manifest:', manifest);
  console.log('Estimated posts:', postEstimate);
}

main();
