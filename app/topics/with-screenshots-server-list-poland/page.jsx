import WithScreenshotsServerListPolandKeywordPage, { generateMetadata } from './with-screenshots-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListPolandKeywordPage />;
}
