import WithScreenshotsMiracleWebsiteKeywordPage, { generateMetadata } from './with-screenshots-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleWebsiteKeywordPage />;
}
