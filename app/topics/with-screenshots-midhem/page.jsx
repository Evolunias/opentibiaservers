import WithScreenshotsMidhemKeywordPage, { generateMetadata } from './with-screenshots-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemKeywordPage />;
}
