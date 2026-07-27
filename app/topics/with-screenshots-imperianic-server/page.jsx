import WithScreenshotsImperianicServerKeywordPage, { generateMetadata } from './with-screenshots-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsImperianicServerKeywordPage />;
}
