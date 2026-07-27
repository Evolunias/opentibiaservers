import ZezeniaOnlineNorthAmericaServerKeywordPage, { generateMetadata } from './zezenia-online-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineNorthAmericaServerKeywordPage />;
}
