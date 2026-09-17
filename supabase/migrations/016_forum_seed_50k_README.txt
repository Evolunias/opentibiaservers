OpenTibiaServers 50k+ synthetic forum seed
========================================
Parts: 10 files on Desktop: 016_forum_seed_50k_part1.sql ... part10.sql
Estimated posts: ~58500 (target >= 52000)
Topics: 9000
Content: ORIGINAL synthetic OT-community text only (no OTLand scrape/republish)
VirusTotal: pinned rule topics on file boards + every file-board seed post includes VT link format

How to apply:
1) Ensure migrations 012 (forum) and 015 function already ran (part1 redefines the function).
2) In Supabase SQL Editor, run part1, wait for success, then part2...part10.
3) If a part times out, re-run the same part (upsert/idempotent for topics; posts for that topic are replaced).

Do NOT paste OTLand content. Do NOT host binaries from third-party forums without rights + VT scan.
