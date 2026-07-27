import WithScreenshotsMidhemWebsiteKeywordPage, { generateMetadata } from './with-screenshots-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemWebsiteKeywordPage />;
}
