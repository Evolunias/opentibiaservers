import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-with-reviews-server');
}

export default function Yurots15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-with-reviews-server" />;
}
