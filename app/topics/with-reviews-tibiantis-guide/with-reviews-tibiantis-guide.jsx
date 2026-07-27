import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-guide');
}

export default function WithReviewsTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-guide" />;
}
