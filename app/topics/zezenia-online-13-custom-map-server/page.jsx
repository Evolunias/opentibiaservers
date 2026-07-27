import ZezeniaOnline13CustomMapServerKeywordPage, { generateMetadata } from './zezenia-online-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline13CustomMapServerKeywordPage />;
}
