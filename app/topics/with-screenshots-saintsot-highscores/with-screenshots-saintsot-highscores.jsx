import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-highscores');
}

export default function WithScreenshotsSaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-highscores" />;
}
