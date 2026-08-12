import { getOtServerCuratedPage, getOtServerCuratedPages } from './otserver-curated-pages.js';
import { getOtlandServerGalaPage, getOtlandServerGalaPages } from './otland-server-gala-pages.js';

function uniqueBySlug(pages = []) {
  return Array.from(new Map(pages.filter(Boolean).map((page) => [page.slug, page])).values());
}

export function getServerReviewPage(slug) {
  return getOtServerCuratedPage(slug) || getOtlandServerGalaPage(slug) || null;
}

export function getServerReviewPages() {
  return uniqueBySlug([
    ...getOtServerCuratedPages(),
    ...getOtlandServerGalaPages(),
  ]);
}
