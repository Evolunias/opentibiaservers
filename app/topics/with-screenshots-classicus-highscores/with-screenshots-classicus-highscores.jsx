import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-highscores');
}

export default function WithScreenshotsClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-highscores" />;
}
