import WithScreenshotsMiracleServerKeywordPage, { generateMetadata } from './with-screenshots-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleServerKeywordPage />;
}
