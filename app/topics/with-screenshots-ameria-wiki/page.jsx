import WithScreenshotsAmeriaWikiKeywordPage, { generateMetadata } from './with-screenshots-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAmeriaWikiKeywordPage />;
}
