import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);
const ALLOWED_KINDS = new Set(['logo', 'wordmark', 'logo_banner']);
const ALLOWED_SOURCE_TYPES = new Set(['official_website', 'owner_thread', 'user_supplied']);
const REJECTED_FILENAME = /(?:^|[-_.])(favicon|apple-touch-icon|icon(?:[-_.]|\d)|pixel|tracker|tracking|beacon|spacer|clear|loading|spinner|avatar|placeholder|default|sprite|screenshot|background)(?:[-_.]|$)/i;
const REJECTED_REMOTE_ARTWORK = /(?:background|screenshot|hero|cover|og[-_]?image|og[-_]?cover|og[-_]?banner|share(?:\.|-)|fbicon|favicon|clienticon|site[_-]?wide|capa(?:facebook)?|tlofejs|logofejs|\/bg\.)/i;
const LOGO_REMOTE_SIGNAL = /(?:logo|wordmark|branding|brand[-_])/i;

function uint24LE(buffer, offset) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16);
}

function jpegDimensions(buffer) {
  let offset = 2;
  const startOfFrame = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) {
      offset += 2;
      continue;
    }
    const length = buffer.readUInt16BE(offset + 2);
    if (startOfFrame.has(marker)) {
      return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
    }
    if (length < 2) break;
    offset += 2 + length;
  }
  return null;
}

