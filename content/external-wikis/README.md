# External wiki publishing pack

Generated **509** server articles in:

- `markdown/` — on-site `/wiki/{slug}`, Wiki.js, GitBook, Notion paste
- `mediawiki/` — Fandom/Miraheze/wiki.gg when auth publishing is unblocked

Every article links back to:

- Exact profile: `https://opentibiaservers.com/{slug}`
- On-site wiki: `https://opentibiaservers.com/wiki/{slug}`
- Directory: `https://opentibiaservers.com/directory`
- Homepage: `https://opentibiaservers.com`

## Auth-deferred hosts

GitHub Wiki, Miraheze, Fandom, and other login-gated hosts are **DEFERRED** until credentials are available. Prefer on-site `/wiki` first.

## Regenerate

```bash
node generate-server-wikis.mjs
```
