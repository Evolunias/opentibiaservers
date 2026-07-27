import WithScreenshotsDuraOnlineWikiKeywordPage, { generateMetadata } from './with-screenshots-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineWikiKeywordPage />;
}
