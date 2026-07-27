import WithScreenshotsShadowcoresForumKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresForumKeywordPage />;
}
