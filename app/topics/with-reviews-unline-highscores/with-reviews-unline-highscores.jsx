import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-highscores');
}

export default function WithReviewsUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-highscores" />;
}
