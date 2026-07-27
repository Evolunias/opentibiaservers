import WithScreenshotsImperianicWikiKeywordPage, { generateMetadata } from './with-screenshots-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsImperianicWikiKeywordPage />;
}
