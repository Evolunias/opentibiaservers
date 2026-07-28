const PUBLIC_SUFFIXES = new Set([
  'com.br',
  'net.br',
  'org.br',
  'com.pl',
  'net.pl',
  'org.pl',
  'com.mx',
  'com.tr',
  'co.uk',
  'com.au',
]);

const URL_SHORTENERS = new Set([
  'bit.ly',
  'cutt.ly',
  'goo.gl',
  'is.gd',
  'ow.ly',
  'rebrand.ly',
  'shorturl.at',
  'tiny.cc',
  'tinyurl.com',
  't.co',
]);

export const trustedReferenceDomains = new Set([
  'github.com',
  'sourceforge.net',
  'otland.net',
  'otservlist.org',
  'tibia.com',
  'tibia.fandom.com',
  'tibiawiki.com.br',
  'docs.opentibiabr.com',
  'hub.docker.com',
  'my-aac.org',
  'xenobot.net',
  'nickcano.com',
  'blackdtools.com',
  'discord.com',
  'discord.gg',
  'youtube.com',
  'youtu.be',
]);

const trustedDownloadHosts = new Set([
  'github.com',
  'sourceforge.net',
  'hub.docker.com',
]);

const blockedDomains = new Set([
  'archive.ph',
  'divinity76.github.io',
  'forum.elhacker.net',
  'forums.tibiabr.com',
  'otarchive.com',
  'otservers.online',
  'otservlist.net',
  'tibiadownloads.wordpress.com',
  'tibiaotlist.com',
  'tibiaserverlist.com',
  'www.flashback.org',
  'www.mpcforum.pl',
  'www.webcheats.com.br',
]);

const riskyDownloadExtensions = /\.(apk|bat|cmd|com|dll|dmg|exe|jar|msi|ps1|rar|scr|vbs|wsf|zip|7z)(?:$|[?#])/i;
const imageExtensions = /\.(avif|gif|jpe?g|png|webp)(?:$|[?#])/i;

function isIpv4(hostname) {
  return /^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname);
}

function isPrivateIpv4(hostname) {
  if (!isIpv4(hostname)) return false;
  const parts = hostname.split('.').map(Number);
  return (
    parts[0] === 10 ||
    parts[0] === 127 ||
    (parts[0] === 169 && parts[1] === 254) ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) ||
    parts[0] === 0
  );
}

function normaliseHost(hostname = '') {
  return String(hostname).trim().toLowerCase().replace(/^www\./, '');
}

export function getRegistrableDomain(value = '') {
  const host = normaliseHost(value);
  if (!host || isIpv4(host) || host === 'localhost') return host;
  const labels = host.split('.').filter(Boolean);
  if (labels.length <= 2) return host;
  const lastTwo = labels.slice(-2).join('.');
  const lastThree = labels.slice(-3).join('.');
  if (PUBLIC_SUFFIXES.has(lastTwo) && labels.length >= 3) return lastThree;
  return lastTwo;
}

export function normalizeExternalUrl(value, options = {}) {
  const allowHttp = Boolean(options.allowHttp);
  const text = String(value || '').trim();
  if (!text) return null;
  if (/^[\w.-]+#\d{4,5}$/.test(text)) return null;
  const withProtocol = /^https?:\/\//i.test(text) ? text : `https://${text.replace(/^\/+/, '')}`;

  let url;
  try {
    url = new URL(withProtocol);
  } catch {
    return null;
  }

  const hostname = normaliseHost(url.hostname);
  if (!hostname || hostname === 'localhost' || hostname.endsWith('.local') || isPrivateIpv4(hostname)) return null;
  if (url.username || url.password) return null;
  if (url.protocol !== 'https:' && !(allowHttp && url.protocol === 'http:')) return null;
  url.hash = url.hash || '';
  return url.toString();
}

export function isTrustedReferenceUrl(value, expectedDomains = []) {
  const href = normalizeExternalUrl(value);
  if (!href) return false;
  const url = new URL(href);
  const host = normaliseHost(url.hostname);
  const root = getRegistrableDomain(host);
  const expected = expectedDomains.map(getRegistrableDomain).filter(Boolean);
  return trustedReferenceDomains.has(host) || trustedReferenceDomains.has(root) || expected.includes(root);
}

export function assessExternalLink(value, options = {}) {
  const href = normalizeExternalUrl(value, options);
  if (!href) {
    return { href: '', clickable: false, trust: 'blocked', reason: 'Invalid or unsafe URL' };
  }

  const url = new URL(href);
  const host = normaliseHost(url.hostname);
  const root = getRegistrableDomain(host);
  const expected = (options.expectedDomains || []).map(getRegistrableDomain).filter(Boolean);
  const kind = options.kind || 'reference';
  const isExpected = expected.includes(root);
  const isTrustedReference = trustedReferenceDomains.has(host) || trustedReferenceDomains.has(root);
  const isTrustedDownload = trustedDownloadHosts.has(host) || trustedDownloadHosts.has(root);

  if (blockedDomains.has(host) || blockedDomains.has(root) || URL_SHORTENERS.has(host) || URL_SHORTENERS.has(root)) {
    return { href, clickable: false, trust: 'blocked', reason: 'Blocked unverified source domain' };
  }

  if (kind === 'image') {
    return imageExtensions.test(url.pathname) || isExpected || isTrustedReference
      ? { href, clickable: true, trust: isExpected ? 'official-domain' : 'trusted-media', reason: 'Verified media URL' }
      : { href, clickable: false, trust: 'blocked', reason: 'Image URL must be an image file or trusted source' };
  }

  if (kind === 'download') {
    const directDownload = riskyDownloadExtensions.test(`${url.pathname}${url.search}`);
    if (isTrustedDownload) {
      return { href, clickable: true, trust: 'official-download', reason: 'Trusted release/source host' };
    }
    if (isExpected && !directDownload) {
      return { href, clickable: true, trust: 'official-domain', reason: 'Official server/project domain' };
    }
    return { href, clickable: false, trust: 'blocked', reason: 'Downloads must use official domains or trusted release hosts' };
  }

  if (isExpected) {
    return { href, clickable: true, trust: 'official-domain', reason: 'Matches official domain context' };
  }
  if (isTrustedReference) {
    return { href, clickable: true, trust: 'trusted-reference', reason: 'Trusted reference domain' };
  }
  if (riskyDownloadExtensions.test(`${url.pathname}${url.search}`)) {
    return { href, clickable: false, trust: 'blocked', reason: 'Direct downloads from unverified domains are blocked' };
  }

  return options.allowUntrusted
    ? { href, clickable: true, trust: 'unverified', reason: 'Unverified outbound link' }
    : { href, clickable: false, trust: 'blocked', reason: 'Unverified outbound link' };
}

export function safeUrlOrNull(value, options = {}) {
  const result = assessExternalLink(value, options);
  return result.clickable ? result.href : null;
}
