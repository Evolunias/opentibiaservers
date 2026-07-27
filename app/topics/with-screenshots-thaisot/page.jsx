import WithScreenshotsThaisotKeywordPage, { generateMetadata } from './with-screenshots-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotKeywordPage />;
}
