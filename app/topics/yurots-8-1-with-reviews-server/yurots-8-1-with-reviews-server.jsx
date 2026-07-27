import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-with-reviews-server');
}

export default function Yurots81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-with-reviews-server" />;
}
