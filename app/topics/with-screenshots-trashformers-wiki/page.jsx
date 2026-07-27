import WithScreenshotsTrashformersWikiKeywordPage, { generateMetadata } from './with-screenshots-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTrashformersWikiKeywordPage />;
}
