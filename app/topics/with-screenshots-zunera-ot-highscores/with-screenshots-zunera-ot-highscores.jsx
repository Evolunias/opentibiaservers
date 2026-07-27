import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zunera-ot-highscores');
}

export default function WithScreenshotsZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zunera-ot-highscores" />;
}
