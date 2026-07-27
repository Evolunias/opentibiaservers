import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-highscores');
}

export default function WithScreenshotsRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-highscores" />;
}
