import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-guide');
}

export default function WithScreenshotsDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-guide" />;
}
