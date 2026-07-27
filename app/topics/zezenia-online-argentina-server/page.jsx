import ZezeniaOnlineArgentinaServerKeywordPage, { generateMetadata } from './zezenia-online-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineArgentinaServerKeywordPage />;
}
