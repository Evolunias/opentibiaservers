import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-discord');
}

export default function WithReviewsVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-discord" />;
}
