import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-highscores');
}

export default function WithScreenshotsYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-highscores" />;
}
