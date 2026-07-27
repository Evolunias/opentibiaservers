import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka');
}

export default function WithReviewsTibijkaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka" />;
}
