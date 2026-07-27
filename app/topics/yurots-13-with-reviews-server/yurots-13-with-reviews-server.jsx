import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-with-reviews-server');
}

export default function Yurots13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-with-reviews-server" />;
}
