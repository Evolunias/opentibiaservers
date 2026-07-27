import WithScreenshotsNoxiousotServerKeywordPage, { generateMetadata } from './with-screenshots-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNoxiousotServerKeywordPage />;
}
