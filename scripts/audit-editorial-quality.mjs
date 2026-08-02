import { createHash } from 'node:crypto';
import fs from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCuratedPages } from '../lib/curated-pages.js';
import { buildCuratedCoda, buildDeepDiveSections } from '../lib/deep-dive-pages.js';
import {
  getKnowledgeCatalogArticle,
} from '../lib/knowledge-catalog.js';
import {
  buildKeywordArticle,
  buildKeywordPageDescription,
  buildKeywordPageTitle,
  getKeywordPages,
  shouldIndexKeywordPage,
} from '../lib/keyword-pages.js';
import { getOtlandServerGalaPages } from '../lib/otland-server-gala-pages.js';
import { getOtServerCuratedPages } from '../lib/otserver-curated-pages.js';
import { getResourcePages } from '../lib/resource-pages.js';
import { getTibiaWorldPages } from '../lib/tibia-world-pages.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reportPath = path.join(projectRoot, 'reports', 'editorial-quality-audit.json');
const contentExtensions = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx']);
const forbiddenBrandPattern = new RegExp(`\\b(?:${[
  ['Tibia', 'Wiki'].join(''),
  ['Tibia', ' Wiki'].join(''),
  ['Fan', 'dom'].join(''),
].join('|')})\\b`, 'i');
const internalJargonPattern = /\b(?:SEO|search volume|priority score|indexable|exact-match|ranking target|research queue|editorial queue|guide shell|keyword spam)\b/i;
const tiredCopyPattern = /\b(?:delve(?:s|d)? into|rich tapestry|in today's digital|game[ -]changer|unlock the power|embark on|whether you are a beginner|whether you're a beginner|ultimate one-stop guide)\b/i;
const mojibakePattern = /(?:\uFFFD|Ã.|Â.|â€|â€™|â€œ|â€)/;

const failures = [];

function fail(condition, message) {
  if (!condition) failures.push(message);
}

function hash(value) {
  return createHash('sha256').update(String(value)).digest('hex');
}

function words(value) {
  return String(value || '').trim().split(/\s+/).filter(Boolean);
}

function wordCount(value) {
  return words(value).length;
}

function sentences(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function voiceProfile(value) {
  const sentenceLengths = sentences(value).map(wordCount);
  const signals = {
    shortSentence: sentenceLengths.some((length) => length >= 3 && length <= 12),
    developedSentence: sentenceLengths.some((length) => length >= 20 && length <= 55),
    contrast: /\b(?:but|yet|rather|instead|while|more than|not merely|two stories|not only)\b/i.test(value),
    humanScale: /\b(?:player|community|memory|story|feel|trust|time|choice|evening|rival|friend)\b/i.test(value),
    practicalAction: /\b(?:compare|verify|read|ask|inspect|record|choose|confirm|test|trace)\b/i.test(value),
  };
  return {
    ...signals,
    score: Object.values(signals).filter(Boolean).length,
    sentenceCount: sentenceLengths.length,
  };
}

function stringifyCell(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return value.map(stringifyCell).join(' ');
  if (typeof value === 'object') return stringifyCell(value.text || Object.values(value));
  return '';
}

function knowledgeText(article) {
  const values = [article.name, article.summary, article.profile];
  for (const entry of article.facts || []) values.push(entry.key, entry.value);
  for (const section of article.sections || []) {
    values.push(section.title);
    for (const block of section.blocks || []) {
      values.push(block.title, block.text, block.caption, ...(block.columns || []));
      for (const item of block.items || []) {
        if (typeof item === 'string') values.push(item);
        else values.push(item.title, item.text);
      }
      for (const row of block.rows || []) values.push(...row.map(stringifyCell));
    }
  }
  return values.filter(Boolean).join('\n');
}

function fieldNoteText(article) {
  const section = article.sections?.find((entry) => entry.id === 'field-notes');
  if (!section) return '';
  return [section.title, ...section.blocks.flatMap((block) => [block.title, block.text])].filter(Boolean).join('\n');
}

function pageText(page, extraSections = []) {
  const values = [page.title, page.h1, page.dek, page.overview, page.official_summary, page.description];
  for (const entry of page.facts || []) values.push(entry.label, entry.value);
  for (const entry of page.infobox || []) values.push(entry.label, entry.value);
  for (const entry of page.timeline || []) values.push(entry.date, entry.title, entry.text);
  for (const section of [...(page.sections || []), ...extraSections]) {
    values.push(section.eyebrow, section.heading, ...(section.body || []));
  }
  for (const faq of page.faqs || page.faq_items || []) values.push(faq.question, faq.answer);
  for (const entry of page.glossary || []) values.push(entry.term, entry.definition);
  for (const entry of page.researchNotes || []) values.push(entry.label, entry.value);
  for (const entry of page.custom_sections || []) values.push(entry.title, entry.body);
  values.push(...(page.feature_bullets || []), ...(page.evergreenAngles || []));
  return values.filter(Boolean).join('\n');
}

function topicText(article) {
  const values = [article.h1, article.dek, article.label];
  for (const section of article.sections || []) values.push(section.eyebrow, section.heading, ...(section.body || []));
  for (const faq of article.faqs || []) values.push(faq.question, faq.answer);
  for (const entry of article.facts || []) values.push(entry.label, entry.value);
  return values.filter(Boolean).join('\n');
}

function walkCode(directory) {
  const output = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...walkCode(fullPath));
    else if (contentExtensions.has(path.extname(entry.name))) output.push(fullPath);
  }
  return output;
}

