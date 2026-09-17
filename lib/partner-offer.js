/**
 * Canonical featured-partner offer copy for auth-free marketing surfaces.
 * Keep URLs in sync with FeaturedServerAd / DirectoryRecommendation / evomanias page.
 */
export const EVOMANIAS_SITE_URL = 'https://evomanias.com/';
export const EVOMANIAS_DOWNLOADS_URL = 'https://evomanias.com/downloads';
export const EVOMANIAS_DISCORD_URL = 'https://discord.gg/wj4D48Jj5W';
export const EVOMANIAS_PROFILE_PATH = '/evomanias';

export const EVOMANIAS_OFFER = {
  name: 'Evomanias',
  plusPlan: '$200/year',
  plusWas: '$360',
  plusSave: '$160',
  points: '500 free donation points',
  discordPerk: 'Discord backpack',
  freeDownload: true,
};

export function evomaniasOfferOneLiner() {
  return `${EVOMANIAS_OFFER.name} — free download, Plus Plan ${EVOMANIAS_OFFER.plusPlan} (was ${EVOMANIAS_OFFER.plusWas}, save ${EVOMANIAS_OFFER.plusSave}), ${EVOMANIAS_OFFER.points}, ${EVOMANIAS_OFFER.discordPerk}.`;
}

export function evomaniasMetaDescription() {
  return `Evomanias on OpenTibiaServers: free download, Plus Plan ${EVOMANIAS_OFFER.plusPlan} (was ${EVOMANIAS_OFFER.plusWas}, save ${EVOMANIAS_OFFER.plusSave}), ${EVOMANIAS_OFFER.points}, and a free Discord store backpack. Official site, downloads, and Discord linked.`.slice(0, 158);
}

export function evomaniasCtas() {
  return [
    { label: 'Free Download', href: EVOMANIAS_DOWNLOADS_URL, external: true },
    { label: 'View Offer', href: EVOMANIAS_SITE_URL, external: true },
    { label: 'Discord Backpack', href: EVOMANIAS_DISCORD_URL, external: true },
    { label: 'Directory profile', href: EVOMANIAS_PROFILE_PATH, external: false },
  ];
}
