import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-highscores');
}

export default function WithScreenshotsNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-highscores" />;
}
