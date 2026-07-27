import Yurots12WithDiscordServerKeywordPage, { generateMetadata } from './yurots-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12WithDiscordServerKeywordPage />;
}
