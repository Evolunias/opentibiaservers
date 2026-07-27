import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-highscores');
}

export default function WithScreenshotsCoxaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-highscores" />;
}
