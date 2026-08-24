import { getOtServerCuratedPage, getOtServerCuratedPages } from './otserver-curated-pages.js';
import { getOtlandServerGalaPage, getOtlandServerGalaPages } from './otland-server-gala-pages.js';
import { deriveServerIdentity } from './server-identity.js';

function uniqueBySlug(pages = []) {
  return Array.from(new Map(pages.filter(Boolean).map((page) => [page.slug, page])).values());
}

const LEGACY_SLUGS = new Map([
  ['free-exercis-new-ppl', 'ezodus'],
  ['global-7-4-custom', 'exordion'],
  ['arcanum', 'realera'],
]);

function pageHost(page) {
  const listedHost = (page?.facts || []).find((fact) => fact.label === 'Listed host')?.value;
  return page?.host || page?.ip || listedHost || '';
}

function canonicalizePage(page) {
  if (!page) return null;
  const identity = deriveServerIdentity({ ...page, host: pageHost(page) });
  if (!identity.slug) return page;

  const oldName = page.name || page.primaryKeyword || page.keyword_primary || page.slug;
  const replaceName = (value) => typeof value === 'string'
    ? value.replaceAll(oldName, identity.name)
    : value;

  return {
    ...page,
    legacySlug: page.slug,
    slug: identity.slug,
    name: identity.name,
    host: pageHost(page) || page.host,
    path: `/servers/${identity.slug}`,
    primaryKeyword: identity.name,
    keyword_primary: identity.name,
    title: replaceName(page.title),
    h1: replaceName(page.h1),
    dek: replaceName(page.dek),
    metaDescription: replaceName(page.metaDescription),
    description: replaceName(page.description),
    official_summary: replaceName(page.official_summary),
    facts: (page.facts || []).map((fact) => fact.label === 'Listing title'
      ? { ...fact, value: identity.name }
      : fact),
  };
}

export function getServerReviewPage(slug) {
  const requestedSlug = LEGACY_SLUGS.get(slug) || slug;
  const direct = getOtServerCuratedPage(requestedSlug) || getOtlandServerGalaPage(requestedSlug);
  if (direct) return canonicalizePage(direct);

  const matchingPage = getServerReviewPages({ canonical: false })
    .find((page) => deriveServerIdentity({ ...page, host: pageHost(page) }).slug === requestedSlug);
  return canonicalizePage(matchingPage);
}

export function getServerReviewPages({ canonical = true } = {}) {
  const pages = uniqueBySlug([
    ...getOtServerCuratedPages(),
    ...getOtlandServerGalaPages(),
  ]);
  return canonical ? uniqueBySlug(pages.map(canonicalizePage)) : pages;
}
