import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-highscores');
}

export default function WithReviewsTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-highscores" />;
}
