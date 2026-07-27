import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-highscores');
}

export default function WithScreenshotsOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-highscores" />;
}
