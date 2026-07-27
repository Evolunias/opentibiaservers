import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-venoreot-highscores');
}

export default function WithReviewsVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-venoreot-highscores" />;
}
