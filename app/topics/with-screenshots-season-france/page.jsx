import WithScreenshotsSeasonFranceKeywordPage, { generateMetadata } from './with-screenshots-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSeasonFranceKeywordPage />;
}
