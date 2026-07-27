import WithScreenshotsOxygenotWikiKeywordPage, { generateMetadata } from './with-screenshots-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOxygenotWikiKeywordPage />;
}
