import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-highscores');
}

export default function WithScreenshotsEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-highscores" />;
}
