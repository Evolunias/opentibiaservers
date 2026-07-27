import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-with-reviews-server');
}

export default function Yurots76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-with-reviews-server" />;
}
