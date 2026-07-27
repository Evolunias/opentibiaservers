import WithScreenshotsTibijkaOtsKeywordPage, { generateMetadata } from './with-screenshots-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaOtsKeywordPage />;
}
