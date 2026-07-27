import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-highscores');
}

export default function WithScreenshotsUnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-highscores" />;
}
