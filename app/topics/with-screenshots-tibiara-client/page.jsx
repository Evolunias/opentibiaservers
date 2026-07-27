import WithScreenshotsTibiaraClientKeywordPage, { generateMetadata } from './with-screenshots-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraClientKeywordPage />;
}
