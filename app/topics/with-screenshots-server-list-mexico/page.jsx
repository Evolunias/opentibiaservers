import WithScreenshotsServerListMexicoKeywordPage, { generateMetadata } from './with-screenshots-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListMexicoKeywordPage />;
}
