import WithScreenshotsNepreniaWikiKeywordPage, { generateMetadata } from './with-screenshots-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNepreniaWikiKeywordPage />;
}
