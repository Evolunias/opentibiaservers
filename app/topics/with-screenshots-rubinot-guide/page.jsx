import WithScreenshotsRubinotGuideKeywordPage, { generateMetadata } from './with-screenshots-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotGuideKeywordPage />;
}
