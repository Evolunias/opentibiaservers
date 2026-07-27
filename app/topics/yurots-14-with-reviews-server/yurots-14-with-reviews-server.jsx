import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-with-reviews-server');
}

export default function Yurots14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-with-reviews-server" />;
}
