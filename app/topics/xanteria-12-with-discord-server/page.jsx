import Xanteria12WithDiscordServerKeywordPage, { generateMetadata } from './xanteria-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12WithDiscordServerKeywordPage />;
}
