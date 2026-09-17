# Gradual external wiki publish queue

Account: `support@opentibiaservers.com`

## Status
- [x] Source articles generated (markdown + MediaWiki via `generate-server-wikis.mjs`)
- [ ] Live on opentibiaservers.com `/wiki/{slug}` (ship with app deploy; auth-free)
- [ ] **GitHub Wiki (repo wiki) — DEFERRED (auth)**
- [ ] **Miraheze OT wiki — DEFERRED (auth)**
- [ ] **TibiaWiki / Tibia Fandom — DEFERRED (auth)** (only where OT pages are allowed)
- [ ] **wiki.gg / OT community wikis — DEFERRED (auth)** if invited
- [ ] Other external hosts (Fandom farms, GitLab Wiki, etc.) — **DEFERRED (auth)**

## Do not publish
Wikipedia, Wiktionary, Bulbapedia, Wookieepedia, SCP, TV Tropes, unrelated game wikis.

## Cadence
Prefer on-site `/wiki` first. External hosts wait until login/credentials are available; then publish in batches of 10–25 pages per host after account verify.
