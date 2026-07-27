import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-reviews');
}

export default function YurotsReviewsKeywordPage() {
  return <StaticKeywordPage slug="yurots-reviews" />;
}
