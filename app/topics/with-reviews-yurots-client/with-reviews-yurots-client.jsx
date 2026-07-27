import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-client');
}

export default function WithReviewsYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-client" />;
}
