import WithScreenshotsMediviaClientKeywordPage, { generateMetadata } from './with-screenshots-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaClientKeywordPage />;
}
