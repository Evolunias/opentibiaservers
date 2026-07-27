import WithScreenshotsElderaForumKeywordPage, { generateMetadata } from './with-screenshots-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaForumKeywordPage />;
}
