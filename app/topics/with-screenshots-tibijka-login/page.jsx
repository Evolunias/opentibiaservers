import WithScreenshotsTibijkaLoginKeywordPage, { generateMetadata } from './with-screenshots-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaLoginKeywordPage />;
}
