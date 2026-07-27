import WithScreenshotsTibijkaDiscordKeywordPage, { generateMetadata } from './with-screenshots-tibijka-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaDiscordKeywordPage />;
}
