import WithScreenshotsCyntaraOtKeywordPage, { generateMetadata } from './with-screenshots-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraOtKeywordPage />;
}
