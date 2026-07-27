import WithScreenshotsTibiaretroForumKeywordPage, { generateMetadata } from './with-screenshots-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaretroForumKeywordPage />;
}
