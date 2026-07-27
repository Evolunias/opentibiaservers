import WithScreenshotsMediviaLoginKeywordPage, { generateMetadata } from './with-screenshots-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaLoginKeywordPage />;
}
