import ZezeniaOnline12BaiakServerKeywordPage, { generateMetadata } from './zezenia-online-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline12BaiakServerKeywordPage />;
}
