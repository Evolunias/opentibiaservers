import WithScreenshotsCanobKeywordPage, { generateMetadata } from './with-screenshots-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobKeywordPage />;
}
