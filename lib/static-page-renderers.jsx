import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import ServerDetailClient from '@/app/server/[id]/ServerDetailClient';
import { buildArticleMetadata } from '@/lib/page-metadata';
import {
  buildAbsoluteUrl,
  buildServerDescription,
  buildServerJsonLd,
  buildServerTitle,
  getSiteName,
  makeServerKeywordList,
} from '@/lib/seo';
import { getCuratedPage } from '@/lib/curated-pages';
import { getOtServerCuratedPage } from '@/lib/otserver-curated-pages';
import { getOtlandServerGalaPage } from '@/lib/otland-server-gala-pages';
import { getResourcePage } from '@/lib/resource-pages';
import { getTibiaWorldPage } from '@/lib/tibia-world-pages';
import { getTopOtservlistServerBySlug } from '@/lib/top-otservlist-servers';

export function getExactMatchPage(slug) {
  return getCuratedPage(slug) || getOtServerCuratedPage(slug) || getTibiaWorldPage(slug) || getResourcePage(slug);
}

export function getExactMatchServer(slug) {
  return getOtlandServerGalaPage(slug) || getTopOtservlistServerBySlug(slug);
}

export function buildExactMatchMetadata(slug) {
  const page = getExactMatchPage(slug);
  if (page) return buildArticleMetadata(page);

  const server = getExactMatchServer(slug);
  if (!server) return {};

  const title = buildServerTitle(server);
  const description = buildServerDescription(server);

  return {
    title,
    description,
    keywords: makeServerKeywordList(server),
    alternates: {
      canonical: buildAbsoluteUrl(`/${server.slug}`),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(`/${server.slug}`),
      siteName: getSiteName(),
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default function StaticExactMatchPage({ slug }) {
  const page = getExactMatchPage(slug);
  if (page) return <CuratedGuideArticle page={page} />;

  const server = getExactMatchServer(slug);
  if (!server) return null;
  const jsonLd = buildServerJsonLd(server);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServerDetailClient params={{ slug }} initialServer={{ ...server, canonical_path: `/${server.slug}` }} serverId={server.id} />
    </>
  );
}
