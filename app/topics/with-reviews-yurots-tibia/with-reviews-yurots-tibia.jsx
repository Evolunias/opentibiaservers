import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-tibia');
}

export default function WithReviewsYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-tibia" />;
}
