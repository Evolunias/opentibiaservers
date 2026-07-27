import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dragon-ball-legend-wiki');
}

export default function WithScreenshotsDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dragon-ball-legend-wiki" />;
}
