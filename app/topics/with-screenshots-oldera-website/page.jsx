import WithScreenshotsOlderaWebsiteKeywordPage, { generateMetadata } from './with-screenshots-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaWebsiteKeywordPage />;
}
