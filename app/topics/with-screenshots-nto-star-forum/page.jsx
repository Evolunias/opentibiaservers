import WithScreenshotsNtoStarForumKeywordPage, { generateMetadata } from './with-screenshots-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarForumKeywordPage />;
}
