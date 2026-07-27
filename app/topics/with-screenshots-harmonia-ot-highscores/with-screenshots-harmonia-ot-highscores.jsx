import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-highscores');
}

export default function WithScreenshotsHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-highscores" />;
}
