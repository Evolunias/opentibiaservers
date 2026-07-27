import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-rules');
}

export default function WithReviewsUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-rules" />;
}
