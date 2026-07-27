import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-highscores');
}

export default function WithScreenshotsTibiaoriginsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-highscores" />;
}
