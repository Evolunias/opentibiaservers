import ZezeniaOnlinePvpKeywordPage, { generateMetadata } from './zezenia-online-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePvpKeywordPage />;
}
