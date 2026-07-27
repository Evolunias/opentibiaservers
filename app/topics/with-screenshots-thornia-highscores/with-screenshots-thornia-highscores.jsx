import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-highscores');
}

export default function WithScreenshotsThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-highscores" />;
}
