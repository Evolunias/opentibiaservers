import WithScreenshotsVenoreotForumKeywordPage, { generateMetadata } from './with-screenshots-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotForumKeywordPage />;
}
