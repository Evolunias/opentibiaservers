import WithScreenshotsOtmadnessServerKeywordPage, { generateMetadata } from './with-screenshots-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOtmadnessServerKeywordPage />;
}
