import WithScreenshotsTibiameClientKeywordPage, { generateMetadata } from './with-screenshots-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameClientKeywordPage />;
}
