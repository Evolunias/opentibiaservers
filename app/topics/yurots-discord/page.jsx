import YurotsDiscordKeywordPage, { generateMetadata } from './yurots-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsDiscordKeywordPage />;
}
