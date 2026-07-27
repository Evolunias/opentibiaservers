import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-highscores');
}

export default function WithScreenshotsDemolidoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-highscores" />;
}
