-- GitHub resource hub seed (links only; no OTLand scrape)
-- Requires ots_seed_forum_topic from 015.

SELECT public.ots_seed_forum_topic(
  $ots$downloads$ots$,
  $ots$github-resource-hub-policy$ots$,
  $ots$RULE: GitHub-first shares + VirusTotal for binaries$ots$,
  $ots$ResourceCurator$ots$,
  $ots$This site catalogs open-source OT engines, clients, OTBM tools, and datapacks by linking upstream GitHub.

Allowed: public GitHub repos/releases you own or that are open-source; your own screenshots; clear license + compatibility.

Required for any binary/zip: filename, version, SHA-256, VirusTotal URL for that hash, license.

Not allowed: scraping or rehosting OTLand forum posts, galleries, or attachment packs.

Browse the live catalog: /resources$ots$,
  true,
  9000,
  $ots$[]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$distributions$ots$,
  $ots$github-canary-datapack-map$ots$,
  $ots$Canary engine + global datapack + OTBM (GitHub)$ots$,
  $ots$ResourceCurator$ots$,
  $ots$Upstream GPL-2.0: https://github.com/opentibiabr/canary

Includes engine, data-otservbr-global (monsters/NPCs/quests/scripts/world), data-canary, and map assets via GitHub Releases.

Client: https://github.com/opentibiabr/otclient
Map editor: https://github.com/opentibiabr/remeres-map-editor

If you redistribute a Release zip, attach VirusTotal + SHA-256 for that exact file.$ots$,
  true,
  8800,
  $ots$[]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$maps$ots$,
  $ots$github-rme-otbm-toolchain$ots$,
  $ots$OTBM toolchain: Remere Map Editor + OTBM2JSON$ots$,
  $ots$Mapwright$ots$,
  $ots$1) Remere's Map Editor: https://github.com/hampusborgos/rme
2) OpenTibiaBR RME fork: https://github.com/opentibiabr/remeres-map-editor
3) OTBM2JSON (MIT): https://github.com/Inconcessus/OTBM2JSON

Map release checklist: GitHub URL, engine target, screenshots, license, and VirusTotal+SHA-256 if you attach a zip.$ots$,
  true,
  8700,
  $ots$[]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tools$ots$,
  $ots$github-tfs-engine-hub$ots$,
  $ots$TFS engine â€” otland/forgottenserver$ots$,
  $ots$RuneCartographer$ots$,
  $ots$https://github.com/otland/forgottenserver (GPL-2.0)

Pair with edubart/otclient or opentibiabr/otclient, and RME for maps. Clone from GitHub â€” do not mirror random forum attachment packs.$ots$,
  false,
  8600,
  $ots$[]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$monsters-npcs-raids$ots$,
  $ots$github-canary-monsters-npcs$ots$,
  $ots$Monsters / NPCs / raids from Canary datapacks$ots$,
  $ots$Spellforge$ots$,
  $ots$https://github.com/opentibiabr/canary/tree/main/data-otservbr-global
https://github.com/opentibiabr/canary/tree/main/data-canary

Publish your own packs on GitHub with license + engine notes; VirusTotal if you ship a zip.$ots$,
  false,
  8500,
  $ots$[]$ots$::jsonb
);

SELECT public.ots_seed_forum_topic(
  $ots$tutorials$ots$,
  $ots$how-to-publish-ot-resource-ots$ots$,
  $ots$How to publish a map/datapack here (GitHub-first)$ots$,
  $ots$TempleGuard$ots$,
  $ots$1) Put the project on GitHub with a LICENSE.
2) README: engine, client, install steps, screenshots.
3) Prefer GitHub Releases for zips.
4) Forum thread fields: what it is, GitHub URL, license, compatibility, screenshots, VirusTotal+SHA-256 if binary/zip.
5) Do not paste other forums' thread bodies or rehost their attachments.

Catalog: /resources$ots$,
  true,
  8400,
  $ots$[]$ots$::jsonb
);
