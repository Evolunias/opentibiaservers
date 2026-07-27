import WithScreenshotsSerenityForumKeywordPage, { generateMetadata } from './with-screenshots-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityForumKeywordPage />;
}
