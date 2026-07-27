import WithScreenshotsHarmoniaOtWikiKeywordPage, { generateMetadata } from './with-screenshots-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsHarmoniaOtWikiKeywordPage />;
}
