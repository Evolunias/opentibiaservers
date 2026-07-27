import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-with-reviews-server');
}

export default function Yurots86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-with-reviews-server" />;
}
