import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-highscores');
}

export default function WithScreenshotsArcaniarlHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-highscores" />;
}
