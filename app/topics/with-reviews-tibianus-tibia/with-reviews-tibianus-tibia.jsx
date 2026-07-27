import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-tibia');
}

export default function WithReviewsTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-tibia" />;
}
