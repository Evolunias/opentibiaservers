import WithScreenshotsCanobWebsiteKeywordPage, { generateMetadata } from './with-screenshots-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobWebsiteKeywordPage />;
}
