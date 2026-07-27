import WithScreenshotsRealeraServerKeywordPage, { generateMetadata } from './with-screenshots-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealeraServerKeywordPage />;
}
