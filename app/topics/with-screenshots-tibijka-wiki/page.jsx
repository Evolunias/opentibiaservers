import WithScreenshotsTibijkaWikiKeywordPage, { generateMetadata } from './with-screenshots-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaWikiKeywordPage />;
}
