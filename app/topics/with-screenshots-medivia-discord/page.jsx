import WithScreenshotsMediviaDiscordKeywordPage, { generateMetadata } from './with-screenshots-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaDiscordKeywordPage />;
}
