import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-server');
}

export default function WithReviewsYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-server" />;
}
