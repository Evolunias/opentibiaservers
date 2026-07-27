import ZezeniaOnline80CustomMapServerKeywordPage, { generateMetadata } from './zezenia-online-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline80CustomMapServerKeywordPage />;
}
