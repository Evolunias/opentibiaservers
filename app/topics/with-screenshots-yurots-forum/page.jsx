import WithScreenshotsYurotsForumKeywordPage, { generateMetadata } from './with-screenshots-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsForumKeywordPage />;
}
