import WithScreenshotsForumUsaKeywordPage, { generateMetadata } from './with-screenshots-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsForumUsaKeywordPage />;
}
