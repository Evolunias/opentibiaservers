import WithScreenshotsForumPolandKeywordPage, { generateMetadata } from './with-screenshots-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsForumPolandKeywordPage />;
}
