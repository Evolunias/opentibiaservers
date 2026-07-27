import WithScreenshotsDemolidoresWikiKeywordPage, { generateMetadata } from './with-screenshots-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDemolidoresWikiKeywordPage />;
}
