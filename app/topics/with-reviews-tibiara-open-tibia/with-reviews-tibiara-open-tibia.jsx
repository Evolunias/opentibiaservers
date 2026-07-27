import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-open-tibia');
}

export default function WithReviewsTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-open-tibia" />;
}