function svgDimensions(buffer) {
  const source = buffer.toString('utf8', 0, Math.min(buffer.length, 128000));
  if (/<(?:script|foreignObject|iframe|object|embed)\b/i.test(source)) return { unsafe: 'active_svg_content' };
  if (/\son[a-z]+\s*=|(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/|data:(?!image\/(?:png|jpe?g|webp|gif);base64,))/i.test(source)) return { unsafe: 'external_or_event_svg_content' };

  const width = Number(source.match(/\bwidth=["']([0-9.]+)/i)?.[1]);
  const height = Number(source.match(/\bheight=["']([0-9.]+)/i)?.[1]);
  if (width > 0 && height > 0) return { width: Math.round(width), height: Math.round(height) };

  const viewBox = source.match(/\bviewBox=["']\s*[-0-9.]+\s+[-0-9.]+\s+([0-9.]+)\s+([0-9.]+)/i);
  if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
  return null;
}

export function readLogoMetadata(filePath) {
  const buffer = fs.readFileSync(filePath);
  const extension = path.extname(filePath).toLowerCase();
  let dimensions = null;

  if (extension === '.png' && buffer.length >= 24 && buffer.subarray(1, 4).toString('ascii') === 'PNG') {
    dimensions = { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  } else if ((extension === '.jpg' || extension === '.jpeg') && buffer[0] === 0xff && buffer[1] === 0xd8) {
    dimensions = jpegDimensions(buffer);
  } else if (extension === '.gif' && buffer.length >= 10 && buffer.subarray(0, 3).toString('ascii') === 'GIF') {
    dimensions = { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  } else if (extension === '.webp' && buffer.length >= 30 && buffer.subarray(0, 4).toString('ascii') === 'RIFF') {
    const format = buffer.subarray(12, 16).toString('ascii');
    if (format === 'VP8X') {
      dimensions = { width: uint24LE(buffer, 24) + 1, height: uint24LE(buffer, 27) + 1 };
    } else if (format === 'VP8 ' && buffer.subarray(23, 26).equals(Buffer.from([0x9d, 0x01, 0x2a]))) {
      dimensions = { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
    } else if (format === 'VP8L' && buffer[20] === 0x2f) {
      dimensions = {
        width: 1 + (buffer[21] | ((buffer[22] & 0x3f) << 8)),
        height: 1 + ((buffer[22] >> 6) | (buffer[23] << 2) | ((buffer[24] & 0x0f) << 10)),
      };
    }
  } else if (extension === '.svg') {
    dimensions = svgDimensions(buffer);
  }

  return {
    extension,
    bytes: buffer.length,
    sha256: crypto.createHash('sha256').update(buffer).digest('hex'),
    ...(dimensions || {}),
  };
}

export function classifyLogoFilename(filename = '') {
  const extension = path.extname(filename).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(extension)) return 'unsupported_extension';
  if (REJECTED_FILENAME.test(path.basename(filename))) return 'tracker_icon_or_irrelevant_filename';
  return null;
}

function isWithin(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function provenanceReason(candidate) {
  if (!ALLOWED_SOURCE_TYPES.has(candidate.source_type)) return 'untrusted_source_type';
  if (candidate.source_type === 'user_supplied') {
    return candidate.source_reference ? null : 'missing_user_supplied_reference';
  }
  if (!candidate.source_url) return 'missing_primary_source_url';

  let hostname;
  try {
    hostname = new URL(candidate.source_url).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return 'invalid_primary_source_url';
  }

  if (candidate.source_type === 'owner_thread') {
    return hostname === 'otland.net' || hostname.endsWith('.otland.net') ? null : 'owner_thread_not_on_otland';
  }

  const domains = (candidate.domains || []).map((domain) => String(domain).replace(/^www\./, '').toLowerCase());
  if (!domains.length) return 'missing_official_domain';
  return domains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`))
    ? null
    : 'official_source_domain_mismatch';
}

function hasLogoRemoteSignal(candidate) {
  const source = String(candidate.image_source_url || '');
  if (LOGO_REMOTE_SIGNAL.test(source)) return true;
  let pathname = '';
  try {
    pathname = new URL(source).pathname.toLowerCase();
  } catch {
    return false;
  }
  const slug = String(candidate.slug || '').toLowerCase();
  return Boolean(slug && pathname.includes(slug));
}

export function validateLogoCandidate(candidate, { repoRoot }) {
  const reasons = [];
  const slug = String(candidate.slug || '');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) reasons.push('invalid_slug');
  if (!ALLOWED_KINDS.has(candidate.kind)) reasons.push('invalid_logo_kind');
  if (!String(candidate.alt || '').trim()) reasons.push('missing_alt_text');

  const provenance = provenanceReason(candidate);
  if (provenance) reasons.push(provenance);
  if (candidate.source_type === 'official_website' && candidate.image_source_url) {
    if (REJECTED_REMOTE_ARTWORK.test(candidate.image_source_url)) reasons.push('promotional_artwork_not_logo');
    if (!hasLogoRemoteSignal(candidate)) reasons.push('remote_asset_lacks_logo_signal');
  }

  const filePath = path.resolve(repoRoot, String(candidate.downloaded_path || ''));
  const allowedRoots = [
    path.join(repoRoot, 'data', 'server-logo-downloads'),
    path.join(repoRoot, 'public', 'images', 'server-logos'),
  ];
  if (!allowedRoots.some((root) => isWithin(root, filePath))) reasons.push('downloaded_path_outside_allowed_roots');
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    reasons.push('asset_missing');
    return { ok: false, reasons: [...new Set(reasons)], filePath };
  }

  const filenameReason = classifyLogoFilename(filePath);
  if (filenameReason) reasons.push(filenameReason);
  const metadata = readLogoMetadata(filePath);
  if (metadata.unsafe) reasons.push(metadata.unsafe);
  if (!metadata.width || !metadata.height) reasons.push('unreadable_dimensions');
  if (metadata.bytes < 512) reasons.push('tracker_sized_file');
  if (metadata.width && metadata.height) {
    if (metadata.width <= 4 || metadata.height <= 4) reasons.push('tracking_pixel_dimensions');
    if (metadata.width < 48 || metadata.height < 32 || metadata.width * metadata.height < 4096) reasons.push('icon_or_too_small');
    const ratio = metadata.width / metadata.height;
    if (ratio > 12 || ratio < 0.12) reasons.push('irrelevant_aspect_ratio');
  }

  return {
    ok: reasons.length === 0,
    reasons: [...new Set(reasons)],
    filePath,
    metadata,
  };
}

export function toManifestEntry(candidate, metadata, src) {
  return {
    src,
    alt: candidate.alt,
    kind: candidate.kind,
    source_type: candidate.source_type,
    ...(candidate.source_url ? { source_url: candidate.source_url } : {}),
    ...(candidate.source_reference ? { source_reference: candidate.source_reference } : {}),
    ...(candidate.domains?.length ? { domains: [...new Set(candidate.domains)] } : {}),
    width: metadata.width,
    height: metadata.height,
    sha256: metadata.sha256,
    aliases: [...new Set(candidate.aliases || [])],
    ...(candidate.allow_shared_brand ? { allow_shared_brand: true } : {}),
  };
}
