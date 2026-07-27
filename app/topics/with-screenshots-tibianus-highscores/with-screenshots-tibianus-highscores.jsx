import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-highscores');
}

export default function WithScreenshotsTibianusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-highscores" />;
}
