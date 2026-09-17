# Wiki proceed status (2026-09-18)

## Done without external auth
- On-site `/research` + `/wiki` live
- Full research pack (10,801 URLs) in `research-wiki-pack.tgz`
- Per-platform seed queues in `PLATFORM_QUEUES/` (19 allowed hosts)
- Seed batch bodies in `seed-batch/` (Markdown + MediaWiki for priority pages)
- Accounts rewritten: unrelated encyclopedias/game wikis marked DO_NOT_CREATE
- `_unpacked/` gitignored (keep archive only)

## External hosts

| Host | Attempt | Result |
| --- | --- | --- |
| GitHub Wikis (`Evolunias/opentibiaservers.wiki.git`) | git ls-remote | **SKIPPED_AUTH** — wiki remote not found (wiki not enabled / needs admin) |
| Miraheze / ShoutWiki / Telepedia / WikiOasis / EditThis / Wiki.js / GitBook / Neocities / others | signup | **SKIPPED_CAPTCHA** (no login prompts sent) |
| Wikipedia family / Bulbapedia / SCP / TV Tropes / unrelated game wikis | refused | **DO_NOT_CREATE** |

## Seed batch keys
home, directory, rankings, resources, knowledge, wiki, research, evomanias, contact, cyntara, otmadness, taleon, nostalrius, rexia, oxygenot, iglaots, 12-anos-online, serenian-rubinot, baiak-ilusion, gunzodus, treasura, calmera, sandots, paulistinhaot, miracle-7-4

## Next when auth handoffs are unlocked
1. Enable GitHub Wiki in repo settings (admin), then push `seed-batch/markdown`
2. Miraheze + Neocities for our own OT research space
3. Walk each `PLATFORM_QUEUES/*.md` seed list, then expand from pack archive
