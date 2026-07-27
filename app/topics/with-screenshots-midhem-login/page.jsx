import WithScreenshotsMidhemLoginKeywordPage, { generateMetadata } from './with-screenshots-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemLoginKeywordPage />;
}
