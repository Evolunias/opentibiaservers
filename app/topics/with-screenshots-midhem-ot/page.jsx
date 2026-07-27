import WithScreenshotsMidhemOtKeywordPage, { generateMetadata } from './with-screenshots-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemOtKeywordPage />;
}
