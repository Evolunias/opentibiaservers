import { getRootDomain, getRootDomainLabel } from './server-identity.js';

const GENERIC_IDENTITIES = new Set([
  'game', 'global', 'international', 'light', 'login', 'old', 'server', 'tibia', 'world',
]);

const BLOCKED_PAGE = /\b(?:cloudflare|just a moment|access denied|attention required|domain (?:is )?for sale|buy this domain|parked (?:free|domain)|sedo|hugedomains|default web site page|website not found|404 not found|403 forbidden|index of \/)\b/i;
const NAVIGATION_OR_LEGAL = /\b(?:cookie(?:s| policy)?|privacy policy|terms of (?:service|use)|all rights reserved|javascript is required|enable javascript|sign in|create account|forgot password)\b/i;
const GENERIC_MMORPG = /\btibia is a free (?:massive|massively) multiplayer online role[ -]?playing game\b|\bjoin this fascinating game that has thousands of fans\b/i;
const GAME_CONTEXT = /\b(?:open\s*tibia|tibia|ot\s*server|otserver|ots\b|baiak|yurots|pok[eé](?:mon|tibia)|narutibia|dragon\s*ball|mmorpg|rpg|pvp|guild|vocation|quest|monster|client|character|world|server|play)\b/i;

const SPECIFIC_SIGNALS = [
  ['version', /\b(?:client|protocol|version)\s*(?:7|8|9|10|11|12|13|14|15)(?:\.\d+)?\b|\btibia\s*(?:7|8|9|10|11|12|13|14|15)(?:\.\d+)?\b/i],
  ['rates', /\b(?:exp|experience|skill|magic|loot)\s*(?:rate|stages?|\d+x)\b/i],
  ['quests', /\bquests?\b/i],
  ['bosses', /\bboss(?:es|iary)?\b/i],
  ['events', /\bevents?\b/i],
  ['guilds', /\bguilds?(?:\s+wars?)?\b/i],
  ['pvp', /\b(?:open|retro|hardcore)?\s*pvp\b|\bnon[ -]?pvp\b/i],
  ['custom_content', /\bcustom\s+(?:map|content|quest|monster|item|spell|vocation|system|client|progression)s?\b/i],
  ['systems', /\b(?:crafting|mining|rebirth|prestige|autoloot|bestiary|forge|wheel of destiny|task system|upgrade system)\b/i],
  ['platform', /\b(?:windows|android|ios|macos|linux|cross[ -]?platform)\b/i],
  ['community', /\bcommunity\b/i],
  ['account_paths', /\b(?:create|register)\s+(?:an?\s+)?account\b|\bdownload\s+(?:the\s+)?client\b/i],
];

function decodeHtml(value = '') {
  return String(value)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;|&#8203;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&middot;/gi, '·');
}

