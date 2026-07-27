import WithScreenshotsCyntaraPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraPrivateServerKeywordPage />;
}
