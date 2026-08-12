import { getCuratedPage } from './curated-pages.js';
import { getOtServerCuratedPage } from './otserver-curated-pages.js';
import { getOtlandServerGalaPage } from './otland-server-gala-pages.js';
import { getResourcePage } from './resource-pages.js';
import { getTibiaWorldPage } from './tibia-world-pages.js';

export function getExactMatchPageData(slug) {
  return (
    getCuratedPage(slug) ||
    getOtServerCuratedPage(slug) ||
    getTibiaWorldPage(slug) ||
    getResourcePage(slug) ||
    getOtlandServerGalaPage(slug) ||
    null
  );
}