function scanCode() {
  const files = [
    ...walkCode(path.join(projectRoot, 'app')),
    ...walkCode(path.join(projectRoot, 'lib')),
  ];
  const wrapperSlugs = new Set();
  let wrapperCount = 0;

  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const relative = path.relative(projectRoot, file).replace(/\\/g, '/');
    fail(!mojibakePattern.test(source), `${relative}: possible mojibake sequence`);
    fail(!forbiddenBrandPattern.test(source), `${relative}: forbidden copied-source brand appears in source`);
    fail(!tiredCopyPattern.test(source), `${relative}: tired promotional phrase appears in source`);

    if (!source.includes('StaticExactMatchPage')) continue;
    const slug = source.match(/<StaticExactMatchPage\s+slug=["']([^"']+)["']/)?.[1];
    if (!slug) continue;
    wrapperCount += 1;
    const directoryName = path.basename(path.dirname(file));
    const fileName = path.basename(file, path.extname(file));
    fail(directoryName === slug, `${relative}: route folder does not match delegated slug ${slug}`);
    fail(fileName === slug, `${relative}: component filename does not match delegated slug ${slug}`);
    fail(!wrapperSlugs.has(slug), `${relative}: duplicate exact-page wrapper for ${slug}`);
    wrapperSlugs.add(slug);
  }

  return { files: files.length, exactPageWrappers: wrapperCount, uniqueWrapperSlugs: wrapperSlugs.size };
}

async function auditKnowledge() {
  const types = ['items', 'monsters', 'spells'];
  const signatures = new Set();
  const fieldSignatures = new Set();
  const fieldBlocks = new Map();
  const counts = {};
  let minimumWords = Number.POSITIVE_INFINITY;
  let minimumFieldWords = Number.POSITIVE_INFINITY;

  for (const type of types) {
    const records = JSON.parse(await readFile(path.join(projectRoot, 'data', 'knowledge', `${type}.json`), 'utf8'));
    counts[type] = records.length;
    for (const record of records) {
      const article = getKnowledgeCatalogArticle(type, record.slug);
      const label = `${type}/${record.slug}`;
      fail(Boolean(article), `${label}: article did not resolve`);
      if (!article) continue;
      const body = knowledgeText(article);
      const field = fieldNoteText(article);
      const bodySignature = hash(body);
      const fieldSignature = hash(field);
      const bodyWords = wordCount(body);
      const fieldWords = wordCount(field);
      const voice = voiceProfile(field);
      minimumWords = Math.min(minimumWords, bodyWords);
      minimumFieldWords = Math.min(minimumFieldWords, fieldWords);

      fail(!signatures.has(bodySignature), `${label}: duplicates another full knowledge article`);
      signatures.add(bodySignature);
      fail(!fieldSignatures.has(fieldSignature), `${label}: duplicates another field-note narrative`);
      fieldSignatures.add(fieldSignature);
      fail(bodyWords >= 550, `${label}: only ${bodyWords} rendered words`);
      fail(fieldWords >= 105, `${label}: field note is only ${fieldWords} words`);
      fail(article.sections.length >= 6, `${label}: fewer than six useful sections`);
      fail(article.sources.length >= 2, `${label}: fewer than two source records`);
      fail(voice.score >= 4 && voice.sentenceCount >= 5, `${label}: field-note voice lacks cadence, contrast, or practical texture`);
      fail(!internalJargonPattern.test(body), `${label}: exposes internal publishing jargon`);
      fail(!forbiddenBrandPattern.test(body), `${label}: contains copied-source branding`);
      fail(!tiredCopyPattern.test(body), `${label}: contains tired promotional phrasing`);

      const fieldSection = article.sections.find((entry) => entry.id === 'field-notes');
      for (const block of fieldSection?.blocks || []) {
        if (!block.text) continue;
        const owners = fieldBlocks.get(block.text) || [];
        owners.push(label);
        fieldBlocks.set(block.text, owners);
      }
    }
  }

  const repeatedFieldBlocks = [...fieldBlocks.values()].filter((owners) => owners.length > 1);
  fail(repeatedFieldBlocks.length === 0, `knowledge field notes contain ${repeatedFieldBlocks.length} repeated prose blocks`);

  return {
    ...counts,
    articles: signatures.size,
    uniqueArticleSignatures: signatures.size,
    uniqueFieldNoteSignatures: fieldSignatures.size,
    repeatedFieldBlocks: repeatedFieldBlocks.length,
    minimumRenderedWords: minimumWords,
    minimumFieldNoteWords: minimumFieldWords,
  };
}

