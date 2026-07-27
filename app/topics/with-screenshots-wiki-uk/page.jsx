import WithScreenshotsWikiUkKeywordPage, { generateMetadata } from './with-screenshots-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiUkKeywordPage />;
}
