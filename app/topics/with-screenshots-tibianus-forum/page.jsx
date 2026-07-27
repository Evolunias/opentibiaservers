import WithScreenshotsTibianusForumKeywordPage, { generateMetadata } from './with-screenshots-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusForumKeywordPage />;
}
