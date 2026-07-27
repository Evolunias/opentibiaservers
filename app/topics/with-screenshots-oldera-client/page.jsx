import WithScreenshotsOlderaClientKeywordPage, { generateMetadata } from './with-screenshots-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaClientKeywordPage />;
}
