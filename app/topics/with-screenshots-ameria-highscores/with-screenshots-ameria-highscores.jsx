import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-highscores');
}

export default function WithScreenshotsAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-highscores" />;
}
