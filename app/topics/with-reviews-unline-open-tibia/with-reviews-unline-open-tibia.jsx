import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-open-tibia');
}

export default function WithReviewsUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-open-tibia" />;
}
