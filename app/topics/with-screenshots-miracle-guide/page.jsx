import WithScreenshotsMiracleGuideKeywordPage, { generateMetadata } from './with-screenshots-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleGuideKeywordPage />;
}
