import WithScreenshotsDownloadUsaKeywordPage, { generateMetadata } from './with-screenshots-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDownloadUsaKeywordPage />;
}
