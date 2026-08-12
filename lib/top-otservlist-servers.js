import { buildServerSlug } from './server-paths.js';
import { getServerCurationPack } from './server-curation-packs.js';

const snapshotDate = '2026-07-26';
const sourceUrl = 'https://otservlist.org/list-server_players_online-desc.html';

const rows = [
  ['The Best Global 8.60', 'sv.kaldrox.com', 'Brazil', 2335, 2000, 99.66, 279, 100, 'PVP', '8.6'],
  ['Aurera Global', 'play.aurera-global.com', 'Brazil', 2018, 2000, 99.3, 279, 200, 'PVP', '15.0'],
  ['Serenian RubinOT', 'serenian1.rubinot.com.br', 'Brazil', 840, 2000, 96.97, 187, 80, 'nPVP', '15.0'],
  ['Baiak Ilusion', 'sv.baiak-ilusion.com.br', 'Brazil', 778, 2000, 99.1, 268, 400, 'PVP', '8.6'],
  ['Belaria RubinOT', 'belaria.rubinot.com.br', 'Brazil', 778, 2000, 95.14, 253, 80, 'PVP', '15.0'],
  ['Cyleria', 'go.cyleria.pl', 'Poland', 764, 2000, 99.53, 266, 300, 'PVP', '8.6'],
  ['Solarian RubinOT', 'solarian.rubinot.com.br', 'Brazil', 764, 2000, 96.84, 236, 80, 'nPVP', '15.0'],
  ['Nostalrius', 'play.nostalrius.com.br', 'Brazil', 752, 2000, 98.63, 168, 12, 'PVP', '7.4'],
  ['Elysian RubinOT', 'elysian.rubinot.com.br', 'Brazil', 750, 2000, 96.59, 264, 80, 'nPVP', '15.0'],
  ['Tenebrium RubinOT', 'tenebrium.rubinot.com.br', 'Brazil', 731, 2000, 90.66, 243, 80, 'PVP', '15.0'],
  ['Serenian3 RubinOT', 'serenian3.rubinot.com.br', 'Brazil', 666, 2000, 97.39, 183, 80, 'nPVP', '15.0'],
  ['OxygenOT', 'login.oxygenot.live', 'Sweden', 623, 1000, 99.03, 259, 50, 'PVPe', 'n/a'],
  ['Serenian2 RubinOT', 'serenian2.rubinot.com.br', 'Brazil', 619, 2000, 97.04, 182, 80, 'nPVP', '15.0'],
  ['Demolidores', 'sv.demolidores.com.br', 'Brazil', 612, 2000, 98.94, 263, 999, 'PVP', '8.6'],
  ['Serenian4 RubinOT', 'serenian4.rubinot.com.br', 'Brazil', 591, 2000, 98.33, 180, 80, 'nPVP', '15.0'],
  ['Rexia', 'rexia.pl', 'Poland', 581, 1630, 99.93, 261, 9999, 'FUN', '8.6'],
  ['Mystian RubinOT', 'mystian.rubinot.com.br', 'Brazil', 577, 2000, 92.55, 252, 80, 'nPVP', '15.0'],
  ['Lunarian RubinOT', 'lunarian.rubinot.com.br', 'Brazil', 529, 2000, 93.73, 252, 80, 'nPVP', '15.0'],
  ['Auroria RubinOT', 'auroria.rubinot.com.br', 'Brazil', 460, 2000, 93.06, 250, 80, 'PVP', '15.0'],
  ['PBotWars', 'sv.pbotwars.com.br', 'Brazil', 455, 1000, 94.99, 254, 350, 'PVP', '8.6'],
  ['Vestia', 'login.vestia.pl', 'Poland', 389, 1400, 98.96, 221, 300, 'PVP', '8.6'],
  ['Vesperia RubinOT', 'vesperia.rubinot.com.br', 'Brazil', 382, 2000, 92.07, 238, 80, 'PVP', '15.0'],
  ['Spectrum RubinOT', 'spectrum.rubinot.com.br', 'Brazil', 352, 2000, 92.87, 244, 80, 'PVP', '15.0'],
  ['Treasura', 'srv.treasura.online', 'USA', 337, 1500, 99.9, 129, 1, 'PVP', '8.0'],
  ['Canob', 'tibia.canob.us', 'USA', 326, 1000, 99.57, 248, 1000, 'PVP', '8.6'],
  ['12 Anos Online', 'play.aurera-global.com', 'Brazil', 2022, 2000, 99.28, 279, 200, 'PVP', '15.0', '12 ANOS ONLINE', 849, '1594733', 7173],
  ['NoxiousOT', 'noxiousot.com', 'USA', 302, 2000, 99.85, 218, 10, 'PVP', '8.6'],
  ['Bellum RubinOT', 'bellum.rubinot.com.br', 'Brazil', 288, 2000, 95.82, 243, 80, 'PVP', '15.0'],
  ['Unline', 'status.unline.org', 'USA', 231, 2000, 99.41, 189, 100, 'PVP', '14.0'],
  ['Evolunia', 'status.evolunia.net', 'Sweden', 228, 2000, 99.82, 210, 100, 'PVPe', '10.98'],
  ['Netunia', 'netunia.net', 'Mexico', 223, 1000, 99.71, 208, 2500, 'PVP', '8.6'],
  ['Anubis AMONOT', 'anubis.amonot.online', 'Brazil', 219, 1000, 99.62, 126, 600, 'PVP', '15.0'],
  ['Exordion', 'game.exordion.com.br', 'Brazil', 213, 2000, 99.61, 230, 1, 'PVP', '7.4'],
  ['Olympic 7.4', 'game.olympic74.com', 'USA', 209, 2000, 98.71, 140, 10, 'PVP', '7.4'],
  ['Miracle 7.4', 'go.miracle74.com', 'Brazil', 196, 1000, 98.28, 232, 1, 'PVP', '7.4'],
  ['MelhorOT', 'go.melhorot.com.br', 'Brazil', 183, 2000, 98.36, 177, 999, 'nPVP', '15.0'],
  ['Calmera', 'servers.calmera.com.br', 'Brazil', 147, 2000, 98.97, 228, 400, 'nPVP', '15.0'],
  ['Marlboro War', 'login.marlboro-war.net', 'Mexico', 142, 300, 99.35, 195, 999, 'WAR', '8.6'],
  ['MazeOT', 'status.mazeot.online', 'Brazil', 142, 2000, 99.62, 182, 600, 'nPVP', '15.0'],
  ['BaiakSP', 'sv.baiaksp.com.br', 'Brazil', 135, 1200, 98.74, 193, 99999, 'PVP', '8.6'],
  ['Celenium RubinOT', 'cellenium.rubinot.net', 'France', 119, 2000, 95.55, 175, 80, 'PVP', '15.0'],
  ['AlphaOT', 'sv.alphaot.com.br', 'Brazil', 109, 2000, 99.81, 181, 80, 'PVP', '8.6'],
  ['Heroserv', 'heroserv.com', 'Brazil', 95, 1000, 99.58, 184, 1000, 'PVP', '8.6'],
  ['Gunzodus', 'login.gunzodus.net', 'Poland', 94, 2000, 99.64, 218, 15, 'PVP', '15.0'],
  ['Alastera', 'alastera.com', 'Poland', 90, 1000, 99.76, 213, 1500, 'PVP', '8.6'],
  ['LightOT', 'light.myddns.me', 'Brazil', 86, 500, 96.67, 154, 9999, 'PVP', '8.6'],
  ['TibiaFunEvo', 'tibiafunevo.hopto.org', 'Poland', 76, 200, 98.76, 152, 100, 'PVP', '7.6'],
  ['Grimhaven', 'login.grimhaven.net', 'USA', 75, 2000, 91.98, 173, 30, 'PVP', '8.6'],
  ['Prestige Imperia', 'prestige-imperia.sytes.net', 'Mexico', 72, 500, 99.56, 177, 99999, 'PVP', '8.6'],
  ['Paulistinha Dominium', 'dominium.paulistinhaot.com', 'Brazil', 119, 2000, 99.21, 165, 90, 'PVP', '15.2'],
  ['Eldera Calmera', 'eldera.calmera.com.br', 'Brazil', 116, 2000, 99.33, 144, 300, 'PVP', 'n/a'],
  ['Osiris HorusBR', 'osiris.horusbr.online', 'Brazil', 114, 1000, 47.17, 84, 25, 'PVP', 'n/a'],
  ['LoucoServ', 'loucoserv.com', 'Brazil', 113, 1000, 98.15, 133, 800, 'PVP', '8.6'],
  ['VisionOT', 'play.visionot.online', 'Canada', 108, 2000, 98.45, 166, 1, 'nPVP', 'n/a'],
  ['Lordebra Paulistinha', 'lordebra.paulistinhaot.com', 'Brazil', 101, 2000, 99.6, 188, 90, 'nPVP', '15.2'],
  ['SaboorBaiak', 'saboorbaiak.com', 'Brazil', 101, 2000, 67.92, 122, 500, 'PVP', '15.1'],
  ['Blacktalon Online', 'international.blacktalon.online', 'USA', 98, 650, 99.17, 109, 99, 'PVP', 'n/a'],
  ['AiolosOT', 'game.aiolosot.com.br', 'Brazil', 85, 2000, 99.83, 157, 99999, 'nPVP', '15.0'],
  ['ValeriaOT', 'play.valeriaot.com', 'Sweden', 82, 1000, 98.93, 172, 300, 'PVP', '15.2'],
  ['Blazera', 'go.blazera.net', 'USA', 71, 2000, 99.29, 206, 50, 'PVP', '8.6'],
  ['Ravox Monk OT', 'www.ravox-monk-ot.com.br', 'Brazil', 70, 2000, 64.11, 150, 90, 'PVP', '15.0'],
  ['Imperia ArcanaOT', 'imperia.arcanaot.com', 'Brazil', 70, 2000, 99.43, 127, 500, 'PVP', '15.0'],
  ['Tibinha YurOTS', 'tibinha.com', 'Brazil', 68, 150, 99.4, 172, 20, 'PVP', '7.4'],
  ['SanctumOT', 'sanctumot.com', 'Brazil', 68, 1000, 99.8, 132, 5, 'PVP', '7.4'],
  ['XNovaOT', 'play.xnovaot.se', 'Sweden', 66, 2000, 98.99, 144, 10, 'PVP', '15.1'],
  ['FeruOTS', 'play.feruots.eu', 'Poland', 66, 2000, 99.31, 113, 25, 'PVP', '15.2'],
  ['Taleon SanPvP', 'sanpvp.taleon.online', 'Brazil', 64, 2000, 94.28, 180, 25, 'nPVP', '15.0'],
  ['KimeraOT', 'on.kimeraot.com.br', 'Brazil', 64, 2000, 98.91, 175, 9999, 'nPVP', '13.4'],
  ['SpiderOT', 'eu.spider-server.com', 'Sweden', 63, 1000, 99.57, 175, 999, 'PVP', 'n/a'],
  ['TibiaFun', 'tibiafun.hopto.org', 'Poland', 63, 300, 99.07, 157, 10, 'PVP', '7.6'],
  ['Cyntara', 'cyntara.org', 'USA', 61, 1000, 99.66, 177, 500, 'PVP', 'n/a'],
  ['Ravnica Pazzur', 'pazzur.sytes.net', 'Mexico', 61, 2000, 98.41, 165, 40, 'PVP', '8.6'],
  ['ModukOT', 'season.modukot.com', 'Brazil', 58, 2000, 99.47, 66, 100, 'nPVP', '15.0'],
  ['Taleon AuraPvP', 'aurapvp.taleon.online', 'Brazil', 56, 2000, 92.22, 171, 80, 'nPVP', '15.0'],
  ['Hellgate Global', 'list.hellgate-global.com.br', 'Brazil', 48, 2000, 95.84, 166, 9999, 'PVP', '15.1'],
  ['CrowOT', 'sv.crowot.com', 'Brazil', 48, 2000, 100, 44, 99999, 'PVP', '8.6'],
  ['UnderWar', 'go.underwar.org', 'Brazil', 47, 2000, 98.94, 206, 15, 'PVP', '8.6'],
  ['Rezoria', 'rezoria.eu', 'Poland', 47, 1000, 99.79, 160, 100, 'PVP', '8.6'],
  ['Middle Earth Server', 'play.middleearth-server.com', 'Brazil', 47, 999, 98.72, 70, 10, 'PVP', '10.0'],
  ['Exordion Legacy', 'legacy.exordion.com.br', 'Brazil', 46, 2000, 99.4, 158, 2, 'PVP', '7.4'],
  ['Paulistinha Deletera', 'deletera.paulistinhaot.com', 'Brazil', 45, 2000, 99.26, 160, 90, 'PVP', '15.2'],
  ['Vestia Forever', 'login.vestia.pl', 'Poland', 43, 1400, 99.55, 145, 300, 'PVP', '8.6'],
  ['MadOT Oasis', 'oasis.madot.com.br', 'Brazil', 42, 2000, 98.52, 164, 99999, 'nPVP', '15.0'],
  ['Dura Online', 'c01.dura-online.com', 'USA', 41, 2000, 99.12, 199, 1, 'PVP', '7.4'],
  ['FalumirOT', 'sv.falumirot.com.br', 'Brazil', 41, 300, 97.15, 159, 100, 'PVP', '8.6'],
  ['MoouseOT', 'sv.moouseot.com.br', 'Brazil', 41, 2000, 97.38, 134, 400, 'PVP', '15.0'],
  ['ResetWar Fusion', 'resetwar-fusion.ddns.net', 'Brazil', 40, 500, 99.57, 39, 9999, 'PVP', '8.6'],
  ['Eloria', 'eloria.pl', 'Poland', 39, 2000, 99.58, 167, 500, 'PVP', '15.0'],
  ['FoxWorld Server 1', 'sv1.foxworldserver.com', 'Brazil', 39, 200, 98.97, 140, 300, 'PVP', '8.6'],
  ['ReaperOT', 'sv1.reaperot.org', 'Brazil', 39, 1000, 98.5, 141, 15, 'PVP', '8.6'],
  ['OT Mobile Resets', 'otcripstugs.resentech.co', 'Brazil', 29, 1000, 99.55, 57, 9999, 'PVP', '8.6'],
  ['PrimOT', 'sv.primot.com.br', 'Brazil', 28, 1200, 98.82, 157, 100, 'PVP', '8.6'],
  ['Papot Retro', 'server.papotretro.com.br', 'Brazil', 28, 1000, 99.95, 115, 1, 'PVP', '7.4'],
  ['Serverlandia', 'serverlandia.com', 'Brazil', 27, 500, 99.83, 49, 10, 'PVP', '7.4'],
  ['ArmiA Toproste', 'armia.toproste.pl', 'Poland', 26, 800, 99.27, 167, 5, 'PVP', '7.6'],
  ['Amirots', 'amirots.com', 'Sweden', 26, 1000, 98.93, 153, 99999, 'FUN', '8.6'],
  ['JustRL', 'justrl.sytes.net', 'Poland', 26, 250, 97.97, 141, 2, 'nPVP', '15.2'],
  ['IglaOTS Offseason', 'play.offseason.iglaots.net', 'Poland', 24, 2000, 99.2, 151, 3, 'PVP', '15.2'],
  ['ExodusOT', 'exodusot.org', 'USA', 24, 2000, 97.37, 98, 5, 'PVP', '15.1'],
  ['Elderan NA', 'jupiter.elderan.us', 'Canada', 23, 2000, 92.48, 161, 1.5, 'PVP', '7.6'],
  ['Aquele OT', 'game.aqueleot.com', 'Brazil', 23, 2000, 99.09, 155, 100, 'nPVP', '15.2'],
  ['RelicariaOT', 'game.relicariaot.com.br', 'Brazil', 23, 2000, 99.78, 136, 600, 'nPVP', '15.2'],
];

