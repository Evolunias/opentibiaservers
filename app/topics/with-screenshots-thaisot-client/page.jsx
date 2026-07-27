import WithScreenshotsThaisotClientKeywordPage, { generateMetadata } from './with-screenshots-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotClientKeywordPage />;
}
