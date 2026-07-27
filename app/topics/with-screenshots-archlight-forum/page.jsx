import WithScreenshotsArchlightForumKeywordPage, { generateMetadata } from './with-screenshots-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightForumKeywordPage />;
}
