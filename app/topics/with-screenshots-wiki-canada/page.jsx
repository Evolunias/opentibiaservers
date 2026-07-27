import WithScreenshotsWikiCanadaKeywordPage, { generateMetadata } from './with-screenshots-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiCanadaKeywordPage />;
}
