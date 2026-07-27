import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-with-reviews-server');
}

export default function Yurots11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-with-reviews-server" />;
}
