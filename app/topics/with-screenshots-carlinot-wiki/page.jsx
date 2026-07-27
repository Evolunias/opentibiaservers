import WithScreenshotsCarlinotWikiKeywordPage, { generateMetadata } from './with-screenshots-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotWikiKeywordPage />;
}
