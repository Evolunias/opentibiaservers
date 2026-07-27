import ZezeniaOnlineUsaServerKeywordPage, { generateMetadata } from './zezenia-online-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineUsaServerKeywordPage />;
}
