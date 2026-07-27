import WithScreenshotsRealeraKeywordPage, { generateMetadata } from './with-screenshots-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealeraKeywordPage />;
}
