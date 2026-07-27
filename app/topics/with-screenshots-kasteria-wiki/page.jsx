import WithScreenshotsKasteriaWikiKeywordPage, { generateMetadata } from './with-screenshots-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaWikiKeywordPage />;
}
