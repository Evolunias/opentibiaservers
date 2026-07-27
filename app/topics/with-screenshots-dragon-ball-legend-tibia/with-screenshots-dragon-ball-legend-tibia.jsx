import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-tibia');
}

export default function WithScreenshotsDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-tibia" />;
}
