import ZezeniaOnlineCustomMapServerSwedenKeywordPage, { generateMetadata } from './zezenia-online-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCustomMapServerSwedenKeywordPage />;
}
