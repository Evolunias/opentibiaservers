import WithScreenshotsClassicusServerKeywordPage, { generateMetadata } from './with-screenshots-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsClassicusServerKeywordPage />;
}
