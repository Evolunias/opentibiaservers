import ZezeniaOnlinePvpeKeywordPage, { generateMetadata } from './zezenia-online-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePvpeKeywordPage />;
}
