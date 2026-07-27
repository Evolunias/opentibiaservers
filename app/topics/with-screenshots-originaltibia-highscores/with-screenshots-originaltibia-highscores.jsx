import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-highscores');
}

export default function WithScreenshotsOriginaltibiaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-highscores" />;
}
