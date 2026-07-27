import WithScreenshotsNtoStarOtsKeywordPage, { generateMetadata } from './with-screenshots-nto-star-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarOtsKeywordPage />;
}
