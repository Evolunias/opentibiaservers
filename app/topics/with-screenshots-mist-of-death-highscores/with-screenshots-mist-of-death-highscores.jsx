import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-highscores');
}

export default function WithScreenshotsMistOfDeathHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-highscores" />;
}
