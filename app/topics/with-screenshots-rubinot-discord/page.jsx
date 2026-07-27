import WithScreenshotsRubinotDiscordKeywordPage, { generateMetadata } from './with-screenshots-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotDiscordKeywordPage />;
}
