import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-forum');
}

export default function WithScreenshotsDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-forum" />;
}
