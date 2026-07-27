import WithScreenshotsServerListUsaKeywordPage, { generateMetadata } from './with-screenshots-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListUsaKeywordPage />;
}
