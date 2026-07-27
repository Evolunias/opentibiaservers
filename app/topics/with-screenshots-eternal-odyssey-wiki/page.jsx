import WithScreenshotsEternalOdysseyWikiKeywordPage, { generateMetadata } from './with-screenshots-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEternalOdysseyWikiKeywordPage />;
}
