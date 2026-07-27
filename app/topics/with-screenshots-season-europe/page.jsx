import WithScreenshotsSeasonEuropeKeywordPage, { generateMetadata } from './with-screenshots-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSeasonEuropeKeywordPage />;
}
