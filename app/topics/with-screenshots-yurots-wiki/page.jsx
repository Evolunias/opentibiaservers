import WithScreenshotsYurotsWikiKeywordPage, { generateMetadata } from './with-screenshots-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsWikiKeywordPage />;
}
