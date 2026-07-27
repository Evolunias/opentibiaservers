import WithScreenshotsBlazeraDiscordKeywordPage, { generateMetadata } from './with-screenshots-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraDiscordKeywordPage />;
}
