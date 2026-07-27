import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-tibia');
}

export default function WithReviewsTibijkaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-tibia" />;
}
