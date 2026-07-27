import WithScreenshotsShadowcoresDownloadKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresDownloadKeywordPage />;
}
