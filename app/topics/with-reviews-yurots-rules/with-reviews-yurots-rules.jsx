import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-rules');
}

export default function WithReviewsYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-rules" />;
}
