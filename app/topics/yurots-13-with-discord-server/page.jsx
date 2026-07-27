import Yurots13WithDiscordServerKeywordPage, { generateMetadata } from './yurots-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13WithDiscordServerKeywordPage />;
}
