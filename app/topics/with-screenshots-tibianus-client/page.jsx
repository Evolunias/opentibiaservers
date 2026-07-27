import WithScreenshotsTibianusClientKeywordPage, { generateMetadata } from './with-screenshots-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusClientKeywordPage />;
}
