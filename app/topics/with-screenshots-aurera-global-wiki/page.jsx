import WithScreenshotsAureraGlobalWikiKeywordPage, { generateMetadata } from './with-screenshots-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAureraGlobalWikiKeywordPage />;
}
