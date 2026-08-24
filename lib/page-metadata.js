import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { deriveServerIdentity } from '@/lib/server-identity';

function cleanKeywords(values = []) {
  return [...new Set(values.map((value) => String(value || '').replace(/\s+/g, ' ').trim()).filter(Boolean))];
}

function truncate(value = '', max = 160) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1).trim()}.` : text;
}

function getArticleSection(page) {
  if (page.type === 'official-world') return 'Tibia World History';
  if (page.type === 'resource') return 'Open Tibia Resources';
  return 'Open Tibia Servers';
}

export function buildArticleMetadata(page) {
  const listedHostValue = (page.facts || []).find((fact) => fact?.label === 'Listed host')?.value;
  const listedHost = /^(pending|unknown|n\/?a|-)$/i.test(listedHostValue || '') ? '' : listedHostValue;
  const identity = page.type === 'server'
    ? deriveServerIdentity({ ...page, host: page.host || page.ip || listedHost })
    : null;
  const canonicalPath = identity?.slug ? `/servers/${identity.slug}` : page.path;
  const oldName = page.primaryKeyword || page.name || '';
  const rename = (value) => identity?.name && oldName ? String(value || '').replaceAll(oldName, identity.name) : value;
  const canonical = buildAbsoluteUrl(canonicalPath);
  const keywords = cleanKeywords((page.keywords || []).map(rename));
  const title = rename(page.title || `${page.primaryKeyword} Open Tibia Reference`);
  const description = truncate(rename(page.metaDescription || page.dek || page.overview));
  const imageUrl = page.heroImage ? buildAbsoluteUrl(page.heroImage.src) : undefined;

  return {
    title,
    description,
    keywords,
    applicationName: getSiteName(),
    authors: [{ name: getSiteName(), url: buildAbsoluteUrl('/') }],
    publisher: getSiteName(),
    category: getArticleSection(page),
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: getSiteName(),
      type: 'article',
      publishedTime: page.publishedAt || page.updatedAt,
      modifiedTime: page.updatedAt,
      tags: keywords.slice(0, 12),
      images: imageUrl ? [{ url: imageUrl, alt: page.heroImage.alt || title }] : undefined,
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    other: {
      'article:section': getArticleSection(page),
      'article:modified_time': page.updatedAt,
      'og:updated_time': page.updatedAt,
      'profile:first_name': identity?.name || page.primaryKeyword,
    },
  };
}
