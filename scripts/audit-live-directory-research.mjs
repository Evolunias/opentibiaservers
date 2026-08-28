import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { collapseCanonicalServers, deriveServerIdentity } from '../lib/server-identity.js';

const repoRoot = process.cwd();
const livePath = path.join(repoRoot, 'data', 'live-server-inventory.json');
const manifestPath = path.join(repoRoot, 'data', 'server-excerpt-manifest.json');
const researchPath = path.join(repoRoot, 'data', 'server-source-research.json');
const logoManifestPath = path.join(repoRoot, 'data', 'server-logo-manifest.json');

const GENERIC_PATTERNS = [
  ['owner-thread sentence shell', /\bis presented in an owner-posted community_archive server launch archive thread(?:\s+as\b|\.)/i],
  ['quick connection template', /\basks for more than a quick connection test\b/i],
  ['directory-entry template', /\benters the directory through a real community_archive server launch archive thread\b/i],
  ['living-profile template', /\bshould be read as a living profile\b/i],
  ['missing-owner template', /\b(?:page still needs|needs owner-confirmed|currently needs owner-confirmed|ownership still needs)\b/i],
  ['open-fields template', /\bopen fields remain\b/i],
  ['merely-counted template', /\bmerely counted\b/i],
  ['blank-page template', /\bverified starting point instead of a blank page\b/i],
  ['generic featured profile', /\ba featured Open Tibia server profile\b/i],
  ['generic trust template', /\brecord becomes more trustworthy as it gathers\b/i],
];

