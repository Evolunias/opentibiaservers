import WithScreenshotsHarmoniaOtServerKeywordPage, { generateMetadata } from './with-screenshots-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsHarmoniaOtServerKeywordPage />;
}
