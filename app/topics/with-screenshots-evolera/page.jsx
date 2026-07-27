import WithScreenshotsEvoleraKeywordPage, { generateMetadata } from './with-screenshots-evolera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEvoleraKeywordPage />;
}
