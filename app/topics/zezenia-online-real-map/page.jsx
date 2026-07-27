import ZezeniaOnlineRealMapKeywordPage, { generateMetadata } from './zezenia-online-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRealMapKeywordPage />;
}
