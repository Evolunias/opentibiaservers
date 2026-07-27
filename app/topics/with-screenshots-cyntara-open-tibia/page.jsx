import WithScreenshotsCyntaraOpenTibiaKeywordPage, { generateMetadata } from './with-screenshots-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraOpenTibiaKeywordPage />;
}
