import WithScreenshotsSerenityDiscordKeywordPage, { generateMetadata } from './with-screenshots-serenity-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityDiscordKeywordPage />;
}
