import WithScreenshotsMediviaOtsKeywordPage, { generateMetadata } from './with-screenshots-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaOtsKeywordPage />;
}
