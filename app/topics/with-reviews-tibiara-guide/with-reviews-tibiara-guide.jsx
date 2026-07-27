import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-guide');
}

export default function WithReviewsTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-guide" />;
}
