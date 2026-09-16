import { getOtServerCuratedPage, getOtServerCuratedPages } from './otserver-curated-pages.js';
import {
  getCommunityArchivePage,
  getCommunityArchivePages,
  getCommunityArchiveRecords,
} from './community-archive-pages.js';
import { deriveServerIdentity } from './server-identity.js';
import { buildSourceBackedServerProfile } from './source-backed-server-profile.js';

function uniqueBySlug(pages = []) {
  return Array.from(new Map(pages.filter(Boolean).map((page) => [page.slug, page])).values());
}

const LEGACY_SLUGS = new Map([
  ['free-exercis-new-ppl', 'ezodus'],
  ['global-7-4-custom', 'exordion'],
  ['arcanum', 'realera'],
  ['calmera-ot', 'calmera'],
  ['iglaots-offseason', 'iglaots'],
  ['nostalrius-on-nostalrius-com-br', 'nostalrius'],
  ['paulistinha-deletera', 'paulistinhaot'],
  ['taleon-sanpvp', 'taleon'],
]);

function pageHost(page) {
  const listedHost = (page?.facts || []).find((fact) => fact.label === 'Listed host')?.value;
  return page?.host || page?.ip || (/^(pending|unknown|n\/?a|-)$/i.test(listedHost || '') ? '' : listedHost) || '';
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

function pageScore(page) {
  return (Number(page?.players_online || 0) > 0 ? 1000 : 0)
    + (Number(page?.players_peak || 0) > 0 ? 500 : 0)
    + (page?.website_url ? 200 : 0)
    + (page?.source_excerpt ? 100 : 0)
    + (page?.facts?.length || 0);
}

function mergeLinks(pages, field) {
  const values = pages.flatMap((page) => page?.[field] || []);
  return Array.from(new Map(values.map((value) => [
    value?.href || value?.url || value?.label,
    value,
  ])).values()).filter(Boolean);
}

function rawPages() {
  return uniqueBySlug([
    ...getOtServerCuratedPages(),
    ...getCommunityArchivePages(),
  ]);
}

let canonicalPagesCache = null;

function buildCanonicalPages() {
  const pageGroups = new Map();
  for (const page of rawPages()) {
    const canonical = canonicalizePage(page);
    const group = pageGroups.get(canonical.slug) || [];
    group.push(canonical);
    pageGroups.set(canonical.slug, group);
  }

  const recordGroups = new Map();
  for (const record of getCommunityArchiveRecords()) {
    const identity = deriveServerIdentity({
      ...record,
      name: record.server_name || record.title,
      host: record.host,
      website_url: record.official_website_url,
    });
    if (!identity.slug) continue;
    const group = recordGroups.get(identity.slug) || [];
    group.push(record);
    recordGroups.set(identity.slug, group);
  }

  return Array.from(pageGroups, ([slug, pages]) => {
    const rankedPages = [...pages].sort((left, right) => pageScore(right) - pageScore(left));
    const base = rankedPages[0];
    const merged = {
      ...base,
      sourceLinks: mergeLinks(rankedPages, 'sourceLinks'),
      research_sources: mergeLinks(rankedPages, 'research_sources'),
      researchNotes: rankedPages.flatMap((page) => page.researchNotes || []),
    };
    return buildSourceBackedServerProfile(merged, recordGroups.get(slug) || []);
  });
}

function canonicalPages() {
  if (!canonicalPagesCache) canonicalPagesCache = buildCanonicalPages();
  return canonicalPagesCache;
}

export function getServerReviewPage(slug) {
  const requestedSlug = LEGACY_SLUGS.get(slug) || slug;
  const canonical = canonicalPages().find((page) => page.slug === requestedSlug);
  if (canonical) return canonical;

  const direct = getOtServerCuratedPage(requestedSlug) || getCommunityArchivePage(requestedSlug);
  if (!direct) return null;
  const canonicalSlug = deriveServerIdentity({ ...direct, host: pageHost(direct) }).slug;
  return canonicalPages().find((page) => page.slug === canonicalSlug) || canonicalizePage(direct);
}

export function getServerReviewPages({ canonical = true } = {}) {
  return canonical ? canonicalPages() : rawPages();
}
