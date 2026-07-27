import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-register');
}

export default function WithReviewsVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-register" />;
}
