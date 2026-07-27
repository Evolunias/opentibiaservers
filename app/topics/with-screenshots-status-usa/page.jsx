import WithScreenshotsStatusUsaKeywordPage, { generateMetadata } from './with-screenshots-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsStatusUsaKeywordPage />;
}
