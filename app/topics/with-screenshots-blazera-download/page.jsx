import WithScreenshotsBlazeraDownloadKeywordPage, { generateMetadata } from './with-screenshots-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraDownloadKeywordPage />;
}
