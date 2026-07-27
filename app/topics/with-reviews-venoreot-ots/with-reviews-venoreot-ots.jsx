import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-ots');
}

export default function WithReviewsVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-ots" />;
}
