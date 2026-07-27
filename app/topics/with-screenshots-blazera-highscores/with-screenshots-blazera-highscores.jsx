import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-highscores');
}

export default function WithScreenshotsBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-highscores" />;
}
