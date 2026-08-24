const VERIFIED_RESEARCH = {
  ezodus: {
    source_url: 'https://otland.net/threads/france-10-00-13-20-ezodus-start-13th-october-2023-18-00-rotten-blood-skill-wheel-oskayaat-putrefactory-bakragore-join-us-now.268643/',
    website_url: 'https://www.ezodus.net/',
    official_summary: 'The owner\'s OtLand Server Gala thread presents Ezodus as a long-running custom server with modern Tibia systems, including the skill wheel, Rotten Blood, Oskayaat, Bakragore, events, quests, bosses, and an official Windows client.',
  },
  exordion: {
    source_url: 'https://otland.net/threads/brazil-8-0-exordion-2x-global-14-11-2022-19-00-gmt-3.282939/',
    website_url: 'https://exordion.com.br/',
    official_summary: 'The owner\'s OtLand Server Gala thread describes Exordion as a Brazilian 8.0 global server with two worlds, staged experience, shared experience bonuses, tasks, raids, an anti-bot client, and custom quality-of-life systems.',
  },
  realera: {
    source_url: 'https://otland.net/threads/france-8-0-custom-realera-new-world-warfare-17-09-friday-18-00-tournaments-great-wars.277999/',
    website_url: 'https://realera.org/',
    official_summary: 'The owner\'s OtLand Server Gala thread presents Realera as an 8.0 custom old-school world focused on PvP, tournaments, wars, custom content, and regular world updates.',
  },
};

export function applyVerifiedServerResearch(server = {}) {
  const research = VERIFIED_RESEARCH[server.slug];
  return research ? { ...server, ...research } : server;
}
