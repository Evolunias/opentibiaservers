import WithScreenshotsServerListUkKeywordPage, { generateMetadata } from './with-screenshots-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListUkKeywordPage />;
}
