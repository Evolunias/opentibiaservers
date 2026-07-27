import WithScreenshotsAlasteraForumKeywordPage, { generateMetadata } from './with-screenshots-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAlasteraForumKeywordPage />;
}
