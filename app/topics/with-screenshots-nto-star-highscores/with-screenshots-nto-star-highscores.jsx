import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-highscores');
}

export default function WithScreenshotsNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-highscores" />;
}
