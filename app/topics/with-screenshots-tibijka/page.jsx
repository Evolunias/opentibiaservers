import WithScreenshotsTibijkaKeywordPage, { generateMetadata } from './with-screenshots-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaKeywordPage />;
}
