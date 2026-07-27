import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-highscores');
}

export default function WithReviewsTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-highscores" />;
}
