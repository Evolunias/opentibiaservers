import WithScreenshotsCoxaotGuideKeywordPage, { generateMetadata } from './with-screenshots-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotGuideKeywordPage />;
}
