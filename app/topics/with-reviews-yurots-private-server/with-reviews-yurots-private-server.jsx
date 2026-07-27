import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-private-server');
}

export default function WithReviewsYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-private-server" />;
}
