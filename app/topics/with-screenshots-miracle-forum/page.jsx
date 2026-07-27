import WithScreenshotsMiracleForumKeywordPage, { generateMetadata } from './with-screenshots-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMiracleForumKeywordPage />;
}
