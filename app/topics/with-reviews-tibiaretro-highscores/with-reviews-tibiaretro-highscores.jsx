import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-highscores');
}

export default function WithReviewsTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-highscores" />;
}
