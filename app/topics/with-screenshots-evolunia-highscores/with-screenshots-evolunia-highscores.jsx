import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-highscores');
}

export default function WithScreenshotsEvoluniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-highscores" />;
}
