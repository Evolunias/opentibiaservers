import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-highscores');
}

export default function WithScreenshotsDuraOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-highscores" />;
}
