import WithScreenshotsInfernalOtWikiKeywordPage, { generateMetadata } from './with-screenshots-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsInfernalOtWikiKeywordPage />;
}
