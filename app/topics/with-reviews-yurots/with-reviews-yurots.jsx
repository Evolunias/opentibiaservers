import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots');
}

export default function WithReviewsYurotsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots" />;
}
