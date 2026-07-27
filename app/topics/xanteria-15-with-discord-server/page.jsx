import Xanteria15WithDiscordServerKeywordPage, { generateMetadata } from './xanteria-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15WithDiscordServerKeywordPage />;
}
