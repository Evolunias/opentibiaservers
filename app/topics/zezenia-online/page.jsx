import ZezeniaOnlineKeywordPage, { generateMetadata } from './zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineKeywordPage />;
}
