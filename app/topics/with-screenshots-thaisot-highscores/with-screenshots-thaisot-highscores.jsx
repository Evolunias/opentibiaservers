import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-highscores');
}

export default function WithScreenshotsThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-highscores" />;
}
