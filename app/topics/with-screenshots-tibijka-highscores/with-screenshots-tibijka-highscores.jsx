import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-highscores');
}

export default function WithScreenshotsTibijkaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-highscores" />;
}
