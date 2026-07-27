import ZezeniaOnlineEuropeServerKeywordPage, { generateMetadata } from './zezenia-online-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineEuropeServerKeywordPage />;
}
