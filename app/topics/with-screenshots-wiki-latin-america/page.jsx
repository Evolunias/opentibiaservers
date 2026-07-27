import WithScreenshotsWikiLatinAmericaKeywordPage, { generateMetadata } from './with-screenshots-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiLatinAmericaKeywordPage />;
}
