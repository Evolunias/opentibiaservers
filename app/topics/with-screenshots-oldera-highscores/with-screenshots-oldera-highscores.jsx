import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-highscores');
}

export default function WithScreenshotsOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-highscores" />;
}
