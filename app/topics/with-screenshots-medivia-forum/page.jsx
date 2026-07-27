import WithScreenshotsMediviaForumKeywordPage, { generateMetadata } from './with-screenshots-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaForumKeywordPage />;
}
