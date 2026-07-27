import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend');
}

export default function WithScreenshotsDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend" />;
}
