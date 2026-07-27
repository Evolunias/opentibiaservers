import WithScreenshotsCarlinotForumKeywordPage, { generateMetadata } from './with-screenshots-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotForumKeywordPage />;
}
