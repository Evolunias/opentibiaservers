import WithScreenshotsNtoStarOtServerKeywordPage, { generateMetadata } from './with-screenshots-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarOtServerKeywordPage />;
}
