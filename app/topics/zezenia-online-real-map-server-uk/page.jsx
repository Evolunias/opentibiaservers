import ZezeniaOnlineRealMapServerUkKeywordPage, { generateMetadata } from './zezenia-online-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRealMapServerUkKeywordPage />;
}
