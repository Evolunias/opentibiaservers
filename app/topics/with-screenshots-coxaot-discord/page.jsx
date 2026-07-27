import WithScreenshotsCoxaotDiscordKeywordPage, { generateMetadata } from './with-screenshots-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotDiscordKeywordPage />;
}
