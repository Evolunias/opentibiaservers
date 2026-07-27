import WithScreenshotsDragonBallLegendKeywordPage, { generateMetadata } from './with-screenshots-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDragonBallLegendKeywordPage />;
}
