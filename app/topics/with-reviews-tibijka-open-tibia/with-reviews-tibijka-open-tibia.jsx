import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-open-tibia');
}

export default function WithReviewsTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-open-tibia" />;
}
