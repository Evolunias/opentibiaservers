import WithScreenshotsMidhemGuideKeywordPage, { generateMetadata } from './with-screenshots-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemGuideKeywordPage />;
}
