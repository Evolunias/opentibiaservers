import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-ot-server');
}

export default function WithReviewsYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-ot-server" />;
}
