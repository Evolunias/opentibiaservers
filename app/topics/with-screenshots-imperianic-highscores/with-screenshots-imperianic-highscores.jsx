import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-highscores');
}

export default function WithScreenshotsImperianicHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-highscores" />;
}
