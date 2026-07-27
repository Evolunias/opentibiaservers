import WithScreenshotsBlazeraForumKeywordPage, { generateMetadata } from './with-screenshots-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraForumKeywordPage />;
}
