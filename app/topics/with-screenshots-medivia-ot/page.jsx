import WithScreenshotsMediviaOtKeywordPage, { generateMetadata } from './with-screenshots-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaOtKeywordPage />;
}
