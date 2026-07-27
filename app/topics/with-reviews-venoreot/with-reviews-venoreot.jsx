import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot');
}

export default function WithReviewsVenoreotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot" />;
}
