import WithScreenshotsMidhemOtServerKeywordPage, { generateMetadata } from './with-screenshots-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemOtServerKeywordPage />;
}
