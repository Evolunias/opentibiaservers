import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-highscores');
}

export default function WithReviewsXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-highscores" />;
}