const priorityRows = [
  ['Demolidores', 'sv.demolidores.com.br', 'Brazil', 695, 2000, 98.97, 265, 999, 'PVP', '8.6', 'BEST 8.6 PVP', 1791],
  ['The Best Global 8.60', 'sv.kaldrox.com', 'Brazil', 693, 2000, 99.67, 265, 100, 'PVP', '8.6', 'The Best Global 8.60', 2863],
  ['OxygenOT', 'login.oxygenot.live', 'Sweden', 597, 1000, 99.14, 260, 50, 'PVPe', null, 'EVO - Brazil Proxy', 878],
  ['Miracle 7.4', 'go.miracle74.com', 'Brazil', 597, 1000, 98.53, 258, 1, 'PVP', '7.4', '1x Hardcore Slowpace', 1141],
  ['AmonOT Baiak', 'baiak.amonot.online', 'Brazil', 560, 1000, 98.12, 229, 2250, 'PVP', '15.2', 'NOVO BALANCEAMENTO', 968],
  ['Gunzodus', 'login.gunzodus.net', 'Poland', 558, 2000, 99.64, 259, 150, 'PVP', '15.2', 'VOC REBALANCE LIVE', 1153],
  ['Grimoria2 RubinOT', 'grimoria2.rubinot.com.br', 'Brazil', 480, 2000, 84.34, 181, 50, 'PVP', '15.2', 'NEW OPEN-PVP 27K ON', 1743],
  ['KoliseuOT Season', 'season.koliseuot.com.br', 'Brazil', 462, 2000, 98.2, 126, 300, 'PVP', '15.2', 'OTC - BOT Liberado', 537],
  ['Rexia', 'rexia.pl', 'Poland', 449, 1545, 99.94, 256, 9999, 'FUN', '8.6', 'NO RESETS - EVO HIGH', 779],
  ['Spectrum RubinOT', 'spectrum.rubinot.com.br', 'Brazil', 442, 2000, 90.13, 221, 50, 'PVP', '15.2', '27K ON - BATTLE PASS', 3347],
  ['Grimoria3 RubinOT', 'grimoria3.rubinot.com.br', 'Brazil', 430, 2000, 84.64, 179, 50, 'PVP', '15.2', 'NEW OPEN-PVP 27K ON', 1752],
  ['Bravora Exordion', 'bravora.exordion.com.br', 'USA', 383, 2000, 99.94, 231, 1, 'PVP', '7.4', 'GLOBAL 7.4 CUSTOM', 3129],
  ['Calmera OT', 'servers.calmera.com.br', 'Brazil', 372, 2000, 98.98, 221, 400, 'nPVP', '15.0', '5y ON OTC BOT', 766],
  ['Nostalrius', 'on.nostalrius.com.br', 'Brazil', 367, 2000, 98.9, 151, 15, 'PVP', '7.4', 'Nostalrius 7.4', 715],
  ['Canob', 'tibia.canob.us', 'USA', 327, 1000, 99.58, 248, 1000, 'PVP', '8.6', 'HIGH EXP 10 YEARS ON', 590],
  ['NoxiousOT', 'noxiousot.com', 'USA', 324, 2000, 99.85, 219, 10, 'PVP', '8.6', 'NOX RLMAP 8.6', 1038],
  ['Tibia Old Limbo', 'limbo.tibia-old.com', 'Brazil', 267, 600, 98.06, 211, 20, 'FUN', '7.4', '7.4 RL OLDSCHOOL', 589],
  ['OTMadness', 'login.otmadness.com', 'USA', 261, 2000, 99.79, 210, 1500, 'FUN', null, 'START TODAY', 512],
  ['Drakoria 80', 'game.drakoria80.online', 'USA', 245, 2000, 95.74, 117, 10, 'PVP', '8.0', 'Classick Drakoria 80', 260],
  ['Baiak IceWar', 'sv.baiak-icewar.com', 'Brazil', 211, 1500, 98.64, 208, 900, 'PVP', '8.6', 'Abriu 06-02 HOST BR', 1366],
  ['Evolunia', 'status.evolunia.net', 'Sweden', 210, 2000, 99.83, 208, 100, 'PVPe', '10.98', 'Fun Evo PVPE 6 Years', 975],
  ['Tavola Global', 'svr.tavola-global.com.br', 'Brazil', 195, 2000, 98.33, 185, 9999, 'nPVP', '15.2', 'ABERTURA 09-05', 337],
  ['Baiak GO', 'baiak-go.com', 'Brazil', 182, 1000, 99.24, 133, 400, 'PVP', '8.6', 'RR SYSTEM - HOST BR', 244],
  ['LightOT', 'light.myddns.me', 'Brazil', 180, 500, 97.4, 188, 9999, 'PVP', '8.6', 'PVP-E RPG CUSTOM', 223],
  ['Osiris HorusBR', 'osiris.horusbr.online', 'Brazil', 176, 1000, 94.71, 171, 25, 'PVP', null, 'RadBR Sistema Resets', 216],
  ['Netunia', 'netunia.net', 'Mexico', 172, 1000, 99.71, 202, 2500, 'PVP', '8.6', '2500x - 7Y ONLINE', 516],
  ['Thornia', 'sv.thornia.online', 'USA', 168, 1000, 98.66, 195, 600, 'PVP', '15.2', '-NEW BALANCE 1525-', 237],
  ['KoliseuOT Legacy', 'legacy.koliseuot.com.br', 'Brazil', 167, 2000, 93.49, 179, 300, 'PVP', '15.0', 'OTC - BOT Liberado', 263],
  ['MelhorOT', 'go.melhorot.com.br', 'Brazil', 146, 2000, 99.01, 186, 999, 'nPVP', '15.1', 'Custom OTC BOT 1YEAR', 485],
  ['Celenium RubinOT', 'cellenium.rubinot.net', 'France', 137, 2000, 97.11, 186, 80, 'PVP', '15.0', '27K ON - BATTLE PASS', 370],
  ['Midhem', 'eu.midhem.com', 'Sweden', 133, 800, 93.25, 222, 2, 'PVP', '8.0', 'STARTS JULY24', 337],
  ['PBotWars', 'sv.pbotwars.com.br', 'Brazil', 131, 1000, 95.51, 194, 350, 'PVP', '8.6', 'The Best Custom 8.60', 577],
  ['Rezoria', 'rezoria.eu', 'Poland', 131, 1000, 99.73, 185, 100, 'PVP', '8.6', '10 07 START', 389],
  ['Cyntara', 'cyntara.org', 'USA', 118, 1000, 99.68, 191, 500, 'PVP', null, 'Cyntara Highrate', 348],
  ['Alastera', 'alastera.com', 'Sweden', 117, 1000, 99.75, 188, 1500, 'PVP', '8.6', 'ALASTERA 7Y NO RESET', 183],
  ['IglaOTS', 'play.iglaots.net', 'Poland', 115, 2000, 88.8, 160, 3, 'PVP', '15.2', 'IglaOTS', 911],
  ['Elenor WOTServer', 'elenor.wotserver.com', 'Brazil', 114, 2000, 99.65, 159, 10, 'PVP', null, 'Senhor dos Aneis', 205],
  ['Aegis Exordion', 'aegis.exordion.com.br', 'Brazil', 112, 2000, 99.55, 188, 1, 'PVP', '7.4', 'GLOBAL 7.4 CUSTOM', 1712],
  ['AlphaOT', 'sv.alphaot.com.br', 'Brazil', 103, 2000, 99.77, 212, 80, 'PVP', '8.6', 'HOST BR RPG CUSTOM', 229],
  ['TNT Server', 'sv.tntserver.com.br', 'Brazil', 100, 2000, 98.23, 179, 70, 'PVP', '15.2', 'TNT SERVER - 1530', 181],
  ['Lordebra Paulistinha', 'lordebra.paulistinhaot.com', 'Brazil', 98, 2000, 99.68, 202, 90, 'nPVP', '15.2', 'SUMMER UPDATE 2026', 473],
  ['DraconiaOT', 'sv.draconiaot.com', 'Venezuela', 90, 500, 94.34, 89, 40, 'PVP', '8.6', 'DraconiaOT', 144],
  ['Paulistinha Deletera', 'deletera.paulistinhaot.com', 'Brazil', 84, 2000, 99.42, 176, 90, 'PVP', '15.2', 'SUMMER UPDATE 2026', 742],
  ['Unline', 'status.unline.org', 'USA', 80, 2000, 99.51, 204, 100, 'PVP', '14.0', 'New Voc - Monk', 407],
  ['Taleon SanPvP', 'sanpvp.taleon.online', 'Brazil', 73, 2000, 94.37, 183, 25, 'nPVP', '15.0', 'NPvP Hard 8 anos ON', 663],
  ['Marlboro War', 'login.marlboro-war.net', 'Mexico', 71, 300, 99.35, 180, 999, 'WAR', '8.6', 'FULL GLOBAL WAR', 284],
  ['ValeriaOT', 'play.valeriaot.com', 'Sweden', 71, 1000, 99.1, 170, 300, 'PVP', '15.2', 'CUSTOM RL MAP NOWIPE', 120],
];

