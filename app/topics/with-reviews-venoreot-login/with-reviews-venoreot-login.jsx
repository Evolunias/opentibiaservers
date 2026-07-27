import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-login');
}

export default function WithReviewsVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-login" />;
}
