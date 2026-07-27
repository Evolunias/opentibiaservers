import WithScreenshotsMediviaWebsiteKeywordPage, { generateMetadata } from './with-screenshots-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaWebsiteKeywordPage />;
}
