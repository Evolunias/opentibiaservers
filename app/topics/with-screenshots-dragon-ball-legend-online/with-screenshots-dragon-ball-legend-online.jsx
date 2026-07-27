import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-online');
}

export default function WithScreenshotsDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-online" />;
}
