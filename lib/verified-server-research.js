import excerptManifest from '../data/server-excerpt-manifest.json' with { type: 'json' };
import verifiedSources from '../data/verified-server-sources.json' with { type: 'json' };

const VERIFIED_RESEARCH = {
  ezodus: {
    ...verifiedSources.ezodus,
    website_url: verifiedSources.ezodus.official_website_url,
    official_summary: 'The owner\'s community_archive server launch archive thread presents Ezodus as a long-running custom server with modern Tibia systems, including the skill wheel, Rotten Blood, Oskayaat, Bakragore, events, quests, bosses, and an official Windows client.',
  },
  exordion: {
    ...verifiedSources.exordion,
    website_url: verifiedSources.exordion.official_website_url,
    official_summary: 'The owner\'s community_archive server launch archive thread describes Exordion as a Brazilian 8.0 global server with two worlds, staged experience, shared experience bonuses, tasks, raids, an anti-bot client, and custom quality-of-life systems.',
  },
  realera: {
    ...verifiedSources.realera,
    website_url: verifiedSources.realera.official_website_url,
    official_summary: 'The owner\'s community_archive server launch archive thread presents Realera as an 8.0 custom old-school world focused on PvP, tournaments, wars, custom content, and regular world updates.',
  },
};

export function applyVerifiedServerResearch(server = {}) {
  const generated = excerptManifest[server.slug] || null;
  const research = VERIFIED_RESEARCH[server.slug] || null;
  return generated || research ? { ...server, ...(generated || {}), ...(research || {}) } : server;
}
