import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-with-reviews-server');
}

export default function Yurots100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-with-reviews-server" />;
}
