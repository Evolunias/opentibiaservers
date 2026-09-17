import fs from 'fs';
import path from 'path';

let wikiSlugs = null;
let richBySlug = null;

function loadWikiSlugs() {
  if (wikiSlugs) return wikiSlugs;
  const dir = path.join(process.cwd(), 'content', 'external-wikis', 'markdown');
  if (!fs.existsSync(dir)) {
    wikiSlugs = [];
    return wikiSlugs;
  }
  wikiSlugs = fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'wiki.md')
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
  return wikiSlugs;
}

function loadRich() {
  if (richBySlug) return richBySlug;
  richBySlug = new Map();
  const candidates = [
    path.join(process.cwd(), 'lib', 'top-otservlist-servers.js'),
    path.join(process.cwd(), 'data', 'top-otservlist-servers.json'),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    try {
      if (file.endsWith('.json')) {
        const rows = JSON.parse(fs.readFileSync(file, 'utf8'));
        for (const row of rows) if (row.slug) richBySlug.set(row.slug, row);
      } else {
        // Best-effort parse of exported array literals is skipped; use markdown frontmatter instead.
      }
    } catch {}
  }
  // Enrich from markdown frontmatter quick facts when present
  const mdDir = path.join(process.cwd(), 'content', 'external-wikis', 'markdown');
  if (fs.existsSync(mdDir)) {
    for (const file of fs.readdirSync(mdDir).filter((f) => f.endsWith('.md'))) {
      const slug = file.replace(/\.md$/, '');
      if (richBySlug.has(slug)) continue;
      const text = fs.readFileSync(path.join(mdDir, file), 'utf8');
      const name = (text.match(/^title:\s*"?([^"\n]+)"?/m) || [])[1] || slug;
      const world = (text.match(/\| World type \|\s*([^|]+)\s*\|/) || [])[1];
      const version = (text.match(/\| Client[^|]*\|\s*([^|]+)\s*\|/) || text.match(/\| Version \|\s*([^|]+)\s*\|/) || [])[1];
      const location = (text.match(/\| Location \|\s*([^|]+)\s*\|/) || [])[1];
      const exp = (text.match(/\| EXP rate[^|]*\|\s*([^|]+)\s*\|/) || [])[1];
      richBySlug.set(slug, {
        slug,
        name: String(name).replace(/ Open Tibia Server$/i, '').trim(),
        world_type: world ? world.trim() : null,
        version: version ? version.trim() : null,
        location: location ? location.trim() : null,
        exp_rate: exp ? exp.trim() : null,
      });
    }
  }
  return richBySlug;
}

function score(a, b) {
  let s = 0;
  if (a.world_type && b.world_type && a.world_type.toLowerCase() === b.world_type.toLowerCase()) s += 3;
  if (a.version && b.version && a.version === b.version) s += 3;
  if (a.location && b.location && a.location.toLowerCase() === b.location.toLowerCase()) s += 2;
  return s;
}

export function getRelatedWikiServers(slug, limit = 6) {
  const rich = loadRich();
  const slugs = loadWikiSlugs();
  const current = rich.get(slug) || { slug, name: slug };
  const scored = slugs
    .filter((s) => s !== slug)
    .map((s) => {
      const row = rich.get(s) || { slug: s, name: s };
      return { ...row, _score: score(current, row) };
    })
    .filter((s) => s._score > 0)
    .sort((a, b) => b._score - a._score || String(a.name).localeCompare(String(b.name)))
    .slice(0, limit);

  if (scored.length) {
    return scored.map((s) => ({ slug: s.slug, name: s.name || s.slug }));
  }

  // Fallback: alphabetical neighbors in the wiki library
  const idx = slugs.indexOf(slug);
  if (idx === -1) return [];
  const neighbors = [];
  for (let d = 1; neighbors.length < limit && (idx - d >= 0 || idx + d < slugs.length); d += 1) {
    if (idx - d >= 0) neighbors.push(slugs[idx - d]);
    if (neighbors.length >= limit) break;
    if (idx + d < slugs.length) neighbors.push(slugs[idx + d]);
  }
  return neighbors.map((s) => {
    const row = rich.get(s);
    return { slug: s, name: row?.name || s };
  });
}
