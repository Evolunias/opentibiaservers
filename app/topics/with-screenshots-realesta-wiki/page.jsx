import WithScreenshotsRealestaWikiKeywordPage, { generateMetadata } from './with-screenshots-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaWikiKeywordPage />;
}
