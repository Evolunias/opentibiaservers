import WithScreenshotsCanobServerKeywordPage, { generateMetadata } from './with-screenshots-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobServerKeywordPage />;
}
