import WithScreenshotsWikiGermanyKeywordPage, { generateMetadata } from './with-screenshots-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiGermanyKeywordPage />;
}
