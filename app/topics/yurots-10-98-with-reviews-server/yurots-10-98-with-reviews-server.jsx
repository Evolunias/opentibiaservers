import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-with-reviews-server');
}

export default function Yurots1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-with-reviews-server" />;
}
