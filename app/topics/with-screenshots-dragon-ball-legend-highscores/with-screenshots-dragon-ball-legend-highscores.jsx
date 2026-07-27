import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-highscores');
}

export default function WithScreenshotsDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-highscores" />;
}
