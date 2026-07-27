import WithScreenshotsTibianusServerKeywordPage, { generateMetadata } from './with-screenshots-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusServerKeywordPage />;
}
