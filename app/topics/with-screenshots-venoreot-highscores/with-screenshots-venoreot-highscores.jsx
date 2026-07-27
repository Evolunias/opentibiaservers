import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-highscores');
}

export default function WithScreenshotsVenoreotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-highscores" />;
}
