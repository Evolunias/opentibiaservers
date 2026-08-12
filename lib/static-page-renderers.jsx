import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';
import { getExactMatchPageData } from '@/lib/exact-match-page-data';

export function buildExactMatchMetadata(slug) {
  const page = getExactMatchPageData(slug);
  return page ? buildArticleMetadata(page) : {};
}

export default function StaticExactMatchPage({ slug }) {
  const page = getExactMatchPageData(slug);
  if (!page) return null;
  return <CuratedGuideArticle page={page} />;
}
