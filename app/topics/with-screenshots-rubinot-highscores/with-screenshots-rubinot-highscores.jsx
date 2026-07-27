import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-highscores');
}

export default function WithScreenshotsRubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-highscores" />;
}
