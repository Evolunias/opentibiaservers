import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-highscores');
}

export default function WithScreenshotsRookgaardTalesHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-highscores" />;
}
