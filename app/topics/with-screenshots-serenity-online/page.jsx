import WithScreenshotsSerenityOnlineKeywordPage, { generateMetadata } from './with-screenshots-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityOnlineKeywordPage />;
}
