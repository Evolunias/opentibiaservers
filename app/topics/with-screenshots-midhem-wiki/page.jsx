import WithScreenshotsMidhemWikiKeywordPage, { generateMetadata } from './with-screenshots-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemWikiKeywordPage />;
}
