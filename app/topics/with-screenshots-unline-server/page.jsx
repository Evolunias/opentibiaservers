import WithScreenshotsUnlineServerKeywordPage, { generateMetadata } from './with-screenshots-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineServerKeywordPage />;
}
