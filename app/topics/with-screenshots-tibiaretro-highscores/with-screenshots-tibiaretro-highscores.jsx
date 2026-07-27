import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-highscores');
}

export default function WithScreenshotsTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-highscores" />;
}
