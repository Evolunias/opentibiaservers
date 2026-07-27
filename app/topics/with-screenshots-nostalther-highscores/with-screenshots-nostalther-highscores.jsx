import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-highscores');
}

export default function WithScreenshotsNostaltherHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-highscores" />;
}
