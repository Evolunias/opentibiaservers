import ZezeniaOnlineChileServerKeywordPage, { generateMetadata } from './zezenia-online-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineChileServerKeywordPage />;
}
