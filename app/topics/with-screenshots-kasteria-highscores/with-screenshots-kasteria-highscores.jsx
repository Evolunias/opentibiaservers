import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-highscores');
}

export default function WithScreenshotsKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-highscores" />;
}
