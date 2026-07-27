import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-highscores');
}

export default function WithReviewsTibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-highscores" />;
}
