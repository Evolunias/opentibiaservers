import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-highscores');
}

export default function WithScreenshotsMidhemHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-highscores" />;
}
