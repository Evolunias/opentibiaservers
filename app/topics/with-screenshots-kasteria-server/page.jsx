import WithScreenshotsKasteriaServerKeywordPage, { generateMetadata } from './with-screenshots-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaServerKeywordPage />;
}
