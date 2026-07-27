import WithScreenshotsMiracleClientKeywordPage, { generateMetadata } from './with-screenshots-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleClientKeywordPage />;
}
