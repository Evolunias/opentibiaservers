import ZezeniaOnlineGermanyServerKeywordPage, { generateMetadata } from './zezenia-online-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineGermanyServerKeywordPage />;
}
