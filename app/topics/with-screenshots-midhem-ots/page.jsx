import WithScreenshotsMidhemOtsKeywordPage, { generateMetadata } from './with-screenshots-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemOtsKeywordPage />;
}
