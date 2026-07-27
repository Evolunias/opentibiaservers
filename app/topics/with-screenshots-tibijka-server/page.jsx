import WithScreenshotsTibijkaServerKeywordPage, { generateMetadata } from './with-screenshots-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaServerKeywordPage />;
}
