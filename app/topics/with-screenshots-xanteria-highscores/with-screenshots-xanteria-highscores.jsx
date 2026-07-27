import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-highscores');
}

export default function WithScreenshotsXanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-highscores" />;
}
