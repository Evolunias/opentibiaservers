import WithScreenshotsThorniaForumKeywordPage, { generateMetadata } from './with-screenshots-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaForumKeywordPage />;
}
