import WithScreenshotsTibijkaOtServerKeywordPage, { generateMetadata } from './with-screenshots-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaOtServerKeywordPage />;
}
