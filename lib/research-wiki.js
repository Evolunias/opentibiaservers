import fs from 'fs';
import path from 'path';

const SITE = 'https://opentibiaservers.com';

export function slugifyResearchPath(pathname = '/') {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return 'home';
  return p.replace(/^\//, '').replace(/\//g, '__').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'page';
}

export function classifyResearchPath(pathname = '/') {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/') return { type: 'home', collection: 'site', titleHint: 'Open Tibia Servers homepage' };
  if (p === '/directory') return { type: 'directory', collection: 'site', titleHint: 'Open Tibia server directory' };
  if (p === '/rankings') return { type: 'rankings', collection: 'site', titleHint: 'Open Tibia server rankings' };
  if (p === '/resources') return { type: 'resources', collection: 'site', titleHint: 'Open Tibia resources hub' };
  if (p === '/wiki') return { type: 'wiki-index', collection: 'wiki', titleHint: 'Open Tibia Servers wiki library' };
  if (p === '/research') return { type: 'research-index', collection: 'research', titleHint: 'Independent research wiki' };
  if (p === '/evomanias') return { type: 'partner', collection: 'partner', titleHint: 'Evomanias featured partner profile' };
  if (p === '/contact') return { type: 'contact', collection: 'site', titleHint: 'Contact OpenTibiaServers.com' };
  if (p === '/knowledge') return { type: 'knowledge-index', collection: 'knowledge', titleHint: 'Open Tibia knowledge hub' };
  if (p.startsWith('/wiki/')) return { type: 'server-wiki', collection: 'wiki', titleHint: p.slice(6) };
  if (p.startsWith('/knowledge/items/')) return { type: 'item', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/monsters/')) return { type: 'monster', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/spells/')) return { type: 'spell', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/mechanics/')) return { type: 'mechanics', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/progression/')) return { type: 'progression', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/bestiary/')) return { type: 'bestiary', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/equipment/')) return { type: 'equipment', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/knowledge/')) return { type: 'knowledge', collection: 'knowledge', titleHint: p.split('/').pop() };
  if (p.startsWith('/servers/country/')) return { type: 'country-facet', collection: 'facet', titleHint: p.split('/').pop() };
  if (p.startsWith('/servers/client/')) return { type: 'client-facet', collection: 'facet', titleHint: p.split('/').pop() };
  if (p.startsWith('/servers/')) return { type: 'legacy-server', collection: 'server', titleHint: p.split('/').pop() };
  if (p.startsWith('/topics/')) return { type: 'topic', collection: 'topic', titleHint: p.split('/').pop() };
  if (p.startsWith('/research/')) return { type: 'research', collection: 'research', titleHint: p.slice('/research/'.length) };
  if (/^\/[a-z0-9][a-z0-9._-]*$/i.test(p)) return { type: 'server', collection: 'server', titleHint: p.slice(1) };
  return { type: 'page', collection: 'other', titleHint: p };
}

export function humanizeResearch(slug = '') {
  return String(slug).replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase()) || 'Page';
}

export function buildResearchArticle(pathname = '/') {
  const p = pathname.replace(/\/+$/, '') || '/';
  const meta = classifyResearchPath(p);
  const title = humanizeResearch(meta.titleHint);
  const sourceUrl = `${SITE}${p === '/' ? '/' : p}`;
  const key = slugifyResearchPath(p);
  return {
    title: `${title} — Research Wiki`,
    heading: title,
    pathname: p,
    sourceUrl,
    key,
    type: meta.type,
    collection: meta.collection,
    abstract: `Independent research dossier for ${sourceUrl} (${meta.collection}/${meta.type}) on OpenTibiaServers.com.`,
  };
}

export function listResearchSampleKeys() {
  const dir = path.join(process.cwd(), 'content', 'research-wiki', 'samples', 'markdown');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')).sort();
}

export function readResearchSampleMarkdown(key) {
  const file = path.join(process.cwd(), 'content', 'research-wiki', 'samples', 'markdown', `${key}.md`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, 'utf8');
}
