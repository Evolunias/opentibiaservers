import ZuneraOtOnlineKeywordPage, { generateMetadata } from './zunera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtOnlineKeywordPage />;
}
