import ZezeniaOnlinePlayersOnlineKeywordPage, { generateMetadata } from './zezenia-online-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePlayersOnlineKeywordPage />;
}
