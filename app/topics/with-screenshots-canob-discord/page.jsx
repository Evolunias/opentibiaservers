import WithScreenshotsCanobDiscordKeywordPage, { generateMetadata } from './with-screenshots-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobDiscordKeywordPage />;
}
