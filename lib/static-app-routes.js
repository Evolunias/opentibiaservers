import fs from 'fs';
import path from 'path';

const RESERVED_TOP_LEVEL = new Set([
  'api',
  'auth',
  'components',
  'context',
  'dashboard',
  'directory',
  'guides',
  'knowledge',
  'resources',
  'rankings',
  'servers',
  'server',
  'serverlist',
  'submit-server',
  'topics',
  'login',
  'register',
  'contact',
  'about',
  'privacy',
  'terms',
  'evomanias',
  'sitemap',
  'robots',
]);

function hasPageFile(dir) {
  return ['page.jsx', 'page.js', 'page.tsx', 'page.ts'].some((name) =>
    fs.existsSync(path.join(dir, name))
  );
}

/**
 * Discover static App Router pages under /app for sitemap coverage.
 * Prefer root server name pages like /cyntara for Google ranking.
 */
export function getStaticAppRoutes() {
  const appDir = path.join(process.cwd(), 'app');
  if (!fs.existsSync(appDir)) return [];

  const routes = [];

  // Home
  if (hasPageFile(appDir)) {
    routes.push({ path: '/', kind: 'home' });
  }

  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('[') || entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    if (RESERVED_TOP_LEVEL.has(entry.name)) continue;
    const full = path.join(appDir, entry.name);
    if (!hasPageFile(full)) continue;
    routes.push({
      path: `/${entry.name}`,
      kind: 'server-name',
      slug: entry.name,
    });
  }

  // Important non-server sections
  for (const section of ['directory', 'rankings', 'resources', 'knowledge', 'evomanias', 'contact', 'guides']) {
    const full = path.join(appDir, section);
    if (hasPageFile(full)) {
      routes.push({ path: `/${section}`, kind: 'section', slug: section });
    }
  }

  // Nested knowledge catalogs if present
  for (const catalog of ['items', 'monsters', 'spells']) {
    const full = path.join(appDir, 'knowledge', catalog);
    if (hasPageFile(full)) {
      routes.push({ path: `/knowledge/${catalog}`, kind: 'section', slug: catalog });
    }
  }

  return Array.from(new Map(routes.map((route) => [route.path, route])).values());
}

export function getStaticServerNameRoutes() {
  return getStaticAppRoutes().filter((route) => route.kind === 'server-name');
}
