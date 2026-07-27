import WithScreenshotsSeasonUkKeywordPage, { generateMetadata } from './with-screenshots-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSeasonUkKeywordPage />;
}
