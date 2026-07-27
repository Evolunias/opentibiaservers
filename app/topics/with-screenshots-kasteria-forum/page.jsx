import WithScreenshotsKasteriaForumKeywordPage, { generateMetadata } from './with-screenshots-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaForumKeywordPage />;
}
