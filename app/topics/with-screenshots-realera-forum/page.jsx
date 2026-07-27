import WithScreenshotsRealeraForumKeywordPage, { generateMetadata } from './with-screenshots-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealeraForumKeywordPage />;
}
