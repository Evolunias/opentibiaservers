import WithScreenshotsThaisotServerKeywordPage, { generateMetadata } from './with-screenshots-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotServerKeywordPage />;
}
