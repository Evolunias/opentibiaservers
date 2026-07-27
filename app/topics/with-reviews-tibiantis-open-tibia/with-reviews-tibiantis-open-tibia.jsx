import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-open-tibia');
}

export default function WithReviewsTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-open-tibia" />;
}
