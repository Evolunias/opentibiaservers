import WithScreenshotsTibijkaOtKeywordPage, { generateMetadata } from './with-screenshots-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaOtKeywordPage />;
}
