import WithScreenshotsOtmadnessWikiKeywordPage, { generateMetadata } from './with-screenshots-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOtmadnessWikiKeywordPage />;
}
