import Xanteria11WithDiscordServerKeywordPage, { generateMetadata } from './xanteria-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11WithDiscordServerKeywordPage />;
}
