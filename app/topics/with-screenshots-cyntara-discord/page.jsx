import WithScreenshotsCyntaraDiscordKeywordPage, { generateMetadata } from './with-screenshots-cyntara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraDiscordKeywordPage />;
}
