import WithScreenshotsRealeraClientKeywordPage, { generateMetadata } from './with-screenshots-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealeraClientKeywordPage />;
}
