import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-highscores');
}

export default function WithScreenshotsCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-highscores" />;
}
