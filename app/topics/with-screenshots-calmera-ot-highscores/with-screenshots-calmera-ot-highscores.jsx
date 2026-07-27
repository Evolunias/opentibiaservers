import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-highscores');
}

export default function WithScreenshotsCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-highscores" />;
}
