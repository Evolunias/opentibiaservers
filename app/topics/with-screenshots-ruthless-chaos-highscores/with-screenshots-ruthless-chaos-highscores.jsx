import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ruthless-chaos-highscores');
}

export default function WithScreenshotsRuthlessChaosHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ruthless-chaos-highscores" />;
}
