import ZezeniaOnlineMapKeywordPage, { generateMetadata } from './zezenia-online-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineMapKeywordPage />;
}
