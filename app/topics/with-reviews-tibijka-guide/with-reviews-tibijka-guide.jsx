import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-guide');
}

export default function WithReviewsTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-guide" />;
}
