import WithScreenshotsElderaWebsiteKeywordPage, { generateMetadata } from './with-screenshots-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaWebsiteKeywordPage />;
}
