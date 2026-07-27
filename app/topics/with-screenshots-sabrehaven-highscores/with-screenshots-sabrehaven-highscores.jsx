import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-highscores');
}

export default function WithScreenshotsSabrehavenHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-highscores" />;
}
