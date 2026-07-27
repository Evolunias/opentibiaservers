import WithScreenshotsCyntaraGuideKeywordPage, { generateMetadata } from './with-screenshots-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraGuideKeywordPage />;
}
