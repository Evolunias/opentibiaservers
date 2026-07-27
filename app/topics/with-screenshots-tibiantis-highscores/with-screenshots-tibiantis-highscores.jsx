import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-highscores');
}

export default function WithScreenshotsTibiantisHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-highscores" />;
}
