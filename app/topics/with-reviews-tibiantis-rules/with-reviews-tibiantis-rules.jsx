import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-rules');
}

export default function WithReviewsTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-rules" />;
}
