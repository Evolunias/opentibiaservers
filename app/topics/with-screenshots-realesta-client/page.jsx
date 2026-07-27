import WithScreenshotsRealestaClientKeywordPage, { generateMetadata } from './with-screenshots-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaClientKeywordPage />;
}
