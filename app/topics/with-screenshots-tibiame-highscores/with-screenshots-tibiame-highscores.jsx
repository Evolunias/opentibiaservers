import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-highscores');
}

export default function WithScreenshotsTibiameHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-highscores" />;
}
