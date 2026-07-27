import WithScreenshotsCyntaraWebsiteKeywordPage, { generateMetadata } from './with-screenshots-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraWebsiteKeywordPage />;
}
