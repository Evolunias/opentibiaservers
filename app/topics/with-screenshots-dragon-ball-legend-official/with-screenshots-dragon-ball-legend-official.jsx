import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-official');
}

export default function WithScreenshotsDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-official" />;
}