function cleanHtml(value = '') {
  return decodeHtml(String(value)
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '. ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\\n|\\r|\\t/g, ' ')
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

function metaContents(html, key, attribute = 'name') {
  const escapedKey = String(key).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`<meta[^>]+${attribute}=["']${escapedKey}["'][^>]+content=["']([^"']+)["']`, 'gi'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attribute}=["']${escapedKey}["']`, 'gi'),
  ];
  return patterns.flatMap((pattern) => [...String(html).matchAll(pattern)].map((match) => cleanHtml(match[1]))).filter(Boolean);
}

function compact(value = '') {
  return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function identityPattern(value = '') {
  const normalized = compact(value);
  if (normalized.length < 4 || GENERIC_IDENTITIES.has(normalized)) return null;
  const characters = [...normalized].map((character) => character.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('[^a-z0-9]*');
  return new RegExp(`(^|[^a-z0-9])${characters}(?=$|[^a-z0-9])`, 'i');
}

function unique(items = []) {
  return [...new Set(items.filter(Boolean))];
}

function conservativeIdentityVariants(value = '') {
  const raw = String(value || '').trim();
  const normalized = compact(raw);
  const variants = [raw];
  const withoutServerSuffix = normalized.replace(/(?:otserver|server|ots|ot)$/, '');
  if (withoutServerSuffix.length >= 5 && withoutServerSuffix !== normalized) variants.push(withoutServerSuffix);
  return variants;
}

export function officialIdentityLabels(entry = {}) {
  const rootLabel = getRootDomainLabel(entry.root_domain || '');
  return unique([entry.name, rootLabel, ...(entry.aliases || [])].flatMap(conservativeIdentityVariants))
    .map((value) => String(value).trim())
    .filter((value) => identityPattern(value));
}

export function matchingOfficialIdentities(value = '', entry = {}) {
  return officialIdentityLabels(entry).filter((label) => identityPattern(label)?.test(value));
}

export function officialPageCandidatePriority(page = {}, entry = {}) {
  const sources = page.candidate_sources || [page.candidate_source].filter(Boolean);
  const sourceScore = sources.includes('community_archive_owner_record') ? 30
    : sources.includes('directory_listing') ? 20
      : sources.includes('derived_root_domain') ? 10
        : 0;
  const expectedRoot = getRootDomain(entry.root_domain || '');
  const candidateRoot = getRootDomain(page.url || '');
  const sameRoot = Boolean(expectedRoot && candidateRoot && expectedRoot === candidateRoot);
  const sameRootLabel = Boolean(
    getRootDomainLabel(expectedRoot).length >= 4
    && getRootDomainLabel(expectedRoot) === getRootDomainLabel(candidateRoot),
  );
  const hostIdentity = matchingOfficialIdentities(candidateRoot, entry).length > 0;
  return sourceScore + (sameRoot ? 8 : sameRootLabel ? 5 : 0) + (hostIdentity ? 3 : 0) + (/^https:/i.test(page.url || '') ? 1 : 0);
}

export function officialDescriptionQuality(value = '') {
  const description = cleanHtml(value);
  const wordCount = description.split(/\s+/).filter(Boolean).length;
  const signals = SPECIFIC_SIGNALS.filter(([, pattern]) => pattern.test(description)).map(([label]) => label);
  const reasons = [];
  if (description.length < 90 || wordCount < 14) reasons.push('description_too_short_for_helpful_excerpt');
  if (description.length > 800) reasons.push('description_too_long');
  if (NAVIGATION_OR_LEGAL.test(description)) reasons.push('navigation_or_legal_copy');
  if (!GAME_CONTEXT.test(description)) reasons.push('missing_game_context');
  if (GENERIC_MMORPG.test(description)) reasons.push('generic_mmorpg_boilerplate');
  if (!signals.length) reasons.push('missing_server_specific_detail');
  if (/^(?:latest|last)\s+news\b|^welcome\s+to\s+(?:our|the)\s+(?:website|server)\.?$/i.test(description)) reasons.push('navigation_or_placeholder_copy');
  const accepted = reasons.length === 0;
  return {
    accepted,
    reasons,
    word_count: wordCount,
    character_count: description.length,
    specificity_signals: signals,
    score: accepted ? Math.min(20, 6 + signals.length * 2 + Math.min(4, Math.floor(wordCount / 12))) : -reasons.length,
  };
}

function descriptionCandidates(html = '') {
  const candidates = [];
  const add = (source, values) => {
    for (const value of values) {
      const text = cleanHtml(value);
      if (!text || candidates.some((candidate) => candidate.text === text)) continue;
      candidates.push({ source, text });
    }
  };
  add('meta_description', metaContents(html, 'description'));
  add('open_graph_description', metaContents(html, 'og:description', 'property'));
  add('twitter_description', metaContents(html, 'twitter:description'));
  add('json_ld_description', [...String(html).matchAll(/"description"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"/gi)].map((match) => match[1]));
  add('main_paragraph', [...String(html).matchAll(/<main\b[^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => match[1]));
  add('article_paragraph', [...String(html).matchAll(/<article\b[^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => match[1]));
  add('body_paragraph', [...String(html).matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => match[1]));
  return candidates.slice(0, 30);
}

function absoluteImageUrl(value = '', pageUrl = '') {
  try {
    const resolved = new URL(value, pageUrl);
    return /^https?:$/i.test(resolved.protocol) ? resolved.href : '';
  } catch {
    return '';
  }
}

function imageCandidates(html = '', pageUrl = '', entry = {}) {
  const candidates = [];
  const add = (source, value, context = '') => {
    const url = absoluteImageUrl(cleanHtml(value), pageUrl);
    if (!url || candidates.some((candidate) => candidate.url === url)) return;
    const combined = `${url} ${cleanHtml(context)}`;
    if (/(?:favicon|apple-touch-icon|pixel|tracker|spacer|spinner|loading|avatar|screenshot|background|sprite)/i.test(combined)) return;
    const identityMatches = matchingOfficialIdentities(combined, entry);
    let score = identityMatches.length * 6;
    if (/\b(?:logo|wordmark|brand|header-logo)\b/i.test(combined)) score += 10;
    if (source === 'open_graph_image') score += 4;
    if (source === 'twitter_image') score += 3;
    if (source === 'logo_image_element') score += 8;
    candidates.push({ source, url, context: cleanHtml(context).slice(0, 180), identity_matches: identityMatches, score });
  };

  add('open_graph_image', metaContents(html, 'og:image', 'property')[0]);
  add('twitter_image', metaContents(html, 'twitter:image')[0]);
  for (const match of String(html).matchAll(/<img\b([^>]+)>/gi)) {
    const attributes = match[1];
    const src = attributes.match(/(?:src|data-src|data-lazy-src)=["']([^"']+)["']/i)?.[1];
    const context = [
      attributes.match(/alt=["']([^"']*)["']/i)?.[1],
      attributes.match(/class=["']([^"']*)["']/i)?.[1],
      attributes.match(/id=["']([^"']*)["']/i)?.[1],
    ].filter(Boolean).join(' ');
    if (src && /logo|wordmark|brand/i.test(`${src} ${context}`)) add('logo_image_element', src, context);
  }
  return candidates.sort((left, right) => right.score - left.score).slice(0, 10);
}

export function extractOfficialMetadata(html = '', url = '', entry = {}) {
  const title = cleanHtml(
    metaContents(html, 'og:title', 'property')[0]
      || metaContents(html, 'twitter:title')[0]
      || String(html).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
      || '',
  );
  const images = imageCandidates(html, url, entry);
  const image = images[0]?.url || '';
  const blocked = BLOCKED_PAGE.test(`${title} ${cleanHtml(html).slice(0, 1500)}`);
  const candidates = descriptionCandidates(html).map((candidate, index) => {
    const quality = officialDescriptionQuality(candidate.text);
    const identityMatches = matchingOfficialIdentities(candidate.text, entry);
    const sourceBonus = candidate.source === 'meta_description' || candidate.source === 'open_graph_description' ? 2 : 0;
    return {
      ...candidate,
      quality,
      identity_matches: identityMatches,
      rank: quality.score + identityMatches.length * 6 + sourceBonus - index / 100,
    };
  }).sort((left, right) => right.rank - left.rank);
  const selected = blocked ? null : candidates.find((candidate) => candidate.quality.accepted);
  const rejectedCandidates = candidates.filter((candidate) => !candidate.quality.accepted).slice(0, 5);
  return {
    url,
    title: blocked ? '' : title.slice(0, 180),
    description: selected?.text.slice(0, 500) || '',
    image: !blocked && /^https?:\/\//i.test(image) ? image : '',
    image_candidate_source: !blocked ? images[0]?.source || null : null,
    image_candidates: blocked ? [] : images,
    metadata_schema_version: 2,
    extraction_status: blocked ? 'blocked_or_error_page' : selected ? 'description_extracted' : 'no_substantive_description',
    description_source: selected?.source || null,
    description_quality: selected?.quality || null,
    extraction_candidate_count: candidates.length,
    rejected_description_candidates: rejectedCandidates.map((candidate) => ({
      source: candidate.source,
      reasons: candidate.quality.reasons,
      preview: candidate.text.slice(0, 180),
    })),
  };
}

export function assessOfficialMetadata(page = {}, entry = {}) {
  const title = cleanHtml(page.title || '');
  const description = cleanHtml(page.description || '');
  const combined = `${title} ${description}`.trim();
  const expectedRoot = getRootDomain(entry.root_domain || '');
  const resolvedRoot = getRootDomain(page.url || '');
  const expectedRootLabel = getRootDomainLabel(expectedRoot);
  const resolvedRootLabel = getRootDomainLabel(resolvedRoot);
  const domainAligned = Boolean(expectedRoot && resolvedRoot && (
    expectedRoot === resolvedRoot
    || (expectedRootLabel.length >= 4 && expectedRootLabel === resolvedRootLabel)
  ));
  const titleIdentities = matchingOfficialIdentities(title, entry);
  const descriptionIdentities = matchingOfficialIdentities(description, entry);
  const quality = officialDescriptionQuality(description);
  const reasons = [];
  if (!domainAligned) reasons.push('resolved_domain_mismatch');
  if (!description) reasons.push('missing_substantive_description');
  else reasons.push(...quality.reasons);
  if (!titleIdentities.length && !descriptionIdentities.length) reasons.push('canonical_identity_not_present');
  if (description && !GAME_CONTEXT.test(combined)) reasons.push('missing_open_tibia_or_game_context');
  const uniqueReasons = unique(reasons);
  return {
    accepted: uniqueReasons.length === 0,
    status: uniqueReasons.length === 0 ? 'accepted' : 'rejected_unrelated_or_unverifiable',
    reasons: uniqueReasons,
    evidence: {
      expected_root_domain: expectedRoot || null,
      resolved_root_domain: resolvedRoot || null,
      expected_root_label: expectedRootLabel || null,
      resolved_root_label: resolvedRootLabel || null,
      domain_aligned: domainAligned,
      title_identity_matches: titleIdentities,
      description_identity_matches: descriptionIdentities,
      description_specificity_signals: quality.specificity_signals,
      candidate_sources: page.candidate_sources || [page.candidate_source].filter(Boolean),
    },
  };
}

export function applyOfficialMetadataAssessment(page = {}, entry = {}) {
  const recoverable = page.description || page.title
    ? page
    : { ...page, ...(page.rejected_metadata || {}) };
  const assessment = assessOfficialMetadata(recoverable, entry);
  const base = {
    ...page,
    metadata_schema_version: page.metadata_schema_version || 2,
    relevance_status: assessment.status,
    relevance_reasons: assessment.reasons,
    relevance_evidence: assessment.evidence,
  };
  if (assessment.accepted) {
    return {
      ...base,
      title: recoverable.title || '',
      description: recoverable.description || '',
      image: recoverable.image || '',
      rejected_metadata: null,
    };
  }
  return {
    ...base,
    rejected_metadata: recoverable.title || recoverable.description ? {
      title: recoverable.title || '',
      description: recoverable.description || '',
      image: recoverable.image || '',
      description_source: recoverable.description_source || null,
    } : (page.rejected_metadata || null),
    title: '',
    description: '',
    image: '',
  };
}
