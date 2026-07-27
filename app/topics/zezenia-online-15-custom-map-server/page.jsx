import ZezeniaOnline15CustomMapServerKeywordPage, { generateMetadata } from './zezenia-online-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline15CustomMapServerKeywordPage />;
}
