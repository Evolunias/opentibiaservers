import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-highscores');
}

export default function WithScreenshotsLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-highscores" />;
}
