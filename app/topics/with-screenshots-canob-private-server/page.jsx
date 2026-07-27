import WithScreenshotsCanobPrivateServerKeywordPage, { generateMetadata } from './with-screenshots-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobPrivateServerKeywordPage />;
}
