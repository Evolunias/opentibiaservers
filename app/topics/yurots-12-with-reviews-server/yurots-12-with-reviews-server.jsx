import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-with-reviews-server');
}

export default function Yurots12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-with-reviews-server" />;
}
