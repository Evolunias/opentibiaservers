import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-open-tibia');
}

export default function WithReviewsYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-open-tibia" />;
}