async function auditSourceProseBoundary() {
  const snapshotNames = ['official-creatures.json', 'official-spells.json'];
  const forbiddenKeys = new Set(['articleBody', 'content', 'description', 'history', 'longDescription', 'prose', 'summary', 'text']);
  let records = 0;

  for (const snapshotName of snapshotNames) {
    const snapshot = JSON.parse(await readFile(path.join(projectRoot, 'data', 'knowledge-source', snapshotName), 'utf8'));
    for (const record of snapshot.records || []) {
      records += 1;
      for (const key of Object.keys(record)) {
        fail(!forbiddenKeys.has(key), `${snapshotName}/${record.name || record.race}: imported source prose field ${key}`);
      }
    }
  }

  return {
    snapshots: snapshotNames.length,
    factualRecords: records,
    importedProseFields: 0,
  };
}

function auditPageGroup(name, pages, options = {}) {
  const signatures = new Set();
  let minimumWords = Number.POSITIVE_INFINITY;
  let minimumVoiceScore = Number.POSITIVE_INFINITY;
  let sourceBacked = 0;

  for (const page of pages) {
    const label = `${name}/${page.slug || page.id || page.name}`;
    const extraSections = [
      ...(options.deepDive ? buildDeepDiveSections(page) : []),
      ...(options.coda ? [buildCuratedCoda(page)] : []),
    ];
    const body = pageText(page, extraSections);
    const bodyWords = wordCount(body);
    const voice = voiceProfile(body);
    const signature = hash(body);
    const sources = page.sourceLinks || page.research_sources || [];
    minimumWords = Math.min(minimumWords, bodyWords);
    minimumVoiceScore = Math.min(minimumVoiceScore, voice.score);
    if (sources.length > 0) sourceBacked += 1;

    fail(!signatures.has(signature), `${label}: duplicates another full page in its collection`);
    signatures.add(signature);
    fail(bodyWords >= options.minimumWords, `${label}: only ${bodyWords} rendered words; expected ${options.minimumWords}`);
    fail(voice.score >= options.minimumVoiceScore, `${label}: prose lacks enough cadence, contrast, human scale, or practical action`);
    fail(!internalJargonPattern.test(body), `${label}: exposes internal publishing jargon`);
    fail(!forbiddenBrandPattern.test(body), `${label}: contains copied-source branding`);
    fail(!tiredCopyPattern.test(body), `${label}: contains tired promotional phrasing`);
    if (options.requireSources) fail(sources.length > 0, `${label}: has no source trail`);
  }

  return {
    pages: pages.length,
    uniquePageSignatures: signatures.size,
    sourceBacked,
    minimumRenderedWords: Number.isFinite(minimumWords) ? minimumWords : 0,
    minimumVoiceScore: Number.isFinite(minimumVoiceScore) ? minimumVoiceScore : 0,
  };
}

