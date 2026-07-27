import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-highscores');
}

export default function WithScreenshotsAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-highscores" />;
}
