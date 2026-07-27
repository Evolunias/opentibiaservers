import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-infernal-ot-highscores');
}

export default function WithScreenshotsInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-infernal-ot-highscores" />;
}
