import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-highscores');
}

export default function WithScreenshotsNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-highscores" />;
}
