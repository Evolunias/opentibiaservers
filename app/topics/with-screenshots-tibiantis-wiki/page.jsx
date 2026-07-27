import WithScreenshotsTibiantisWikiKeywordPage, { generateMetadata } from './with-screenshots-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisWikiKeywordPage />;
}
