import WithScreenshotsMarolaotWikiKeywordPage, { generateMetadata } from './with-screenshots-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMarolaotWikiKeywordPage />;
}
