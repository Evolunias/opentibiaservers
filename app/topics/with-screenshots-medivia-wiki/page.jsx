import WithScreenshotsMediviaWikiKeywordPage, { generateMetadata } from './with-screenshots-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaWikiKeywordPage />;
}
