import WithScreenshotsTibianusKeywordPage, { generateMetadata } from './with-screenshots-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusKeywordPage />;
}
