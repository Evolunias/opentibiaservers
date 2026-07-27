import WithScreenshotsUnlineWikiKeywordPage, { generateMetadata } from './with-screenshots-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineWikiKeywordPage />;
}
