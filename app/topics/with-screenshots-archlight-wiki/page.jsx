import WithScreenshotsArchlightWikiKeywordPage, { generateMetadata } from './with-screenshots-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightWikiKeywordPage />;
}
