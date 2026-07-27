import ZezeniaOnlineDiscordKeywordPage, { generateMetadata } from './zezenia-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineDiscordKeywordPage />;
}
