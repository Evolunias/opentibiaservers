import WithScreenshotsWikiEuropeKeywordPage, { generateMetadata } from './with-screenshots-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiEuropeKeywordPage />;
}
