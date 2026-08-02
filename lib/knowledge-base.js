import { bestiaryArticles } from './knowledge-bestiary.js';
import {
  getKnowledgeCatalogArticle,
  getKnowledgeCatalogStaticParams,
} from './knowledge-catalog.js';
import { guideArticles } from './knowledge-guides.js';
import { mechanicsArticles } from './knowledge-mechanics.js';
import { progressionArticles } from './knowledge-progression.js';

const DEFAULT_SITE_URL = 'https://opentibiaservers.com';
const DEFAULT_SITE_NAME = 'OpenTibiaServers.com';

function getKnowledgeSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
}

function getKnowledgeSiteName() {
  return process.env.NEXT_PUBLIC_SITE_NAME || DEFAULT_SITE_NAME;
}

function buildKnowledgeAbsoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${getKnowledgeSiteUrl()}${path}`;
}

export const knowledgeCollections = [
  {
    slug: 'mechanics',
    label: 'Mechanics & Systems',
    shortLabel: 'Mechanics',
    sigil: 'M',
    description: 'Damage order, armor, defense, resistance, critical hits, protection zones, skulls, frags, and PvP state.',
    scope: ['Combat pipeline', 'Armor and defense', 'Elemental protection', 'Critical hits', 'Protection zones', 'PvP aggression'],
  },
  {
    slug: 'progression',
    label: 'Core Progression',
    shortLabel: 'Progression',
    sigil: 'P',
    description: 'Level experience, skill curves, magic-level requirements, stamina, rates, training, and server pacing.',
    scope: ['Experience curve', 'Level stages', 'Weapon skills', 'Magic level', 'Stamina', 'Training rates'],
  },
  {
    slug: 'combat',
    label: 'Spells & Combat',
    shortLabel: 'Combat',
    sigil: 'C',
    description: 'Instant spells, runes, targeting, mana and soul costs, cooldown groups, formulas, conditions, and PvP behavior.',
    scope: ['Instant spells', 'Runes', 'Cooldown groups', 'Targeting', 'Damage formulas', 'Conditions'],
  },
  {
    slug: 'bestiary',
    label: 'Bestiary & Monsters',
    shortLabel: 'Bestiary',
    sigil: 'B',
    description: 'Versioned creature profiles with complete stats, behavior, attacks, elements, loot, and tactical planning.',
    scope: ['Statistics', 'AI behavior', 'Attack cycles', 'Resistances', 'Complete loot', 'Hunt planning'],
  },
  {
    slug: 'equipment',
    label: 'Equipment & Items',
    shortLabel: 'Equipment',
    sigil: 'E',
    description: 'Item attributes, equipment slots, loadout math, acquisition, rarity, upgrade systems, and economy context.',
    scope: ['Weapons', 'Shields', 'Armor sets', 'Rings and amulets', 'Upgrade paths', 'Acquisition'],
  },
  {
    slug: 'quests',
    label: 'Quests & Secrets',
    shortLabel: 'Quests',
    sigil: 'Q',
    description: 'A verification standard for access missions, required items, routes, bosses, shortcuts, rewards, and hidden states.',
    scope: ['Prerequisites', 'Access routes', 'Storage states', 'Boss mechanics', 'Rewards', 'Shortcuts'],
  },
  {
    slug: 'systems',
    label: 'Server Rulesets',
    shortLabel: 'Rulesets',
    sigil: 'R',
    description: 'Evidence profiles that separate official behavior, engine defaults, owner settings, observations, and historical states.',
    scope: ['Source hierarchy', 'Verification status', 'Engine profiles', 'Live testing', 'Change control', 'Corrections'],
  },
];

export const knowledgeEntities = [
  ...mechanicsArticles,
  ...progressionArticles,
  ...bestiaryArticles,
  ...guideArticles,
].map((article) => ({
  indexable: article.indexable !== false && article.status !== 'partial',
  ...article,
}));

export function getKnowledgeCollection(slug) {
  return knowledgeCollections.find((collection) => collection.slug === slug) || null;
}

export function getKnowledgeEntity(slug, collection = null) {
  return knowledgeEntities.find((entity) => (
    entity.slug === slug && (!collection || entity.collection === collection)
  )) || null;
}

export function getKnowledgeEntityByPath(collection, slug) {
  const requestedPath = `/knowledge/${collection}/${slug}`;
  const article = knowledgeEntities.find((entity) => (
    entity.canonicalPath === requestedPath || (entity.legacyPaths || []).includes(requestedPath)
  ));
  return article || getKnowledgeCatalogArticle(collection, slug);
}

export function getKnowledgeEntitiesByType(type) {
  return knowledgeEntities.filter((entity) => entity.entityType === type);
}

export function getKnowledgeEntitiesByCollection(collection) {
  return knowledgeEntities.filter((entity) => entity.collection === collection && entity.indexable);
}

export function getRelatedKnowledgeEntities(entity) {
  const articleRelations = (entity.relatedSlugs || [])
    .map((slug) => getKnowledgeEntity(slug))
    .filter(Boolean);
  const catalogRelations = (entity.relatedPaths || [])
    .map((pathname) => {
      const [, knowledge, collection, slug] = pathname.split('/');
      if (knowledge !== 'knowledge') return null;
      return getKnowledgeEntityByPath(collection, slug);
    })
    .filter(Boolean);
  const seen = new Set();
  return [...articleRelations, ...catalogRelations].filter((related) => {
    if (seen.has(related.canonicalPath)) return false;
    seen.add(related.canonicalPath);
    return related.canonicalPath !== entity.canonicalPath;
  });
}

export function getKnowledgeStaticParams() {
  const articleParams = knowledgeEntities.flatMap((entity) => {
    const paths = [entity.canonicalPath, ...(entity.legacyPaths || [])];
    return paths.map((path) => {
      const [, , type, slug] = path.split('/');
      return { type, slug };
    });
  });
  const seen = new Set();
  return [...articleParams, ...getKnowledgeCatalogStaticParams()].filter((params) => {
    const key = `${params.type}/${params.slug}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function buildKnowledgeMetadata(entity) {
  const metadataName = entity.seoQualifier ? `${entity.name} (${entity.seoQualifier})` : entity.name;
  const titleByType = {
    item: `${metadataName}: Item IDs, Attributes & Loot`,
    monster: `${metadataName}: Stats, Attacks, Weaknesses & Loot`,
    spell: `${metadataName}: Words, Mana, Cooldown & Requirements`,
  };
  const title = titleByType[entity.entityType] || `${metadataName}: Tibia & Open Tibia Guide`;
  const description = entity.summary.slice(0, 160);
  const image = buildKnowledgeAbsoluteUrl('/images/knowledge-atlas-hero.webp');

  return {
    title,
    description,
    keywords: entity.keywords,
    alternates: {
      canonical: buildKnowledgeAbsoluteUrl(entity.canonicalPath),
    },
    robots: {
      index: entity.indexable,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: buildKnowledgeAbsoluteUrl(entity.canonicalPath),
      siteName: getKnowledgeSiteName(),
      type: 'article',
      images: [{ url: image, width: 1600, height: 900, alt: 'Original Open Tibia knowledge atlas' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
