import WithScreenshotsMediviaOtServerKeywordPage, { generateMetadata } from './with-screenshots-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaOtServerKeywordPage />;
}
