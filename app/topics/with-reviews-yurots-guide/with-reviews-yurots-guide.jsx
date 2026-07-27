import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-guide');
}

export default function WithReviewsYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-guide" />;
}
