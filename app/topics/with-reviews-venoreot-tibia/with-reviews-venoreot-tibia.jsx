import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-tibia');
}

export default function WithReviewsVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-tibia" />;
}
