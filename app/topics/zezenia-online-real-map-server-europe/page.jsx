import ZezeniaOnlineRealMapServerEuropeKeywordPage, { generateMetadata } from './zezenia-online-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRealMapServerEuropeKeywordPage />;
}
