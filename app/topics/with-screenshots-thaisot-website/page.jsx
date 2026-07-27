import WithScreenshotsThaisotWebsiteKeywordPage, { generateMetadata } from './with-screenshots-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotWebsiteKeywordPage />;
}
