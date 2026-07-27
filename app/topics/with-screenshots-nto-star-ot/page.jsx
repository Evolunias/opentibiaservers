import WithScreenshotsNtoStarOtKeywordPage, { generateMetadata } from './with-screenshots-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarOtKeywordPage />;
}
