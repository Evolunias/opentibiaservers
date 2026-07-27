import WithScreenshotsServerGermanyKeywordPage, { generateMetadata } from './with-screenshots-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerGermanyKeywordPage />;
}
