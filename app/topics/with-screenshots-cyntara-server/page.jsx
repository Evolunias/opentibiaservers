import WithScreenshotsCyntaraServerKeywordPage, { generateMetadata } from './with-screenshots-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraServerKeywordPage />;
}
