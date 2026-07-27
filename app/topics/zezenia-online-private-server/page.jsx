import ZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePrivateServerKeywordPage />;
}
