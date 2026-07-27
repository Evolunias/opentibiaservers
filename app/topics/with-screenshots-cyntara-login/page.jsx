import WithScreenshotsCyntaraLoginKeywordPage, { generateMetadata } from './with-screenshots-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraLoginKeywordPage />;
}
