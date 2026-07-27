import WithScreenshotsTibijkaForumKeywordPage, { generateMetadata } from './with-screenshots-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaForumKeywordPage />;
}
