import WithScreenshotsCyntaraKeywordPage, { generateMetadata } from './with-screenshots-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraKeywordPage />;
}
