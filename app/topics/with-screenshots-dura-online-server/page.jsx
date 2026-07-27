import WithScreenshotsDuraOnlineServerKeywordPage, { generateMetadata } from './with-screenshots-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineServerKeywordPage />;
}
