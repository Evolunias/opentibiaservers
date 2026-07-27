import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-highscores');
}

export default function WithScreenshotsOxygenotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-highscores" />;
}
