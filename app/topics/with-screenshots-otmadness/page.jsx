import WithScreenshotsOtmadnessKeywordPage, { generateMetadata } from './with-screenshots-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOtmadnessKeywordPage />;
}
