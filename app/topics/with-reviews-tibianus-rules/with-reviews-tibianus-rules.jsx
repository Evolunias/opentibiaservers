import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-rules');
}

export default function WithReviewsTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-rules" />;
}
