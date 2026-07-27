import WithScreenshotsTibiameOtsKeywordPage, { generateMetadata } from './with-screenshots-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameOtsKeywordPage />;
}
