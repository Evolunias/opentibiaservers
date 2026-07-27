import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-highscores');
}

export default function WithReviewsYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-highscores" />;
}
