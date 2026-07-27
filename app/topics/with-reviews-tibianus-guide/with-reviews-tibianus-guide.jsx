import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-guide');
}

export default function WithReviewsTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-guide" />;
}
