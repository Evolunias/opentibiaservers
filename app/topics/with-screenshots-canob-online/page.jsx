import WithScreenshotsCanobOnlineKeywordPage, { generateMetadata } from './with-screenshots-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobOnlineKeywordPage />;
}
