import WithScreenshotsOriginaltibiaWikiKeywordPage, { generateMetadata } from './with-screenshots-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOriginaltibiaWikiKeywordPage />;
}
