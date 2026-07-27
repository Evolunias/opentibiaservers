import WithScreenshotsSabrehavenForumKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenForumKeywordPage />;
}
