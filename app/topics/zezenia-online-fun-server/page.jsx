import ZezeniaOnlineFunServerKeywordPage, { generateMetadata } from './zezenia-online-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineFunServerKeywordPage />;
}
