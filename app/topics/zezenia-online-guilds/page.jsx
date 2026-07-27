import ZezeniaOnlineGuildsKeywordPage, { generateMetadata } from './zezenia-online-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineGuildsKeywordPage />;
}
