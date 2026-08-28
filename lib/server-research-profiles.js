const profiles = {
  amonot: {
    summary: 'AmonOT is a Retro Open PvP server running client 15.11.00. Its official information describes staged progression, tasks, addon bonuses, guild wars, a player market, character auctions, and rotating boss and creature boosts.',
    features: ['Experience stages taper from 600x early progression to 0.3x at high levels.', 'VIP and loyalty systems, tasks, guild wars, and character auctions.', 'Short protection and frag-duration settings compared with slower retro worlds.'],
    sources: [{ label: 'AmonOT server information', href: 'https://amonot.online/serverinfo?lang=en' }, { label: 'AmonOT wiki', href: 'https://amonot.online/wiki/' }],
  },
  'aurera-global': {
    summary: 'Aurera Global is a Retro-PvP project with multiple worlds and a history dating to approximately 2014. Public server material highlights Castle Siege, Arena War, roulette, bestiary and task systems, map extensions, and PvP statistics.',
    features: ['Castle Siege lets guilds attack defenses and hold a throne.', 'Arena War, bestiary, tasks, and roulette provide additional progression loops.', 'Exact current protocol and population require confirmation from the live service.'],
    sources: [{ label: 'Aurera Global server information', href: 'https://aurera-global.com/?view=informacoes_do_servidor' }, { label: 'Aurera Global event guide', href: 'https://wiki.aurera-global.com/index.php/events/castle-siege?lang=en' }],
  },
  'baiak-icewar': {
    summary: 'Baiak Icewar is a custom Baiak server built around client 8.60 and Open PvP. Its public server material emphasizes an integrated cast system alongside minigames, bosses, VIP tasks, Castle 24, Safezone, Firestorm, Lottery, and Golden Arena.',
    features: ['Integrated cast and broadcast system documented by the official site.', 'Custom activity mix including minigames, bosses, tasks, and arenas.', 'Launch date and current rates require live owner confirmation.'],
    sources: [{ label: 'Baiak Icewar cast system', href: 'https://sv.baiak-icewar.com/?subtopic=castsystem' }, { label: 'Baiak Icewar listing', href: 'https://otarchive.com/server/62cde2f41770eac22ec6ad02' }],
  },
  'baiak-ilusion': {
    summary: 'Baiak Ilusion is a Brazil-hosted 8.60 Baiak server with Open PvP and a custom combat and progression layer. Its documented systems include offline training, cast, dodge, critical, reflect and fatal modifiers, weapon upgrades, autoloot, and City War across more than ten maps.',
    features: ['City War supports competitive play across 10+ maps.', 'Custom client outfits and mounts, weapon upgrades, autoloot, and anti-rollback.', 'Ilusion launched in 2016; a separate BR world was reported in 2025.'],
    sources: [{ label: 'Baiak Ilusion official site', href: 'https://baiak-ilusion.com/' }, { label: 'Baiak Ilusion server record', href: 'https://otarchive.com/server/62cde2f41770eac22ec6acfa' }],
  },
  calmera: {
    summary: 'Calmera is a private OTC-based project with Anthera and Emporium worlds. Public information describes optional PvP, global and VIP maps, 300x experience, 3x loot, instances on Anthera, and an open player-to-player economy on Emporium.',
    features: ['Anthera has instances while Emporium centers an open player economy.', 'The CTC launcher includes an integrated bot.', 'Anthera and Emporium were reported as launching in 2021 and 2025.'],
    sources: [{ label: 'Calmera official site', href: 'https://calmera.com.br/' }],
  },
  cyleria: {
    summary: 'Cyleria is a Polish 8.60 server for PC and Android that advertises persistent progression without resets. Its official material highlights equipment enhancement, level rewards, a marketplace, character bazaar, raids, events, and Tower Siege.',
    features: ['Tower Siege provides a competitive guild event.', 'Equipment enhancement and level rewards support long-term progression.', 'The official site describes activity and updates since November 2020.'],
    sources: [{ label: 'Cyleria server information', href: 'https://cyleria.pl/?subtopic=serverinfo' }, { label: 'Cyleria systems wiki', href: 'https://cyleria.pl/?subtopic=cyleriopedia' }, { label: 'Cyleria Tower Siege', href: 'https://cyleria.pl/?subtopic=tower_siege' }],
  },
  demolidores: {
    summary: 'Demolidores is a Brazilian custom 8.60/global-map PvP server associated with a very large realmap.otbm map. Public records describe a 65,000 by 65,000 map, portals, a custom client, and 999x experience.',
    features: ['The advertised map is attributed to Allan Rizzotti.', 'Portals and custom-client access shape the global-map experience.', 'The project is publicly described as operating since 2006, though current status needs confirmation.'],
    sources: [{ label: 'Demolidores server record', href: 'https://otarchive.com/server/62cde2f41770eac22ec6ad66' }, { label: 'Demolidores official site', href: 'https://demolidores.com.br' }],
  },
  evolunia: {
    summary: 'Evolunia is a mid-rated teleport server on client 10.98 with staged experience, 18x skills, 1x loot, and 10x magic. Its distinctive progression uses bestiary points, permanent buffs, orb bonuses, equipment crystals, charms, attributes, custom zones, bosses, and Capture the Flag.',
    features: ['Bestiary points unlock permanent character buffs.', 'Equipment crystals, charms, attributes, and custom zones extend progression.', 'The official server page showed 241 players during research.'],
    sources: [{ label: 'Evolunia server information', href: 'https://evolunia.net/?serverInfo' }, { label: 'Evolunia wiki', href: 'https://evolunia.net/tempwiki' }],
  },
  exordion: {
    summary: 'Exordion is a custom 7.4 project with a Bravora world and an official player wiki. Its documented systems include rarity, crafting, elite monsters, raids, daily bosses, dungeons, sacrifice, bestiary, and raid cooldown tracking.',
    features: ['Rarity and crafting systems add item progression beyond the base client.', 'Daily bosses, dungeons, and elite raids structure endgame activity.', 'Official pages do not confirm a formal PvP subtype.'],
    sources: [{ label: 'Exordion official site', href: 'https://exordion.com.br' }, { label: 'Exordion wiki', href: 'https://exordion.gitbook.io/exordion-wiki' }],
  },
  ezodus: {
    summary: 'Ezodus is a real-map server associated with 10.x, 14.12, and 15.22 clients and Retro PvP. Its current public feature set includes Wheel of Destiny, Exaltation Forge, modern Soul War and Rotten Blood content, Castle Wars, scheduled PvP events, and level-100 loss protection.',
    features: ['Multi-client support spans classic and modern protocol eras.', 'Wheel of Destiny, Exaltation Forge, and modern quest content support late-game progression.', 'The official site requires live verification for current season and population details.'],
    sources: [{ label: 'Ezodus official site', href: 'https://www.ezodus.net' }, { label: 'Ezodus public server record', href: 'https://nostalgic.gg/en/tibia/ezodus' }],
  },
  gunzodus: {
    summary: 'Gunzodus is a long-running real-map Retro-PvP server with custom items, cities, islands, world bosses, Bestiary, Charms, guild wars, and castle wars. Its no-bot dungeon system changes eight hunting grounds and adds experience and proficiency bonuses.',
    features: ['No-bot dungeons provide altered hunting grounds and escalating special monsters.', 'Dungeon bonuses include 30% experience and 25% proficiency experience.', 'The official site showed 551 online during research.'],
    sources: [{ label: 'Gunzodus custom systems', href: 'https://gunzodus.gunzo.eu/custom/wiki' }, { label: 'Gunzodus dungeons', href: 'https://gunzodus.gunzo.eu/custom/wiki/dungeons' }],
  },
  iglaots: {
    summary: 'IglaOTS is a Retro-PvP server family with Season, Offseason, and Lowrate variants. Its published systems include a reworked Task Board, Forge, Enchanting, hourly Igla Tokens, Loyalty rewards, Global Charms, personal boss loot, Nemesis bosses, and reworked monsters.',
    features: ['Nemesis bosses are advertised with 100x experience.', 'Separate Season, Offseason, and Lowrate worlds support different pacing.', 'The official service was Cloudflare-protected during research, so launch details remain unconfirmed.'],
    sources: [{ label: 'IglaOTS FAQ', href: 'https://wiki.iglaots.net/categories/faq' }, { label: 'IglaOTS changelog', href: 'https://wiki.iglaots.net/categories/changelog' }],
  },
  ixodus: {
    summary: 'Ixodus is publicly listed as a Polish 15.0 PvP project with 60x experience. Its reported systems include castle and guild wars, custom items, addon bonuses, imbuements, Prey, Honor, Cast, unique quests, Warzones 7–9, and scheduled events.',
    features: ['Warzones 7–9 and guild/castle wars are the main advertised competitive hooks.', 'Prey, Honor, Cast, imbuements, and addon bonuses extend character building.', 'Official PvP rules and current status need direct confirmation.'],
    sources: [{ label: 'Open Tibia server directory', href: 'https://opentibiaservers.com/' }, { label: 'Ixodus official site', href: 'https://www.ixodus.net/' }],
  },
  kaldrox: {
    summary: 'Kaldrox is publicly described as an 8.60 PvP-focused project with a large custom/global map, staged experience, VIP attributes, quests, and events. Public records report a 65,000 by 65,000 map with more than 191,000 monsters and 1,408 NPCs.',
    features: ['Very large map and entity counts are central to the advertised scale.', 'Staged rates, VIP attributes, quests, and events support high-volume progression.', 'Launch and current rules require official confirmation.'],
    sources: [{ label: 'Kaldrox public server record', href: 'https://nostalgic.gg/en/tibia/kaldrox-server' }, { label: 'Kaldrox official site', href: 'https://kaldrox.com/' }],
  },
  miracle74: {
    summary: 'Miracle74 is a hardcore long-term 7.4 PvP world with 1x rates. Its documented identity centers on reconstructed classic mechanics plus Attribution and Relic Box systems, Bestiary and Charms, crafting plans, and rotating Ankrahmun tomb access.',
    features: ['Classic 7.4 pacing is paired with modernized Attribution and Relic Box systems.', 'Bestiary, Charms, and planned crafting extend the low-rate progression loop.', 'The official server page showed an operating world during research.'],
    sources: [{ label: 'Miracle74 about the server', href: 'https://www.miracle74.com/?subtopic=aboutus' }, { label: 'Miracle74 server information', href: 'https://www.miracle74.com/?subtopic=serverinfo' }],
  },
  nostalrius: {
    summary: 'Nostalrius is a 7.4 Retro Open-PvP project with multiworld proxy hosting and a documented war system. Its systems include staged rates, stamina-linked experience and loot, auto-raids, daily bosses, forge tiers, party-task bonuses, and Desert Quest Solo.',
    features: ['Frag thresholds and banishment rules are explicitly documented.', 'Auto-raids, daily bosses, forge tiers, and party tasks add structured progression.', 'The official site announced a new world in June 2026.'],
    sources: [{ label: 'Nostalrius server information', href: 'https://home.nostalrius.com.br/serverinfo' }, { label: 'Nostalrius wiki', href: 'https://wiki.nostalrius.com.br' }],
  },
  noxiousot: {
    summary: 'NoxiousOT is an active custom 8.60 server with a modified real map, ten custom hunting islands, randomized Diablo-style Magic Items, addon bonuses, markets, bounty hunting, casino systems, and PC and Android clients.',
    features: ['Randomized item bonuses create a distinct loot hunt.', 'Team Deathmatch, Capture the Flag, King of the Hill, Zombie, wars, and bounty hunting support PvP.', 'Live statistics and ongoing news are published on the official site.'],
    sources: [{ label: 'NoxiousOT server information', href: 'https://www.noxiousot.com/index.php?subtopic=serverinfo' }, { label: 'NoxiousOT public record', href: 'https://nostalgic.gg/en/tibia/noxiousot' }],
  },
  oxygenot: {
    summary: 'OxygenOT is a free-to-play custom world with a proprietary Windows and Android client. Its official wiki describes crafting, fishing, daily chests and tasks, attribute points, item upgrading, dynamic spawns, custom dungeons, boss mechanics, and Open PvP protection rules.',
    features: ['Fully custom world and client rather than a conventional numbered protocol.', 'Crafting, fishing, upgrading, dynamic spawns, dungeons, and bosses shape progression.', 'Battlefield and Capture the Flag events complement Open PvP.'],
    sources: [{ label: 'OxygenOT server information', href: 'https://oxygenot.live/serverinfo' }, { label: 'OxygenOT wiki', href: 'https://oxygenot.live/wiki' }, { label: 'OxygenOT changelog', href: 'https://oxygenot.live/changelog' }],
  },
  paulistinhaot: {
    summary: 'PaulistinhaOT is a Brazilian 15.30 multiworld network. Arkadia, Dominium, and Lordebra provide Open-PvP, Retro-PvP, and Optional-PvP choices, while the feature set includes Roulette, Mystery Bag, Weapon Proficiency, scalable bosses, Echo Raids, Discovery, weekly tasks, and Targuna.',
    features: ['Three worlds offer distinct PvP rules and progression identities.', 'Weapon Proficiency, Echo Guardians, Discovery, and weekly tasks support long-term goals.', 'Official news and world pages provide the current launch context.'],
    sources: [{ label: 'PaulistinhaOT worlds', href: 'https://paulistinhaot.com/?subtopic=worlds' }, { label: 'PaulistinhaOT server information', href: 'https://paulistinhaot.com/?subtopic=serverinfo' }, { label: 'PaulistinhaOT news', href: 'https://paulistinhaot.com/?subtopic=news' }],
  },
  realera: {
    summary: 'Realera is a classic 8.0-style project with Spectrum and Warfare worlds. Its documented systems include staged experience, 4x spawns, stamina, daily sieges with level-gated locations and rewards, and explicit Open-PvP frag and banishment rules.',
    features: ['Daily sieges provide level-gated competitive locations and rewards.', 'PvP documentation covers red skulls, banishment, white skull duration, and kill bans.', 'Current world status and original launch date require confirmation.'],
    sources: [{ label: 'Realera game features', href: 'https://realera.org/about/game-features' }, { label: 'Realera wiki', href: 'https://wiki.realera.org/Main_Page' }, { label: 'Realera siege guide', href: 'https://wiki.realera.org/Sieges' }],
  },
  rexia: {
    summary: 'Rexia is an 8.60 4FUN RPG High-EXP EVO server with Optional PvP and long-term no-reset positioning. Its distinctive systems include Reborn, item markets, character auctions, house building, and an Addict System that rewards cumulative playtime.',
    features: ['The Addict System awards premium points for sustained playtime.', 'Reborn progression, markets, auctions, and house building define the EVO loop.', 'The official site reports years of operation without character resets.'],
    sources: [{ label: 'Rexia server information', href: 'https://rexia.pl/?subtopic=serverinfo' }, { label: 'Rexia Addict System', href: 'https://rexia.pl/?subtopic=addict' }, { label: 'Rexia systems', href: 'https://rexia.pl/systems' }],
  },
  rubinot: {
    summary: 'RubinOT is a multiworld network with Open PvP, Optional PvP, and Retro PvP worlds. Its official resources document Battle Pass, Boosted Exercise, Cosmetic Cards, Equipment Presets, Huntfinder, Linked Tasks, Obelisk, Prestige Arena, Drop System, World Transfer, and collectible Rubini items.',
    features: ['The live network offers 15 worlds across three PvP modes.', 'Battle Pass, Huntfinder, Linked Tasks, Obelisk, and Prestige Arena create a layered progression path.', 'Official wiki material references Battle Pass Season 4 and annual events.'],
    sources: [{ label: 'RubinOT official site', href: 'https://rubinot.com/' }, { label: 'RubinOT wiki', href: 'https://wiki.rubinot.com/en' }, { label: 'RubinOT Drop System', href: 'https://wiki.rubinot.com/en/sistema-de-drops' }],
  },
  sandots: {
    summary: 'SandOTS, also known as Dark Sand, is a high-experience EVO server with fast attack and a large collection of progression systems. Public official pages describe Reborn, task points, dungeons, daily bosses, hunting arena, automatic loot, addon fountains, head-hunter, war, and customizable house floors.',
    features: ['PvP unlocks at level 5,000 with explicit protection and PZ timers.', 'Reborn, dungeons, daily bosses, and task points structure the high-rate loop.', 'The official changelog showed continuing updates during research.'],
    sources: [{ label: 'SandOTS FAQ', href: 'https://sandots.eu/?subtopic=faq' }, { label: 'SandOTS Reborn system', href: 'https://sandots.eu/?subtopic=reborn' }, { label: 'SandOTS dungeon system', href: 'https://sandots.eu/?subtopic=dungeon' }],
  },
  taleon: {
    summary: 'Taleon Online uses separate worlds with different onboarding and access expectations. Aura Lite offers higher experience, 3x loot, unlocked imbuements, and shortcuts, while San requires most accesses and imbuements; both current worlds are described as Optional PvP.',
    features: ['Aura Lite and San provide distinct difficulty and access models.', 'Aura Lite focuses on faster onboarding and convenience.', 'San preserves a more access-driven progression path.'],
    sources: [{ label: 'Taleon Aura Lite', href: 'https://aura.taleon.online' }, { label: 'Taleon San', href: 'https://san.taleon.online' }, { label: 'Taleon official site', href: 'https://www.taleon.online/' }],
  },
  underwar: {
    summary: 'UnderWar 2.0 is an Old-Tibia project positioned around war and RPG play. Public material confirms its war-focused identity, but the official site does not currently expose enough detail to verify a precise protocol, custom systems, or PvP rules.',
    features: ['Old-Tibia and war/RPG positioning are the strongest confirmed identity signals.', 'Protocol, launch date, and detailed rules remain open verification fields.', 'Players should confirm current client and account information on the official site.'],
    sources: [{ label: 'UnderWar official site', href: 'https://www.underwar.org/' }, { label: 'UnderWar public listing', href: 'https://tibiaotlist.com/servers/go-underwar-org' }],
  },
};

export function getServerResearchProfile(slug) {
  return profiles[String(slug || '').toLowerCase()] || null;
}