const mergedRows = Array.from(
  new Map([...rows, ...priorityRows].map((row) => [row[1], row])).values(),
).sort((a, b) => Number(b[3] || 0) - Number(a[3] || 0));

function officialWebsiteFor(host) {
  if (host.includes('aurera-global.com')) return 'https://aurera-global.com/';
  if (host.includes('baiak-ilusion')) return 'https://baiak-ilusion.com.br/';
  if (host.includes('cyleria.pl')) return 'https://cyleria.pl/';
  if (host.includes('evolunia.net')) return 'https://evolunia.net/';
  if (host.includes('cyntara.org')) return 'https://cyntara.org/';
  return `https://${host.replace(/^(sv|go|play|login|status|game|server|srv|list|on|eu|c01)\./, '')}/`;
}

const slugCounts = new Map();

function mergeUnique(items = [], keyFor = (item) => item) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFor(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export const topOtservlistServers = mergedRows.map((row, index) => {
  const [name, host, location, playersOnline, maxPlayers, uptime, points, expRate, worldType, version, listTitle, uniqueIps, otservlistId, port] = row;
  const baseSlug = buildServerSlug({ name });
  const seenCount = slugCounts.get(baseSlug) || 0;
  slugCounts.set(baseSlug, seenCount + 1);
  const slug = seenCount === 0 ? baseSlug : `${baseSlug}-${buildServerSlug({ name: host })}`;
  const curation = getServerCurationPack(slug) || {};
  const baseServer = {
    id: `otservlist-top-${slug}`,
    slug,
    name,
    host,
    ip: host,
    port: port || 7171,
    location,
    players_online: playersOnline,
    max_players: maxPlayers,
    players_peak: playersOnline,
    unique_players_snapshot: uniqueIps || null,
    uptime_percent: uptime,
    source_rank: index + 1,
    source: 'otservlist_top_snapshot',
    source_id: otservlistId || host,
    source_url: otservlistId ? `https://otservlist.org/ots/${otservlistId}` : sourceUrl,
    source_payload: {
      snapshot_date: snapshotDate,
      source_url: otservlistId ? `https://otservlist.org/ots/${otservlistId}` : sourceUrl,
      list_title: listTitle || name,
      unique_ips_snapshot: uniqueIps || null,
      otservlist_points: points,
      source_note: 'Seeded from public otservlist players-online ranking for immediate directory page coverage.',
    },
    is_online: playersOnline > 0,
    version: version === 'n/a' ? null : version,
    exp_rate: expRate,
    world_type: worldType,
    website_url: officialWebsiteFor(host),
    external_launch_url: `https://${host}/`,
    claim_status: 'unclaimed',
    content_status: 'source_snapshot',
    keyword_primary: name,
    template_name: 'top_otservlist_reference',
    updated_at: snapshotDate,
    last_seen_at: snapshotDate,
    last_check: snapshotDate,
    description: `${name} is tracked as a top Open Tibia server from the public otservlist players-online ranking${listTitle ? ` under the listing title "${listTitle}"` : ''}. This page preserves the searchable server name, host, client/version signals, players-online snapshot, uptime, EXP rate, PvP type, and source attribution so players can compare it while the live Supabase sync and owner-claimed profile continue to enrich the record.`,
    official_summary: `${name} currently needs owner-confirmed details, screenshots, rules, Discord/forum links, and community reviews. The source snapshot gives players a verified starting point instead of a blank page.`,
    feature_bullets: [
      `Listed host: ${host}`,
      `Players online snapshot: ${playersOnline}${uniqueIps ? ` (${uniqueIps} unique IPs)` : ''} / ${maxPlayers}`,
      `Uptime snapshot: ${uptime}%`,
      `EXP/PvP signal: x${expRate} ${worldType}`,
    ],
    tags: ['otservlist top 100', location, worldType, version].filter(Boolean),
    research_sources: [
      { type: 'directory', url: sourceUrl, label: 'otservlist players-online ranking' },
      { type: 'official_candidate', url: officialWebsiteFor(host), label: 'candidate official website' },
    ],
    faq_items: [
      {
        question: `Is ${name} an active Open Tibia server?`,
        answer: `${name} appears in the public otservlist players-online ranking snapshot with ${playersOnline} players online out of ${maxPlayers}. Live status can change quickly, so the page should be treated as a directory snapshot until the next sync refresh.`,
      },
      {
        question: `Where should players verify ${name}?`,
        answer: `Start with the listed host ${host}, the candidate official website, and the original otservlist row. Avoid downloading clients from unrelated mirrors until the listing is owner-claimed or independently verified.`,
      },
    ],
    custom_sections: [
      {
        title: 'Why this page exists',
        body: `Players search for ${name} by exact name when they want the server website, client version, online count, screenshots, rules, Discord links, reviews, and similar servers. OpenTibiaServers.com keeps this page as a richer research record than a one-line table row.`,
      },
      {
        title: 'Open fields to document',
        body: `This listing should be enriched with owner-confirmed homepage links, launch history, update notes, screenshots, rule summaries, map/system descriptions, contact channels, and player reviews. Until then, public source data is separated from editorial notes so the page stays honest.`,
      },
    ],
  };

  return {
    ...baseServer,
    ...curation,
    source_payload: {
      ...baseServer.source_payload,
      ...(curation.source_payload || {}),
    },
    feature_bullets: curation.feature_bullets?.length ? curation.feature_bullets : baseServer.feature_bullets,
    tags: mergeUnique([...(baseServer.tags || []), ...(curation.tags || [])]),
    research_sources: mergeUnique(
      [...(baseServer.research_sources || []), ...(curation.research_sources || [])],
      (item) => `${item?.type || ''}:${item?.url || item?.label || ''}`,
    ),
    faq_items: curation.faq_items?.length ? curation.faq_items : baseServer.faq_items,
    custom_sections: curation.custom_sections?.length ? curation.custom_sections : baseServer.custom_sections,
  };
});

export function getTopOtservlistServerBySlug(slug) {
  return topOtservlistServers.find((server) => server.slug === slug) || null;
}
