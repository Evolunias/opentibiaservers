import WithScreenshotsXanteriaForumKeywordPage, { generateMetadata } from './with-screenshots-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsXanteriaForumKeywordPage />;
}
