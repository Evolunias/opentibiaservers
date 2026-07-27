import ZezeniaOnlineRetroServerSwedenKeywordPage, { generateMetadata } from './zezenia-online-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRetroServerSwedenKeywordPage />;
}
