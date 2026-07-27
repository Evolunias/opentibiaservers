import WithScreenshotsBlazeraOnlineKeywordPage, { generateMetadata } from './with-screenshots-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraOnlineKeywordPage />;
}
