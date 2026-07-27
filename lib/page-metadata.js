import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

function cleanKeywords(values = []) {
  return [...new Set(values.map((value) => String(value || '').replace(/\s+/g, ' ').trim()).filter(Boolean))];
}

function truncate(value = '', max = 160) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1).trim()}.` : text;
}

export function buildArticleMetadata(page) {
  const canonical = buildAbsoluteUrl(page.path);
  const keywords = cleanKeywords(page.keywords);
  const title = page.title || `${page.primaryKeyword} Open Tibia Reference`;
  const description = truncate(page.metaDescription || page.dek || page.overview);
  const imageUrl = page.heroImage ? buildAbsoluteUrl(page.heroImage.src) : undefined;

  return {
    title,
    description,
    keywords,
    applicationName: getSiteName(),
    authors: [{ name: getSiteName(), url: buildAbsoluteUrl('/') }],
    publisher: getSiteName(),
    category: page.type === 'official-world' ? 'Tibia World History' : 'Open Tibia Server Research',
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
      'article:section': page.type === 'official-world' ? 'Tibia Worlds' : 'Open Tibia Servers',
      'article:modified_time': page.updatedAt,
      'og:updated_time': page.updatedAt,
      'profile:first_name': page.primaryKeyword,
    },
  };
}
