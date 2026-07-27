import WithScreenshotsNtoStarServerKeywordPage, { generateMetadata } from './with-screenshots-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarServerKeywordPage />;
}
