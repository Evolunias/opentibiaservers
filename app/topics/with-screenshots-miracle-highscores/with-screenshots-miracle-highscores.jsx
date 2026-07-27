import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-highscores');
}

export default function WithScreenshotsMiracleHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-highscores" />;
}
