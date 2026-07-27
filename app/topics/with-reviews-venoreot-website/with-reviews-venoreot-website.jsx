import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-website');
}

export default function WithReviewsVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-website" />;
}
