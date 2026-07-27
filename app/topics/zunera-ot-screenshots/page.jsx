import ZuneraOtScreenshotsKeywordPage, { generateMetadata } from './zunera-ot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtScreenshotsKeywordPage />;
}
