import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-rules');
}

export default function WithReviewsVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-rules" />;
}
