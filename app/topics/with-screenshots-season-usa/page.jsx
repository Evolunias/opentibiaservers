import WithScreenshotsSeasonUsaKeywordPage, { generateMetadata } from './with-screenshots-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSeasonUsaKeywordPage />;
}
