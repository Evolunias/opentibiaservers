import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-highscores');
}

export default function WithScreenshotsCanobHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-highscores" />;
}
