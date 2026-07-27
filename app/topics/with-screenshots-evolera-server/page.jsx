import WithScreenshotsEvoleraServerKeywordPage, { generateMetadata } from './with-screenshots-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEvoleraServerKeywordPage />;
}
