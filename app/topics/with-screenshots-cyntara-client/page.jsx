import WithScreenshotsCyntaraClientKeywordPage, { generateMetadata } from './with-screenshots-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraClientKeywordPage />;
}
