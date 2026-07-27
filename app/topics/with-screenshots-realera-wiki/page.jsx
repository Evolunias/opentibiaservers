import WithScreenshotsRealeraWikiKeywordPage, { generateMetadata } from './with-screenshots-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealeraWikiKeywordPage />;
}
