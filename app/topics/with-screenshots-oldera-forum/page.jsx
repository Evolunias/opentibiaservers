import WithScreenshotsOlderaForumKeywordPage, { generateMetadata } from './with-screenshots-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaForumKeywordPage />;
}
