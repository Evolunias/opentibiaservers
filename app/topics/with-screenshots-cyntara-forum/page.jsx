import WithScreenshotsCyntaraForumKeywordPage, { generateMetadata } from './with-screenshots-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraForumKeywordPage />;
}
