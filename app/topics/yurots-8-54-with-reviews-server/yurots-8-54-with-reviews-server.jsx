import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-with-reviews-server');
}

export default function Yurots854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-with-reviews-server" />;
}
