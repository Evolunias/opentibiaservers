import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-client');
}

export default function WithReviewsVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-client" />;
}
