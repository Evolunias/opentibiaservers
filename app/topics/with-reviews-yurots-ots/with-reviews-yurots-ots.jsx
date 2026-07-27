import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-ots');
}

export default function WithReviewsYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-ots" />;
}
