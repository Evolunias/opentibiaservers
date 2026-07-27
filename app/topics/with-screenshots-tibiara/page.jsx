import WithScreenshotsTibiaraKeywordPage, { generateMetadata } from './with-screenshots-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraKeywordPage />;
}
