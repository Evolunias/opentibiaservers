import WithScreenshotsOlderaKeywordPage, { generateMetadata } from './with-screenshots-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaKeywordPage />;
}
