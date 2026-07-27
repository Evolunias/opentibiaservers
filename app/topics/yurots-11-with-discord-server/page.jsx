import Yurots11WithDiscordServerKeywordPage, { generateMetadata } from './yurots-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11WithDiscordServerKeywordPage />;
}
