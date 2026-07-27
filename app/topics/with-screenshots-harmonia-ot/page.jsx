import WithScreenshotsHarmoniaOtKeywordPage, { generateMetadata } from './with-screenshots-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsHarmoniaOtKeywordPage />;
}
