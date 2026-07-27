import WithScreenshotsOlderaServerKeywordPage, { generateMetadata } from './with-screenshots-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaServerKeywordPage />;
}
