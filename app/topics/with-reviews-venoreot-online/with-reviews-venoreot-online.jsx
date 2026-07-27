import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-online');
}

export default function WithReviewsVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-online" />;
}
