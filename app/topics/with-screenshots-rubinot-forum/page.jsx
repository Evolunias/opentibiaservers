import WithScreenshotsRubinotForumKeywordPage, { generateMetadata } from './with-screenshots-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotForumKeywordPage />;
}
