import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-client');
}

export default function WithScreenshotsDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-client" />;
}
