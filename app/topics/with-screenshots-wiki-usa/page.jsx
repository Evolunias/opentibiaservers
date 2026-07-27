import WithScreenshotsWikiUsaKeywordPage, { generateMetadata } from './with-screenshots-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiUsaKeywordPage />;
}
