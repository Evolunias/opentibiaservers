import WithScreenshotsWikiArgentinaKeywordPage, { generateMetadata } from './with-screenshots-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiArgentinaKeywordPage />;
}
