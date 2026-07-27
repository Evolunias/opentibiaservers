import WithScreenshotsRealestaServerKeywordPage, { generateMetadata } from './with-screenshots-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaServerKeywordPage />;
}
