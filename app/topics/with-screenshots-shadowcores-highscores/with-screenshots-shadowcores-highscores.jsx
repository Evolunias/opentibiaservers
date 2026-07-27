import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-highscores');
}

export default function WithScreenshotsShadowcoresHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-highscores" />;
}
