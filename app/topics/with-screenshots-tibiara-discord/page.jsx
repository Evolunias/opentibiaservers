import WithScreenshotsTibiaraDiscordKeywordPage, { generateMetadata } from './with-screenshots-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaraDiscordKeywordPage />;
}
