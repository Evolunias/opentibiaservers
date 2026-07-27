import WithScreenshotsTibiaraServerKeywordPage, { generateMetadata } from './with-screenshots-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraServerKeywordPage />;
}
