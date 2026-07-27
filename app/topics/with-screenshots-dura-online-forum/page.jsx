import WithScreenshotsDuraOnlineForumKeywordPage, { generateMetadata } from './with-screenshots-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineForumKeywordPage />;
}
