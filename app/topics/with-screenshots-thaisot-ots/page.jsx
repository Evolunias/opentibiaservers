import WithScreenshotsThaisotOtsKeywordPage, { generateMetadata } from './with-screenshots-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotOtsKeywordPage />;
}
