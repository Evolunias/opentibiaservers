import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-open-tibia');
}

export default function WithReviewsTibiascapeOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-open-tibia" />;
}
