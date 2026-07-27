import WithScreenshotsMediviaOnlineKeywordPage, { generateMetadata } from './with-screenshots-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaOnlineKeywordPage />;
}
