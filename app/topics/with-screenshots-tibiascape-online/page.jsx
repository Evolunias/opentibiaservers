import WithScreenshotsTibiascapeOnlineKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeOnlineKeywordPage />;
}
