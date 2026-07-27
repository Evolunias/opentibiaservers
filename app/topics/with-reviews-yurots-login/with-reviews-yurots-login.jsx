import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-login');
}

export default function WithReviewsYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-login" />;
}
