import WithScreenshotsServerListEuropeKeywordPage, { generateMetadata } from './with-screenshots-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListEuropeKeywordPage />;
}
