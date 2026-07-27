import WithScreenshotsZezeniaOnlineWikiKeywordPage, { generateMetadata } from './with-screenshots-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsZezeniaOnlineWikiKeywordPage />;
}
