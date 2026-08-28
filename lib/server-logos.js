import logoManifest from '../data/server-logo-manifest.json' with { type: 'json' };
import { getRootDomainLabel } from './server-identity.js';

const LOCAL_LOGO_PATH = /^\/images\/server-logos\/[a-z0-9][a-z0-9._-]*$/i;
const BUILDER_REALERA_LOGO_URL = /^https:\/\/cdn\.builder\.io\/api\/v1\/image\/assets%2Fc85938fda2fe4a1c97cfe093e9f077bb%2Fa27c034e7ef44c0388e5db38271e69f1(?:\?.*)?$/i;

function isAllowedLogoSource(src = '') {
  return LOCAL_LOGO_PATH.test(src) || BUILDER_REALERA_LOGO_URL.test(src);
}

export function normalizeServerLogoKey(value = '') {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function hostBrand(value = '') {
  return normalizeServerLogoKey(getRootDomainLabel(value));
}

const entries = Object.entries(logoManifest.entries || {});
const aliasMap = new Map();

for (const [slug, entry] of entries) {
  aliasMap.set(normalizeServerLogoKey(slug), slug);
  for (const alias of entry.aliases || []) aliasMap.set(normalizeServerLogoKey(alias), slug);
  for (const domain of entry.domains || []) aliasMap.set(hostBrand(domain), slug);
}

function candidateKeys(server = {}) {
  return [
    server.canonical_slug,
    server.slug,
    server.legacy_slug,
    server.root_domain,
    server.name,
    server.legacy_name,
    server.host,
    server.ip,
    server.website_url,
  ]
    .flatMap((value) => [normalizeServerLogoKey(value), hostBrand(value)])
    .filter(Boolean);
}

export function getServerLogoIdentity(server = {}) {
  const keys = candidateKeys(server);
  const matchedSlug = keys.map((key) => aliasMap.get(key)).find(Boolean);
  if (matchedSlug) return matchedSlug;
  return keys[0] || 'open-tibia-server';
}

function hashIdentity(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function initialsFor(value = '') {
  const parts = String(value || '').replace(/[^a-z0-9]+/gi, ' ').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'OT';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts.at(-1)[0]}`.toUpperCase();
}

export function buildServerLogoFallback(server = {}) {
  const identity = getServerLogoIdentity(server);
  const displayName = String(server.name || server.legacy_name || identity.replace(/-/g, ' ')).trim() || 'Open Tibia Server';
  const hash = hashIdentity(identity);
  const hue = hash % 360;
  const accentHue = (hue + 42 + ((hash >>> 9) % 88)) % 360;

  return {
    type: 'fallback',
    identity,
    signature: `${identity}:${hash.toString(16).padStart(8, '0')}`,
    displayName,
    shortName: displayName.slice(0, 24),
    initials: initialsFor(displayName),
    gradientId: `server-logo-${hash.toString(16).padStart(8, '0')}`,
    colors: {
      start: `hsl(${hue} 54% 20%)`,
      end: `hsl(${accentHue} 63% 31%)`,
      accent: `hsl(${accentHue} 86% 68%)`,
    },
    alt: `${displayName} generated directory mark`,
  };
}

export function getServerLogo(server = {}) {
  const identity = getServerLogoIdentity(server);
  const entry = logoManifest.entries?.[identity];
  if (entry && isAllowedLogoSource(entry.src || '')) {
    return {
      type: 'primary',
      identity,
      ...entry,
    };
  }
  return buildServerLogoFallback(server);
}

export function getServerLogoManifest() {
  return logoManifest;
}
