import WithScreenshotsNepreniaForumKeywordPage, { generateMetadata } from './with-screenshots-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNepreniaForumKeywordPage />;
}
