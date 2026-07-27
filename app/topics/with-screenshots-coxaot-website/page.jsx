import WithScreenshotsCoxaotWebsiteKeywordPage, { generateMetadata } from './with-screenshots-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotWebsiteKeywordPage />;
}
