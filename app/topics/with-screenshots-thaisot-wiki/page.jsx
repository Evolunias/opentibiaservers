import WithScreenshotsThaisotWikiKeywordPage, { generateMetadata } from './with-screenshots-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotWikiKeywordPage />;
}
