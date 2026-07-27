import WithScreenshotsThorniaDiscordKeywordPage, { generateMetadata } from './with-screenshots-thornia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaDiscordKeywordPage />;
}
