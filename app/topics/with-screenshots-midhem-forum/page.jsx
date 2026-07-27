import WithScreenshotsMidhemForumKeywordPage, { generateMetadata } from './with-screenshots-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemForumKeywordPage />;
}
