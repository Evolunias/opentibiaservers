import WithScreenshotsBlazeraWikiKeywordPage, { generateMetadata } from './with-screenshots-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraWikiKeywordPage />;
}
