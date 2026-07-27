import XanteriaPlayersOnlineKeywordPage, { generateMetadata } from './xanteria-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaPlayersOnlineKeywordPage />;
}
