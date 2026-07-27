import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getCuratedPage } from '@/lib/curated-pages';
import { getOtServerCuratedPage } from '@/lib/otserver-curated-pages';
import { getTibiaWorldPage } from '@/lib/tibia-world-pages';

export function getExactMatchPage(slug) {
  return getCuratedPage(slug) || getOtServerCuratedPage(slug) || getTibiaWorldPage(slug);
}

export function buildExactMatchMetadata(slug) {
  const page = getExactMatchPage(slug);
  return page ? buildArticleMetadata(page) : {};
}

export default function StaticExactMatchPage({ slug }) {
  const page = getExactMatchPage(slug);
  return <CuratedGuideArticle page={page} />;
}
