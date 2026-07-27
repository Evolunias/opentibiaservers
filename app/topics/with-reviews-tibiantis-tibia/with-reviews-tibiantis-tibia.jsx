import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-tibia');
}

export default function WithReviewsTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-tibia" />;
}
