import WithScreenshotsMiracleWikiKeywordPage, { generateMetadata } from './with-screenshots-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleWikiKeywordPage />;
}
