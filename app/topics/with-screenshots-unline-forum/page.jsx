import WithScreenshotsUnlineForumKeywordPage, { generateMetadata } from './with-screenshots-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineForumKeywordPage />;
}
