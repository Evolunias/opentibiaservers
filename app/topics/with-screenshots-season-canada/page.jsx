import WithScreenshotsSeasonCanadaKeywordPage, { generateMetadata } from './with-screenshots-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSeasonCanadaKeywordPage />;
}
