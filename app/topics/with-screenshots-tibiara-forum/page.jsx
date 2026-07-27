import WithScreenshotsTibiaraForumKeywordPage, { generateMetadata } from './with-screenshots-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraForumKeywordPage />;
}
