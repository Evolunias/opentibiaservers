import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-highscores');
}

export default function WithScreenshotsAureraGlobalHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-highscores" />;
}