function auditTopics() {
  const pages = getKeywordPages();
  const signatures = new Set();
  const titles = new Set();
  let indexable = 0;
  let minimumWords = Number.POSITIVE_INFINITY;

  for (const page of pages) {
    const article = buildKeywordArticle(page);
    const body = topicText(article);
    const bodyWords = wordCount(body);
    const title = buildKeywordPageTitle(page);
    const description = buildKeywordPageDescription(page);
    const signature = hash(body);
    const label = `topics/${page.slug}`;
    const voice = voiceProfile(body);
    minimumWords = Math.min(minimumWords, bodyWords);
    if (shouldIndexKeywordPage(page)) indexable += 1;

    fail(!signatures.has(signature), `${label}: duplicates another topic page`);
    signatures.add(signature);
    fail(!titles.has(title), `${label}: duplicates another metadata title`);
    titles.add(title);
    fail(bodyWords >= 430, `${label}: only ${bodyWords} rendered words`);
    fail(article.sections.length >= 5, `${label}: fewer than five useful sections`);
    fail(article.faqs.length >= 3, `${label}: fewer than three practical questions`);
    fail(voice.score >= 4, `${label}: prose lacks enough cadence, contrast, human scale, or practical action`);
    fail(description.length >= 120 && description.length <= 158, `${label}: metadata description is ${description.length} characters`);
    fail(!internalJargonPattern.test(body), `${label}: exposes internal publishing jargon`);
    fail(!tiredCopyPattern.test(body), `${label}: contains tired promotional phrasing`);
  }

  return {
    pages: pages.length,
    indexableAfterEvidenceGate: indexable,
    uniquePageSignatures: signatures.size,
    uniqueMetadataTitles: titles.size,
    minimumRenderedWords: minimumWords,
  };
}

const code = scanCode();
const sourceProseBoundary = await auditSourceProseBoundary();
const knowledge = await auditKnowledge();
const pageCollections = {
  curated: auditPageGroup('curated', getCuratedPages(), { minimumWords: 650, minimumVoiceScore: 3, requireSources: true, coda: true }),
  resources: auditPageGroup('resources', getResourcePages(), { minimumWords: 650, minimumVoiceScore: 3, requireSources: true, coda: true }),
  worlds: auditPageGroup('worlds', getTibiaWorldPages(), { minimumWords: 650, minimumVoiceScore: 3, requireSources: true, coda: true }),
  directoryProfiles: auditPageGroup('directory', getOtServerCuratedPages(), { minimumWords: 1200, minimumVoiceScore: 4, requireSources: true, deepDive: true, coda: true }),
  otlandProfiles: auditPageGroup('otland', getOtlandServerGalaPages(), { minimumWords: 180, minimumVoiceScore: 3, requireSources: true }),
};
const topics = auditTopics();

const report = {
  auditedAt: new Date().toISOString(),
  status: failures.length === 0 ? 'passed' : 'failed',
  code,
  sourceProseBoundary,
  knowledge,
  pageCollections,
  topics,
  gates: {
    originalSourceBrandingBlocked: true,
    externalSourceProseImportBlocked: true,
    exactDuplicateArticlesBlocked: true,
    exactDuplicateFieldNotesBlocked: true,
    internalPublishingJargonBlocked: true,
    tiredPromotionalPhrasesBlocked: true,
    topicIndexingRequiresMeasuredDemandAndVerifiedSources: true,
  },
  failures: failures.slice(0, 250),
};

await mkdir(path.dirname(reportPath), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (failures.length > 0) {
  process.stderr.write(`Editorial quality audit failed with ${failures.length} issue${failures.length === 1 ? '' : 's'}:\n`);
  for (const failure of failures.slice(0, 250)) process.stderr.write(`- ${failure}\n`);
  if (failures.length > 250) process.stderr.write(`- ...and ${failures.length - 250} more\n`);
  process.exit(1);
}

process.stdout.write(
  `Editorial quality audit passed: ${code.files.toLocaleString('en-US')} code files, ${knowledge.articles.toLocaleString('en-US')} knowledge articles, ${Object.values(pageCollections).reduce((sum, group) => sum + group.pages, 0).toLocaleString('en-US')} curated profiles, and ${topics.pages.toLocaleString('en-US')} topic pages.\n`,
);
