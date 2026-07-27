import WithScreenshotsMediviaGuideKeywordPage, { generateMetadata } from './with-screenshots-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaGuideKeywordPage />;
}
