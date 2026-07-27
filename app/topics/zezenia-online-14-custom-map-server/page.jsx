import ZezeniaOnline14CustomMapServerKeywordPage, { generateMetadata } from './zezenia-online-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline14CustomMapServerKeywordPage />;
}
