import WithScreenshotsTibiameServerKeywordPage, { generateMetadata } from './with-screenshots-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameServerKeywordPage />;
}
