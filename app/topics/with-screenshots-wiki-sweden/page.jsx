import WithScreenshotsWikiSwedenKeywordPage, { generateMetadata } from './with-screenshots-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiSwedenKeywordPage />;
}
