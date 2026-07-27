import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-highscores');
}

export default function WithReviewsTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-highscores" />;
}
