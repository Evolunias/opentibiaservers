import WithScreenshotsDragonBallLegendWikiKeywordPage, { generateMetadata } from './with-screenshots-dragon-ball-legend-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDragonBallLegendWikiKeywordPage />;
}
