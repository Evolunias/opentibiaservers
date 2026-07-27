import WithScreenshotsDuraOnlineTibiaKeywordPage, { generateMetadata } from './with-screenshots-dura-online-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineTibiaKeywordPage />;
}
