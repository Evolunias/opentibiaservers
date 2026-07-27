import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-highscores');
}

export default function WithReviewsTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-highscores" />;
}
