import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-open-tibia');
}

export default function WithReviewsTibianusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-open-tibia" />;
}
