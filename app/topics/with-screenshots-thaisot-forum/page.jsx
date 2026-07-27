import WithScreenshotsThaisotForumKeywordPage, { generateMetadata } from './with-screenshots-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotForumKeywordPage />;
}
