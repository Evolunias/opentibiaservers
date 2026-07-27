import ZezeniaOnline13BaiakServerKeywordPage, { generateMetadata } from './zezenia-online-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline13BaiakServerKeywordPage />;
}
