import WithScreenshotsNostaltherServerKeywordPage, { generateMetadata } from './with-screenshots-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNostaltherServerKeywordPage />;
}
