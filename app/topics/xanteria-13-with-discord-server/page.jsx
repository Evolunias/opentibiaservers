import Xanteria13WithDiscordServerKeywordPage, { generateMetadata } from './xanteria-13-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13WithDiscordServerKeywordPage />;
}