const OFFICIAL_BOILERPLATE_PATTERNS = [
  ['generic Tibia MMORPG boilerplate', /^(?:[a-z0-9 .'-]+\s+is\s+)?(?:a\s+)?free\s+massive(?:ly)?\s+multiplayer\s+online\s+role[- ]?playing\s+game\s*\(mmorpg\)[.!]?$/i],
  ['generic Tibia fan boilerplate', /^tibia is a free massive(?:ly)? multiplayer online role[- ]?playing game \(mmorpg\)\. join this fascinating game that has thousands of fans/i],
  ['generic best-server claim', /^(?:[a-z0-9 .'-]+\s+)?(?:is\s+)?the best (?:open )?tibia server(?: server)? in the world[.!]?$/i],
];

const OFFICIAL_DETAIL_PATTERNS = [
  /\b(?:client|protocol|version)\s*\d/i,
  /\b\d+(?:\.\d+)?\s*[x×]\b|\b(?:exp|experience|skill|loot|spawn)\s*(?:rate|stage)/i,
  /\b(?:open|retro|optional|non)[ -]?pvp\b|\bpvp[- ]?enforced\b/i,
  /\b(?:real|global|custom|classic|old[- ]?school)\s+map\b/i,
  /\b(?:custom|unique)\s+(?:content|item|spell|vocation|system|quest|boss|area)/i,
  /\b(?:quest|boss|raid|guild|war|event|dungeon|bestiary|craft|task|rebirth|prestige|season|daily reward|battle pass|profession|mining|fishing)s?\b/i,
  /\b(?:android|windows|ios|macos|custom client|anti[- ]?bot|no[- ]?pay[- ]?to[- ]?win|free[- ]?to[- ]?play)\b/i,
  /\b(?:launch|hosted|datacenter|world|server save|progression|rates?)\b/i,
  /\bbaiak\b|\bevolution\b|\bidle\b|\bdragon ball\b/i,
];

const LOGO_FIELDS = ['official_logo_url', 'logo_url', 'logo_image_url'];
const LOGO_SOURCE_FIELDS = ['official_logo_source_url', 'logo_source_url'];
const OFFICIAL_EXCERPT_SOURCE_FIELDS = ['official_excerpt_source_url', 'official_summary_source_url'];

const PLACEHOLDER_NAMES = /^(?:open tibia server|unknown|pending|n\/?a|null|none|server)$/i;
const HTML_OR_CODE = /<[^>]+>|\b(?:class|style|aria-label|data-[a-z-]+)\s*=/i;
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const IPV4 = /^(?:\d{1,3}\.){3}\d{1,3}$/;
let officialDescriptionFrequency = new Map();

function readJson(file) {
  if (!fs.existsSync(file)) throw new Error(`Required audit input is missing: ${path.relative(repoRoot, file)}`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function text(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function wordCount(value) {
  return text(value).split(/\s+/).filter(Boolean).length;
}

function isHttpUrl(value, expectedHost = '') {
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) && (!expectedHost || url.hostname === expectedHost || url.hostname.endsWith(`.${expectedHost}`));
  } catch {
    return false;
  }
}

function normalizedUrl(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    return url.toString().replace(/\/$/, '');
  } catch {
    return '';
  }
}

function normalizedEvidenceText(value) {
  return text(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function isValidRootDomain(value) {
  const valueText = text(value).toLowerCase();
  if (!valueText) return true;
  if (IPV4.test(valueText)) {
    return valueText.split('.').every((part) => Number(part) >= 0 && Number(part) <= 255);
  }
  if (valueText.length > 253 || valueText.includes('://') || !valueText.includes('.')) return false;
  return valueText.split('.').every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label));
}

function identityProblems(record, slug = record?.slug) {
  const problems = [];
  const name = text(record?.name);
  const slugText = text(slug);
  if (!name || PLACEHOLDER_NAMES.test(name) || HTML_OR_CODE.test(name) || name.length > 100) problems.push('malformed name');
  if (!slugText || !VALID_SLUG.test(slugText) || slugText.length > 80) problems.push('malformed slug');
  if (record?.root_domain && !isValidRootDomain(record.root_domain)) problems.push('malformed root domain');
  return problems;
}

function genericMatches(value) {
  const valueText = text(value);
  return GENERIC_PATTERNS.filter(([, pattern]) => pattern.test(valueText)).map(([label]) => label);
}

function isSubstantiveSummary(value) {
  const summary = text(value);
  return summary.length >= 90 && wordCount(summary) >= 14 && genericMatches(summary).length === 0;
}

function officialBoilerplateMatches(value) {
  const valueText = text(value);
  const normalized = normalizedEvidenceText(valueText);
  const matches = OFFICIAL_BOILERPLATE_PATTERNS
    .filter(([, pattern]) => pattern.test(valueText))
    .map(([label]) => label);
  if (normalized && (officialDescriptionFrequency.get(normalized) || 0) >= 3) matches.push('description duplicated across three or more servers');
  return [...new Set(matches)];
}

function hasConcreteOfficialDetail(value) {
  return OFFICIAL_DETAIL_PATTERNS.some((pattern) => pattern.test(text(value)));
}

function officialPageAssessment(page) {
  const description = text(page?.description);
  const title = text(page?.title);
  const successfulFetch = Number(page?.fetch_status) >= 200 && Number(page?.fetch_status) < 400;
  const accepted = page?.relevance_status !== 'rejected';
  const boilerplate = officialBoilerplateMatches(description);
  const thinDescription = Boolean(description) && (description.length < 90 || wordCount(description) < 14);
  const concrete = hasConcreteOfficialDetail(description);
  const qualifiedExcerpt = Boolean(
    isHttpUrl(page?.url)
    && successfulFetch
    && accepted
    && !HTML_OR_CODE.test(description)
    && !thinDescription
    && boilerplate.length === 0
    && concrete
  );
  const shellReasons = [];
  if (successfulFetch && title && !description) shellReasons.push('title only');
  if (description && boilerplate.length) shellReasons.push(...boilerplate);
  if (description && thinDescription) shellReasons.push('description too thin for a helpful excerpt');
  if (description && !concrete) shellReasons.push('description has no server-specific gameplay or service detail');
  if (page?.relevance_status === 'rejected') shellReasons.push('page rejected as irrelevant');
  return {
    url: page?.url || null,
    successfulFetch,
    accepted,
    hasMetadata: Boolean(title || description),
    qualifiedExcerpt,
    shellReasons: [...new Set(shellReasons)],
    description,
  };
}

function qualifiedOfficialPages(entry) {
  return (entry?.official_pages || []).filter((page) => officialPageAssessment(page).qualifiedExcerpt);
}

function officialSourceUrls(manifestEntry) {
  return (manifestEntry?.research_sources || [])
    .filter((source) => source?.type === 'official_website' && isHttpUrl(source?.url))
    .map((source) => normalizedUrl(source.url));
}

function sourceBackedOfficialExcerpt(manifestEntry, researchEntry) {
  const excerpt = text(manifestEntry?.official_excerpt);
  if (!excerpt || excerpt.length < 90 || wordCount(excerpt) < 14 || officialBoilerplateMatches(excerpt).length || !hasConcreteOfficialDetail(excerpt)) return null;
  const sources = new Set(officialSourceUrls(manifestEntry));
  const explicitSource = OFFICIAL_EXCERPT_SOURCE_FIELDS.map((field) => normalizedUrl(manifestEntry?.[field])).find(Boolean);
  return qualifiedOfficialPages(researchEntry).find((page) => {
    const pageUrl = normalizedUrl(page.url);
    const exactSourceText = normalizedEvidenceText(page.description) === normalizedEvidenceText(excerpt);
    return sources.has(pageUrl) && (exactSourceText || explicitSource === pageUrl);
  }) || null;
}

function likelyLogoImage(value) {
  if (!isHttpUrl(value)) return false;
  let pathname = '';
  try { pathname = decodeURIComponent(new URL(value).pathname).toLowerCase(); } catch { return false; }
  if (/logo|wordmark|brand/.test(pathname)) return true;
  return !/(?:og[-_ ]?(?:image|banner|cover|share)|hero|background|artwork|screenshot|site[_-]?wide|facebook|fbicon|favicon|icon(?:[_-]?\d+)?|capafacebook|cover|banner|tlo|\/bg\.)/.test(pathname)
    && /\.(?:png|jpe?g|gif|webp|avif|svg)$/.test(pathname);
}

function explicitLogoFields(record, scope) {
  return LOGO_FIELDS.flatMap((field) => text(record?.[field]) ? [{ scope, field, url: text(record[field]) }] : []);
}

function officialPageLogoCandidates(entry) {
  return (entry?.official_pages || []).flatMap((page) => {
    const assessment = officialPageAssessment(page);
    return assessment.successfulFetch && assessment.accepted && likelyLogoImage(page?.image)
      ? [{ image_url: page.image, source_url: page.url }]
      : [];
  });
}

function explicitLogoAssessment(manifestEntry, researchEntry) {
  const declarations = [
    ...explicitLogoFields(manifestEntry, 'manifest'),
    ...explicitLogoFields(researchEntry, 'research'),
  ];
  const candidates = officialPageLogoCandidates(researchEntry);
  const declaredSources = new Set([
    ...LOGO_SOURCE_FIELDS.map((field) => manifestEntry?.[field]),
    ...LOGO_SOURCE_FIELDS.map((field) => researchEntry?.[field]),
  ].filter((url) => isHttpUrl(url)).map(normalizedUrl));
  const officialPages = new Set((researchEntry?.official_pages || []).map((page) => normalizedUrl(page.url)).filter(Boolean));
  return declarations.map((declaration) => {
    const validUrl = isHttpUrl(declaration.url) || declaration.url.startsWith('/images/server-logos/');
    const matchedCandidate = candidates.find((candidate) => normalizedUrl(candidate.image_url) === normalizedUrl(declaration.url));
    const provenanceUrl = matchedCandidate?.source_url
      || [...declaredSources].find((url) => officialPages.has(url))
      || null;
    return { ...declaration, valid_url: validUrl, provenance_url: provenanceUrl };
  });
}

function hasSourceBackedExcerpt(entry) {
  return ['official_excerpt', 'official_summary', 'owner_excerpt', 'community_excerpt']
    .some((field) => text(entry?.[field]).length >= 40 && genericMatches(entry?.[field]).length === 0);
}

function hasOfficialMetadata(entry) {
  return (entry?.official_pages || []).some((page) => (
    isHttpUrl(page?.url) && (text(page?.description).length >= 45 || text(page?.title).length >= 12)
  ));
}

function hasOwnerThread(entry) {
  const owner = entry?.owner_excerpt;
  return Boolean(
    text(owner?.author)
    && text(owner?.excerpt).length >= 20
    && isHttpUrl(owner?.source_url, 'community_archive.net')
  );
}

function validCommunityExcerpts(entry) {
  const ownerNames = new Set((entry?.community_archive_threads || []).map((thread) => text(thread?.author).toLowerCase()).filter(Boolean));
  return (entry?.community_excerpts || []).filter((excerpt) => (
    text(excerpt?.author)
    && !ownerNames.has(text(excerpt.author).toLowerCase())
    && text(excerpt?.excerpt).length >= 20
    && isHttpUrl(excerpt?.source_url, 'community_archive.net')
  ));
}

function summarizeIssues(items, limit = 25) {
  return { count: items.length, examples: items.slice(0, limit) };
}

const liveExport = readJson(livePath);
const manifest = readJson(manifestPath);
const research = readJson(researchPath);
const logoManifest = readJson(logoManifestPath);
const liveRows = Array.isArray(liveExport.servers) ? liveExport.servers : [];
const researchRows = Array.isArray(research.servers) ? research.servers : [];
const manifestEntries = Object.entries(manifest);

const descriptionServers = new Map();
for (const entry of researchRows) {
  for (const page of entry.official_pages || []) {
    const normalized = normalizedEvidenceText(page.description);
    if (!normalized) continue;
    const slugs = descriptionServers.get(normalized) || new Set();
    slugs.add(entry.slug);
    descriptionServers.set(normalized, slugs);
  }
}
officialDescriptionFrequency = new Map([...descriptionServers].map(([description, slugs]) => [description, slugs.size]));

const serverLogoComponentPath = path.join(repoRoot, 'app', 'components', 'ServerLogo.jsx');
const serverLogoLibraryPath = path.join(repoRoot, 'lib', 'server-logos.js');
const serverLogoComponent = fs.existsSync(serverLogoComponentPath) ? fs.readFileSync(serverLogoComponentPath, 'utf8') : '';
const serverLogoLibrary = fs.existsSync(serverLogoLibraryPath) ? fs.readFileSync(serverLogoLibraryPath, 'utf8') : '';
const logoManifestEntries = Object.entries(logoManifest.entries || {});
const logoManifestDriven = /getServerLogo/.test(serverLogoComponent) && /server-logo-manifest\.json/.test(serverLogoLibrary);
const brokenComponentLogoAssets = logoManifestEntries
  .filter(([, entry]) => !fs.existsSync(path.join(repoRoot, 'public', text(entry.src).replace(/^\//, ''))))
  .map(([slug, entry]) => ({ slug, src: entry.src || null }));
const componentUsesDynamicLogoFields = /\b(?:official_logo_url|logo_url|logo_image_url)\b/.test(`${serverLogoComponent} ${serverLogoLibrary}`);

const canonicalLive = collapseCanonicalServers(liveRows);
const liveBySlug = new Map(canonicalLive.map((server) => [server.canonical_slug || server.slug, server]));
const componentServerLogoSlugs = new Set(logoManifestEntries.map(([slug]) => slug).filter((slug) => liveBySlug.has(slug)));
const logoManifestIntegrityIssues = [];
const logoAliasOwners = new Map();
const logoSrcOwners = new Map();
for (const [slug, entry] of logoManifestEntries) {
  const problems = [];
  const src = text(entry.src);
  const localPath = /^\/images\/server-logos\/[a-z0-9][a-z0-9._-]*$/i.test(src)
    ? path.join(repoRoot, 'public', src.replace(/^\//, ''))
    : null;
  if (!VALID_SLUG.test(slug)) problems.push('manifest key is not a canonical slug');
  if (!localPath) problems.push('logo src is not an allowed local server-logo path');
  if (localPath && !fs.existsSync(localPath)) problems.push('logo asset is missing');
  if (!['official_website', 'user_supplied', 'primary_source_archive'].includes(entry.source_type)) problems.push('unsupported or missing source_type');
  if (entry.source_type === 'official_website' && !isHttpUrl(entry.source_url)) problems.push('official_website logo lacks source_url');
  if (entry.source_type === 'official_website' && isHttpUrl(entry.source_url) && liveBySlug.get(slug)?.root_domain) {
    const sourceHost = new URL(entry.source_url).hostname.replace(/^www\./, '');
    const expectedRoot = liveBySlug.get(slug).root_domain;
    if (sourceHost !== expectedRoot && !sourceHost.endsWith(`.${expectedRoot}`)) problems.push(`official logo source does not match canonical root domain ${expectedRoot}`);
  }
  if (entry.source_type === 'user_supplied' && !text(entry.source_reference)) problems.push('user_supplied logo lacks source_reference');
  if (!Number.isFinite(Number(entry.width)) || Number(entry.width) <= 0 || !Number.isFinite(Number(entry.height)) || Number(entry.height) <= 0) problems.push('invalid intrinsic dimensions');
  if (!/^[a-f0-9]{64}$/i.test(text(entry.sha256))) problems.push('missing or malformed sha256');
  if (localPath && fs.existsSync(localPath) && /^[a-f0-9]{64}$/i.test(text(entry.sha256))) {
    const actualHash = crypto.createHash('sha256').update(fs.readFileSync(localPath)).digest('hex');
    if (actualHash !== entry.sha256.toLowerCase()) problems.push('sha256 does not match local asset');
  }
  const existingSrcOwner = logoSrcOwners.get(src);
  if (existingSrcOwner && existingSrcOwner !== slug) problems.push(`logo src duplicates ${existingSrcOwner}`);
  else if (src) logoSrcOwners.set(src, slug);
  for (const alias of [slug, ...(entry.aliases || []), ...(entry.domains || [])]) {
    const normalizedAlias = normalizedEvidenceText(alias).replace(/\s+/g, '-');
    const existingOwner = logoAliasOwners.get(normalizedAlias);
    if (existingOwner && existingOwner !== slug) problems.push(`alias/domain collides with ${existingOwner}: ${alias}`);
    else if (normalizedAlias) logoAliasOwners.set(normalizedAlias, slug);
  }
  if (problems.length) logoManifestIntegrityIssues.push({ slug, src: src || null, problems: [...new Set(problems)] });
}
for (const [src] of Object.entries(logoManifest.excluded_assets || {})) {
  if (logoSrcOwners.has(src)) logoManifestIntegrityIssues.push({ slug: logoSrcOwners.get(src), src, problems: ['excluded non-server asset is also registered as a server logo'] });
}
const researchBySlug = new Map();
const duplicateResearchSlugs = [];
for (const entry of researchRows) {
  if (researchBySlug.has(entry.slug)) duplicateResearchSlugs.push(entry.slug);
  else researchBySlug.set(entry.slug, entry);
}

const malformedLiveRows = liveRows.flatMap((row, index) => {
  const identity = deriveServerIdentity(row);
  const rawNameBroken = HTML_OR_CODE.test(text(row.name));
  const problems = identityProblems({ ...identity, name: identity.name }, identity.slug);
  if (rawNameBroken) problems.push('raw listing name contains markup/code');
  return problems.length ? [{ index, input_name: row.name, host: row.ip || row.website_url || null, derived_name: identity.name, slug: identity.slug, problems: [...new Set(problems)] }] : [];
});
const malformedLiveCanonical = canonicalLive.flatMap((entry) => {
  const problems = identityProblems(entry, entry.canonical_slug || entry.slug);
  return problems.length ? [{ slug: entry.canonical_slug || entry.slug, name: entry.name, root_domain: entry.root_domain || null, problems }] : [];
});
const malformedManifest = manifestEntries.flatMap(([slug, entry]) => {
  const problems = identityProblems(entry, slug);
  return problems.length ? [{ slug, name: entry?.name || null, problems }] : [];
});
const malformedResearch = researchRows.flatMap((entry) => {
  const problems = identityProblems(entry, entry.slug);
  return problems.length ? [{ slug: entry.slug || null, name: entry.name || null, root_domain: entry.root_domain || null, problems }] : [];
});

const missingManifest = [...liveBySlug.keys()].filter((slug) => !Object.hasOwn(manifest, slug));
const missingResearch = [...liveBySlug.keys()].filter((slug) => !researchBySlug.has(slug));
const liveManifestEntries = [...liveBySlug.keys()].map((slug) => [slug, manifest[slug]]).filter(([, entry]) => entry);
const liveResearchEntries = [...liveBySlug.keys()].map((slug) => researchBySlug.get(slug)).filter(Boolean);

const genericManifestEvidence = manifestEntries.flatMap(([slug, entry]) => ['official_summary', 'official_excerpt', 'owner_excerpt'].flatMap((field) => {
  const matches = genericMatches(entry?.[field]);
  return matches.length ? [{ slug, field, patterns: matches, excerpt: text(entry[field]).slice(0, 220) }] : [];
}));

const unattributedResearchCommunity = researchRows.flatMap((entry) => {
  const ownerNames = new Set((entry.community_archive_threads || []).map((thread) => text(thread?.author).toLowerCase()).filter(Boolean));
  return (entry.community_excerpts || []).flatMap((excerpt, index) => {
    const problems = [];
    const author = text(excerpt?.author);
    if (!author) problems.push('missing author');
    if (author && ownerNames.has(author.toLowerCase())) problems.push('owner post classified as community experience');
    if (text(excerpt?.excerpt).length < 20) problems.push('missing or unusably short excerpt');
    if (!isHttpUrl(excerpt?.source_url, 'community_archive.net')) problems.push('missing direct community_archive source URL');
    return problems.length ? [{ slug: entry.slug, index, author: author || null, source_url: excerpt?.source_url || null, problems }] : [];
  });
});

const unprovenManifestClaims = manifestEntries.flatMap(([slug, entry]) => {
  const issues = [];
  const sources = Array.isArray(entry?.research_sources) ? entry.research_sources : [];
  const validSources = sources.filter((source) => isHttpUrl(source?.url));
  const forumSources = validSources.filter((source) => /^(?:community_forum|community_post)$/.test(source?.type) && isHttpUrl(source.url, 'community_archive.net'));
  const officialSources = validSources.filter((source) => source?.type === 'official_website');
  if (text(entry?.official_summary) && validSources.length === 0) issues.push('summary has no source URL');
  if (text(entry?.official_excerpt) && officialSources.length === 0 && !isHttpUrl(entry?.website_url)) issues.push('official excerpt has no official website source');
  if (text(entry?.community_excerpt)) {
    if (!text(entry?.community_excerpt_author) && !/^[^:]{1,80}:\s*[“"]/.test(text(entry.community_excerpt))) issues.push('community excerpt has no named author');
    if (forumSources.length === 0) issues.push('community excerpt has no community_archive provenance URL');
  }
  return issues.length ? [{ slug, issues }] : [];
});

const statusIntegrity = manifestEntries.flatMap(([slug, entry]) => {
  const source = researchBySlug.get(slug);
  const issues = [];
  if (!source) issues.push('manifest entry has no research record');
  if (source && entry.research_status !== source.source_status) issues.push(`status mismatch: manifest=${entry.research_status || 'missing'}, research=${source.source_status || 'missing'}`);
  if (entry.research_status === 'official' && !hasOfficialMetadata(source)) issues.push('official status lacks fetched official metadata');
  if (entry.research_status === 'owner_thread' && !hasOwnerThread(source)) issues.push('owner_thread status lacks an attributed owner excerpt');
  if (entry.research_status === 'community_thread' && validCommunityExcerpts(source).length === 0) issues.push('community_thread status lacks an attributed non-owner excerpt');
  if (entry.research_status === 'insufficient' && text(entry.official_summary)) issues.push('insufficient status exposes an evidence summary');
  return issues.length ? [{ slug, issues }] : [];
});

const calculatedStats = {
  canonical_servers: researchRows.length,
  with_summary: researchRows.filter((entry) => text(entry.summary)).length,
  with_owner_thread: researchRows.filter(hasOwnerThread).length,
  with_community_excerpts: researchRows.filter((entry) => validCommunityExcerpts(entry).length > 0).length,
  with_official_metadata: researchRows.filter(hasOfficialMetadata).length,
  insufficient: researchRows.filter((entry) => entry.source_status === 'insufficient').length,
};
// Compare the generated counters using the generator's own definitions. The stricter
// attributed/usable counters above are reported separately and must not make a fresh
// file look stale merely because they enforce a higher quality threshold.
const generatorStats = {
  canonical_servers: researchRows.length,
  with_summary: researchRows.filter((entry) => text(entry.summary)).length,
  with_owner_thread: researchRows.filter((entry) => (entry.community_archive_threads || []).some((thread) => thread.thread_role !== 'community_discussion')).length,
  with_community_excerpts: researchRows.filter((entry) => (entry.community_excerpts || []).length > 0).length,
  with_official_metadata: researchRows.filter((entry) => (entry.official_pages || []).some((page) => text(page.description))).length,
  insufficient: researchRows.filter((entry) => entry.source_status === 'insufficient').length,
};
const staleResearchStats = Object.entries(generatorStats).flatMap(([key, value]) => (
  Number(research.stats?.[key]) === value ? [] : [{ field: key, reported: research.stats?.[key] ?? null, calculated: value }]
));

const liveSubstantive = liveManifestEntries.filter(([, entry]) => isSubstantiveSummary(entry.official_summary));
const liveSourceBacked = liveManifestEntries.filter(([, entry]) => hasSourceBackedExcerpt(entry));
const liveOfficial = liveResearchEntries.filter(hasOfficialMetadata);
const liveOwnerThreads = liveResearchEntries.filter(hasOwnerThread);
const liveWithCommunity = liveResearchEntries.filter((entry) => validCommunityExcerpts(entry).length > 0);
const liveCommunityExcerptCount = liveResearchEntries.reduce((sum, entry) => sum + validCommunityExcerpts(entry).length, 0);
const liveInsufficient = [...liveBySlug.keys()].filter((slug) => !manifest[slug] || manifest[slug].research_status === 'insufficient');
const liveWithoutSourceBackedExcerpt = [...liveBySlug.keys()].filter((slug) => !hasSourceBackedExcerpt(manifest[slug]));
const liveWithoutSubstantiveSummary = [...liveBySlug.keys()].filter((slug) => !isSubstantiveSummary(manifest[slug]?.official_summary));

const liveOfficialAssessments = [...liveBySlug.keys()].map((slug) => {
  const manifestEntry = manifest[slug];
  const researchEntry = researchBySlug.get(slug);
  const pages = (researchEntry?.official_pages || []).map((page) => ({ page, assessment: officialPageAssessment(page) }));
  const sourceBackedPage = sourceBackedOfficialExcerpt(manifestEntry, researchEntry);
  return { slug, manifestEntry, researchEntry, pages, sourceBackedPage };
});
const liveWithSuccessfulOfficialFetch = liveOfficialAssessments.filter((item) => item.pages.some(({ assessment }) => assessment.successfulFetch));
const liveWithOfficialMetadata = liveOfficialAssessments.filter((item) => item.pages.some(({ assessment }) => assessment.hasMetadata));
const liveWithQualifiedOfficialPage = liveOfficialAssessments.filter((item) => item.pages.some(({ assessment }) => assessment.qualifiedExcerpt));
const liveWithSourceBackedOfficialExcerpt = liveOfficialAssessments.filter((item) => item.sourceBackedPage);
const liveOfficialMetadataShells = liveOfficialAssessments.flatMap((item) => {
  const shellPages = item.pages.filter(({ assessment }) => assessment.hasMetadata && !assessment.qualifiedExcerpt);
  return shellPages.length ? [{
    slug: item.slug,
    pages: shellPages.map(({ assessment }) => ({ url: assessment.url, reasons: assessment.shellReasons })),
  }] : [];
});
const liveTitleOnlyShells = liveOfficialAssessments.filter((item) => item.pages.some(({ assessment }) => assessment.shellReasons.includes('title only')));
const liveGenericDescriptionShells = liveOfficialAssessments.filter((item) => item.pages.some(({ assessment }) => assessment.shellReasons.some((reason) => /boilerplate|duplicated/i.test(reason))));
const liveOfficialExcerptQualityGaps = liveOfficialAssessments.flatMap((item) => {
  if (!text(item.manifestEntry?.official_excerpt) || item.sourceBackedPage) return [];
  const reasons = [];
  if (!item.pages.some(({ assessment }) => assessment.qualifiedExcerpt)) reasons.push('no qualified official-page excerpt');
  if (officialBoilerplateMatches(item.manifestEntry.official_excerpt).length) reasons.push(...officialBoilerplateMatches(item.manifestEntry.official_excerpt));
  if (text(item.manifestEntry.official_excerpt).length < 90 || wordCount(item.manifestEntry.official_excerpt) < 14) reasons.push('manifest official excerpt is too thin');
  if (!hasConcreteOfficialDetail(item.manifestEntry.official_excerpt)) reasons.push('manifest official excerpt lacks concrete server detail');
  if (officialSourceUrls(item.manifestEntry).length === 0) reasons.push('manifest official excerpt lacks official source URL');
  if (item.pages.some(({ assessment }) => assessment.qualifiedExcerpt)) reasons.push('qualified official excerpt was not propagated with exact source linkage');
  return [{ slug: item.slug, reasons: [...new Set(reasons)] }];
});
const liveOfficialStatus = liveOfficialAssessments.filter((item) => item.manifestEntry?.research_status === 'official');
const liveOfficialStatusSourceBacked = liveOfficialStatus.filter((item) => item.sourceBackedPage);
const liveOfficialStatusShellOnly = liveOfficialStatus.filter((item) => !item.sourceBackedPage);

const liveLogoAssessments = [...liveBySlug.keys()].map((slug) => {
  const manifestEntry = manifest[slug];
  const researchEntry = researchBySlug.get(slug);
  const archivedLogo = logoManifest.entries?.[slug] || null;
  const pageImages = (researchEntry?.official_pages || []).flatMap((page) => isHttpUrl(page?.image) ? [{ image_url: page.image, source_url: page.url }] : []);
  const officialCandidates = officialPageLogoCandidates(researchEntry);
  const explicit = explicitLogoAssessment(manifestEntry, researchEntry);
  const configuredLocalAsset = componentServerLogoSlugs.has(slug)
    && !brokenComponentLogoAssets.some((item) => item.slug === slug);
  const recordedLocalProvenance = configuredLocalAsset && archivedLogo
    ? (archivedLogo.source_type === 'official_website' && isHttpUrl(archivedLogo.source_url)
      ? archivedLogo.source_url
      : archivedLogo.source_type === 'user_supplied' && text(archivedLogo.source_reference)
        ? archivedLogo.source_reference
        : archivedLogo.source_type === 'primary_source_archive' && text(archivedLogo.source_reference || archivedLogo.source_url)
          ? archivedLogo.source_reference || archivedLogo.source_url
          : null)
    : null;
  const explicitValid = explicit.filter((declaration) => declaration.valid_url);
  const explicitProvenanced = explicitValid.filter((declaration) => declaration.provenance_url);
  const renderedServerLogo = configuredLocalAsset || (componentUsesDynamicLogoFields && explicitValid.length > 0);
  const provenanceRecorded = Boolean(recordedLocalProvenance || explicitProvenanced.length);
  return {
    slug,
    pageImages,
    officialCandidates,
    explicit,
    archivedLogo,
    configuredLocalAsset,
    recordedLocalProvenance,
    renderedServerLogo,
    provenanceRecorded,
  };
});
const liveWithOfficialPageImage = liveLogoAssessments.filter((item) => item.pageImages.length);
const liveWithOfficialLogoCandidate = liveLogoAssessments.filter((item) => item.officialCandidates.length);
const liveWithNonLogoPageImage = liveLogoAssessments.filter((item) => item.pageImages.length && !item.officialCandidates.length);
const liveWithExplicitLogo = liveLogoAssessments.filter((item) => item.explicit.some((declaration) => declaration.valid_url));
const liveWithProvenancedExplicitLogo = liveLogoAssessments.filter((item) => item.explicit.some((declaration) => declaration.valid_url && declaration.provenance_url));
const liveWithRenderedServerLogo = liveLogoAssessments.filter((item) => item.renderedServerLogo);
const liveRenderedLogoWithProvenance = liveLogoAssessments.filter((item) => item.renderedServerLogo && item.provenanceRecorded);
const liveOfficialLogoNotPropagated = liveLogoAssessments.filter((item) => item.officialCandidates.length && !item.explicit.length);
const liveLocalLogoWithoutProvenance = liveLogoAssessments.filter((item) => item.configuredLocalAsset && !item.recordedLocalProvenance);
const invalidExplicitLogoDeclarations = liveLogoAssessments.flatMap((item) => item.explicit.filter((declaration) => !declaration.valid_url).map((declaration) => ({ slug: item.slug, ...declaration })));
const unprovenExplicitLogoDeclarations = liveLogoAssessments.flatMap((item) => item.explicit.filter((declaration) => declaration.valid_url && !declaration.provenance_url).map((declaration) => ({ slug: item.slug, ...declaration })));

const representative = Object.fromEntries(['ezodus', 'exordion', 'realera'].map((slug) => {
  const live = liveBySlug.get(slug);
  const entry = manifest[slug];
  const source = researchBySlug.get(slug);
  const officialAssessment = liveOfficialAssessments.find((item) => item.slug === slug);
  const logoAssessment = liveLogoAssessments.find((item) => item.slug === slug);
  return [slug, {
    live_identity_present: Boolean(live),
    canonical_name: live?.name || null,
    canonical_path: live?.canonical_path || null,
    collapsed_live_rows: liveRows.filter((row) => deriveServerIdentity(row).slug === slug).length,
    manifest_present: Boolean(entry),
    research_status: entry?.research_status || null,
    source_backed_excerpt: hasSourceBackedExcerpt(entry),
    substantive_summary: isSubstantiveSummary(entry?.official_summary),
    official_metadata: hasOfficialMetadata(source),
    qualified_official_page_excerpt: Boolean(officialAssessment?.pages.some(({ assessment }) => assessment.qualifiedExcerpt)),
    source_backed_official_excerpt: Boolean(officialAssessment?.sourceBackedPage),
    attributed_owner_thread: hasOwnerThread(source),
    attributed_non_owner_excerpts: validCommunityExcerpts(source).length,
    official_logo_candidate: Boolean(logoAssessment?.officialCandidates.length),
    rendered_server_specific_logo: Boolean(logoAssessment?.renderedServerLogo),
    rendered_logo_provenance_recorded: Boolean(logoAssessment?.renderedServerLogo && logoAssessment?.provenanceRecorded),
    source_urls: (entry?.research_sources || []).map((item) => item.url).filter((url) => isHttpUrl(url)),
  }];
}));

const structuralFailures = [
  ...missingManifest.map((slug) => ({ type: 'missing live manifest entry', slug })),
  ...missingResearch.map((slug) => ({ type: 'missing live research entry', slug })),
  ...duplicateResearchSlugs.map((slug) => ({ type: 'duplicate research slug', slug })),
  ...malformedLiveRows.map((item) => ({ type: 'malformed live row identity', ...item })),
  ...malformedLiveCanonical.map((item) => ({ type: 'malformed canonical live identity', ...item })),
  ...malformedManifest.map((item) => ({ type: 'malformed manifest identity', ...item })),
  ...malformedResearch.map((item) => ({ type: 'malformed research identity', ...item })),
  ...genericManifestEvidence.map((item) => ({ type: 'generic template copy presented as evidence', ...item })),
  ...unattributedResearchCommunity.map((item) => ({ type: 'unattributed community excerpt', ...item })),
  ...unprovenManifestClaims.map((item) => ({ type: 'claim without provenance', ...item })),
  ...statusIntegrity.map((item) => ({ type: 'research status integrity', ...item })),
  ...staleResearchStats.map((item) => ({ type: 'stale generated research statistic', ...item })),
  ...invalidExplicitLogoDeclarations.map((item) => ({ type: 'invalid explicit logo URL', ...item })),
  ...unprovenExplicitLogoDeclarations.map((item) => ({ type: 'explicit logo lacks official-page provenance', ...item })),
  ...logoManifestIntegrityIssues.map((item) => ({ type: 'server logo manifest integrity', ...item })),
  ...brokenComponentLogoAssets.map((item) => ({ type: 'configured local logo asset is missing', ...item })),
  ...Object.entries(representative).flatMap(([slug, check]) => (!check.live_identity_present || !check.manifest_present
    ? [{ type: 'representative server missing', slug, check }]
    : [])),
];

const coverageComplete = missingManifest.length === 0
  && liveSourceBacked.length === canonicalLive.length
  && liveInsufficient.length === 0;
const structuralIntegrity = structuralFailures.length === 0;
const auditStatus = !structuralIntegrity ? 'structural_failures' : coverageComplete ? 'complete' : 'research_incomplete';
const officialSiteEnrichmentComplete = liveOfficialStatusShellOnly.length === 0
  && liveOfficialExcerptQualityGaps.length === 0;
const logoCoverageComplete = liveWithRenderedServerLogo.length === canonicalLive.length
  && liveRenderedLogoWithProvenance.length === canonicalLive.length;

const report = {
  audit_status: auditStatus,
  structural_integrity_passed: structuralIntegrity,
  research_coverage_complete: coverageComplete,
  official_site_enrichment_complete: officialSiteEnrichmentComplete,
  logo_coverage_complete: logoCoverageComplete,
  quality_contract: {
    official_source_backed_excerpt: 'Requires a successful accepted official-page fetch, at least 90 characters and 14 words, concrete server detail, no repeated/generic MMORPG boilerplate, a matching manifest excerpt, and an official source URL.',
    metadata_shell: 'A title-only, thin, duplicated, generic, irrelevant, or detail-free metadata record is reported separately and never counted as a source-backed official excerpt.',
    server_logo: 'Counts as a rendered server logo only when selected from the local server-logo manifest; generated initials remain fallbacks, not logos.',
    logo_provenance: 'Requires an approved source_type, official URL or user-supplied source reference, local asset path, intrinsic dimensions, and a matching SHA-256 digest.',
  },
  inputs: {
    live_exported_at: liveExport.exported_at || null,
    research_generated_at: research.generated_at || null,
    live_declared_rows: liveExport.row_count ?? null,
    live_rows_read: liveRows.length,
    manifest_entries: manifestEntries.length,
    research_records: researchRows.length,
  },
  live_directory: {
    canonical_servers: canonicalLive.length,
    aliases_collapsed: liveRows.length - canonicalLive.length,
    manifest_coverage: liveManifestEntries.length,
    manifest_coverage_percent: canonicalLive.length ? Number((liveManifestEntries.length / canonicalLive.length * 100).toFixed(2)) : 0,
    source_backed_excerpts: liveSourceBacked.length,
    substantive_summaries: liveSubstantive.length,
    official_metadata: liveOfficial.length,
    attributed_owner_threads: liveOwnerThreads.length,
    servers_with_attributed_non_owner_excerpts: liveWithCommunity.length,
    attributed_non_owner_excerpt_count: liveCommunityExcerptCount,
    insufficient_records: liveInsufficient.length,
    without_substantive_summary: liveWithoutSubstantiveSummary.length,
  },
  all_generated_research: calculatedStats,
  official_site_enrichment: {
    successful_official_fetches: liveWithSuccessfulOfficialFetch.length,
    records_with_any_official_metadata: liveWithOfficialMetadata.length,
    records_with_qualified_official_page_excerpt: liveWithQualifiedOfficialPage.length,
    records_with_source_backed_official_excerpt: liveWithSourceBackedOfficialExcerpt.length,
    metadata_or_title_shells: liveOfficialMetadataShells.length,
    title_only_shells: liveTitleOnlyShells.length,
    generic_or_duplicated_description_shells: liveGenericDescriptionShells.length,
    official_status_records: liveOfficialStatus.length,
    official_status_with_source_backed_excerpt: liveOfficialStatusSourceBacked.length,
    official_status_without_source_backed_excerpt: liveOfficialStatusShellOnly.length,
  },
  logo_coverage: {
    official_page_images: liveWithOfficialPageImage.length,
    official_page_logo_candidates: liveWithOfficialLogoCandidate.length,
    official_page_images_rejected_as_non_logo: liveWithNonLogoPageImage.length,
    manifest_or_research_explicit_logos: liveWithExplicitLogo.length,
    explicit_logos_with_official_provenance: liveWithProvenancedExplicitLogo.length,
    archived_local_server_logos: logoManifestEntries.length,
    archived_official_website_logos: logoManifestEntries.filter(([, entry]) => entry.source_type === 'official_website').length,
    archived_user_supplied_logos: logoManifestEntries.filter(([, entry]) => entry.source_type === 'user_supplied').length,
    configured_local_server_logos: componentServerLogoSlugs.size,
    rendered_server_specific_logos: liveWithRenderedServerLogo.length,
    rendered_server_specific_logo_percent: canonicalLive.length ? Number((liveWithRenderedServerLogo.length / canonicalLive.length * 100).toFixed(2)) : 0,
    rendered_logos_with_recorded_provenance: liveRenderedLogoWithProvenance.length,
    deterministic_generated_fallback_marks: canonicalLive.length - liveWithRenderedServerLogo.length,
    generic_directory_logo_fallbacks: /opentibiaservers-directory/.test(`${serverLogoComponent} ${serverLogoLibrary}`) ? canonicalLive.length - liveWithRenderedServerLogo.length : 0,
    logo_manifest_driven: logoManifestDriven,
    component_uses_dynamic_logo_fields: componentUsesDynamicLogoFields,
  },
  gaps: {
    missing_live_manifest_entries: summarizeIssues(missingManifest),
    missing_live_research_entries: summarizeIssues(missingResearch),
    live_insufficient_records: summarizeIssues(liveInsufficient, 50),
    live_without_source_backed_excerpt: summarizeIssues(liveWithoutSourceBackedExcerpt, 50),
    live_without_substantive_summary: summarizeIssues(liveWithoutSubstantiveSummary, 50),
    official_metadata_shells: summarizeIssues(liveOfficialMetadataShells, 50),
    official_excerpt_quality_or_linkage_gaps: summarizeIssues(liveOfficialExcerptQualityGaps, 50),
    official_status_without_source_backed_excerpt: summarizeIssues(liveOfficialStatusShellOnly.map((item) => item.slug), 50),
    official_logo_candidates_not_propagated: summarizeIssues(liveOfficialLogoNotPropagated.map((item) => item.slug), 50),
    rendered_local_logos_without_recorded_provenance: summarizeIssues(liveLocalLogoWithoutProvenance.map((item) => item.slug), 50),
    live_without_rendered_server_specific_logo: summarizeIssues(liveLogoAssessments.filter((item) => !item.renderedServerLogo).map((item) => item.slug), 50),
  },
  integrity_issues: {
    malformed_live_rows: summarizeIssues(malformedLiveRows),
    malformed_live_canonical: summarizeIssues(malformedLiveCanonical),
    malformed_manifest_records: summarizeIssues(malformedManifest),
    malformed_research_records: summarizeIssues(malformedResearch),
    duplicate_research_slugs: summarizeIssues(duplicateResearchSlugs),
    generic_template_evidence: summarizeIssues(genericManifestEvidence),
    unattributed_community_excerpts: summarizeIssues(unattributedResearchCommunity),
    unproven_manifest_claims: summarizeIssues(unprovenManifestClaims),
    status_integrity: summarizeIssues(statusIntegrity),
    stale_research_stats: summarizeIssues(staleResearchStats),
    invalid_explicit_logo_urls: summarizeIssues(invalidExplicitLogoDeclarations),
    explicit_logos_without_official_provenance: summarizeIssues(unprovenExplicitLogoDeclarations),
    broken_component_logo_assets: summarizeIssues(brokenComponentLogoAssets),
    logo_manifest_integrity: summarizeIssues(logoManifestIntegrityIssues),
  },
  representative_checks: representative,
  structural_failure_count: structuralFailures.length,
  structural_failure_examples: structuralFailures.slice(0, 50),
  exit_code_meaning: '0=complete, 1=structural integrity failure, 2=structurally valid but research coverage incomplete',
};

console.log(JSON.stringify(report, null, 2));
if (!structuralIntegrity) process.exitCode = 1;
else if (!coverageComplete) process.exitCode = 2;
