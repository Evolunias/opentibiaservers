import WithScreenshotsNtoStarLoginKeywordPage, { generateMetadata } from './with-screenshots-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarLoginKeywordPage />;
}
