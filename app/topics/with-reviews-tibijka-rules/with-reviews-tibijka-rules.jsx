import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-rules');
}

export default function WithReviewsTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-rules" />;
}
