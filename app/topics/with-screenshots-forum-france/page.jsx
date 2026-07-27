import WithScreenshotsForumFranceKeywordPage, { generateMetadata } from './with-screenshots-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsForumFranceKeywordPage />;
}
