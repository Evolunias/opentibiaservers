import YurotsPlayersOnlineKeywordPage, { generateMetadata } from './yurots-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsPlayersOnlineKeywordPage />;
}
