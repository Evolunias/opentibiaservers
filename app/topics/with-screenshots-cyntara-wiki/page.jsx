import WithScreenshotsCyntaraWikiKeywordPage, { generateMetadata } from './with-screenshots-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraWikiKeywordPage />;
}
