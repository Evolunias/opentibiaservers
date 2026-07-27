import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-highscores');
}

export default function WithReviewsTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-highscores" />;
}
