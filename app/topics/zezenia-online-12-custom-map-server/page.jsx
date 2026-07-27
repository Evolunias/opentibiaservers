import ZezeniaOnline12CustomMapServerKeywordPage, { generateMetadata } from './zezenia-online-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline12CustomMapServerKeywordPage />;
}
