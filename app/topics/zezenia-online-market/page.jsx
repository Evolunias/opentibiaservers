import ZezeniaOnlineMarketKeywordPage, { generateMetadata } from './zezenia-online-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineMarketKeywordPage />;
}
