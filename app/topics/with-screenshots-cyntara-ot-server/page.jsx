import WithScreenshotsCyntaraOtServerKeywordPage, { generateMetadata } from './with-screenshots-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraOtServerKeywordPage />;
}
