import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-with-reviews-server');
}

export default function Yurots71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-with-reviews-server" />;
}
