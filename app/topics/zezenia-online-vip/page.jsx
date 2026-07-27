import ZezeniaOnlineVipKeywordPage, { generateMetadata } from './zezenia-online-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineVipKeywordPage />;
}
