import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-guide');
}

export default function WithReviewsTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-guide" />;
}
