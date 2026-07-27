import WithScreenshotsSaintsotForumKeywordPage, { generateMetadata } from './with-screenshots-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSaintsotForumKeywordPage />;
}
