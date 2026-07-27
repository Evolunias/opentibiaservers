import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-highscores');
}

export default function WithScreenshotsMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-highscores" />;
}
