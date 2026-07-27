import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-highscores');
}

export default function WithScreenshotsMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-highscores" />;
}
