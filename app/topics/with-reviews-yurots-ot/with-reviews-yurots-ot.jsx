import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-ot');
}

export default function WithReviewsYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-ot" />;
}
