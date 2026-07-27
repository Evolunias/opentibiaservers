import WithScreenshotsStatusUkKeywordPage, { generateMetadata } from './with-screenshots-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsStatusUkKeywordPage />;
}
