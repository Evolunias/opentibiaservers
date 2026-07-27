import WithScreenshotsUnlineClientKeywordPage, { generateMetadata } from './with-screenshots-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineClientKeywordPage />;
}
