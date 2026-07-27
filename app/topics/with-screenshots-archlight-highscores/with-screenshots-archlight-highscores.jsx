import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-highscores');
}

export default function WithScreenshotsArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-highscores" />;
}
