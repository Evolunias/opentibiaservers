import WithScreenshotsServerListCanadaKeywordPage, { generateMetadata } from './with-screenshots-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListCanadaKeywordPage />;
}
