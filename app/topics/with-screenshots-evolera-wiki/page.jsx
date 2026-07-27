import WithScreenshotsEvoleraWikiKeywordPage, { generateMetadata } from './with-screenshots-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEvoleraWikiKeywordPage />;
}
