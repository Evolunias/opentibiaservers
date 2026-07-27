import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-guide');
}

export default function WithReviewsUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-guide" />;
}
