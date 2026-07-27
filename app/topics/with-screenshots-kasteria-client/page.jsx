import WithScreenshotsKasteriaClientKeywordPage, { generateMetadata } from './with-screenshots-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaClientKeywordPage />;
}
