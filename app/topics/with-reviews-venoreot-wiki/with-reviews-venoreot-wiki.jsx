import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-wiki');
}

export default function WithReviewsVenoreotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-wiki" />;
}
