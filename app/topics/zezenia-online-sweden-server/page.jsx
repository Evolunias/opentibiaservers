import ZezeniaOnlineSwedenServerKeywordPage, { generateMetadata } from './zezenia-online-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSwedenServerKeywordPage />;
}
