import Yurots15WithDiscordServerKeywordPage, { generateMetadata } from './yurots-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15WithDiscordServerKeywordPage />;
}
