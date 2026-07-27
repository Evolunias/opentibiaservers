import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-rules');
}

export default function WithReviewsTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-rules" />;
}
