import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-highscores');
}

export default function WithScreenshotsCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-highscores" />;
}
