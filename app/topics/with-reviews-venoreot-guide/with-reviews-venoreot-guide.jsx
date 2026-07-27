import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-guide');
}

export default function WithReviewsVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-guide" />;
}
