import WithScreenshotsRealestaForumKeywordPage, { generateMetadata } from './with-screenshots-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaForumKeywordPage />;
}
