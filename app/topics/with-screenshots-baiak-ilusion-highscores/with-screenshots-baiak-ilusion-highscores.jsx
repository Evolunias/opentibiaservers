import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-highscores');
}

export default function WithScreenshotsBaiakIlusionHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-highscores" />;
}
