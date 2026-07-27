import ZezeniaOnlineShopKeywordPage, { generateMetadata } from './zezenia-online-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineShopKeywordPage />;
}
