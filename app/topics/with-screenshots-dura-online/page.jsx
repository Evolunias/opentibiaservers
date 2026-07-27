import WithScreenshotsDuraOnlineKeywordPage, { generateMetadata } from './with-screenshots-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsDuraOnlineKeywordPage />;
}
