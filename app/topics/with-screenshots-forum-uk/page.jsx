import WithScreenshotsForumUkKeywordPage, { generateMetadata } from './with-screenshots-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsForumUkKeywordPage />;
}
