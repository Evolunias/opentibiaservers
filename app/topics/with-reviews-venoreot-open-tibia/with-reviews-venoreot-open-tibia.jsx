import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-open-tibia');
}

export default function WithReviewsVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-open-tibia" />;
}
