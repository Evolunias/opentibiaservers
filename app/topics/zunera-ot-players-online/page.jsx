import ZuneraOtPlayersOnlineKeywordPage, { generateMetadata } from './zunera-ot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPlayersOnlineKeywordPage />;
}
