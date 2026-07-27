import ZezeniaOnline12RetroServerKeywordPage, { generateMetadata } from './zezenia-online-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline12RetroServerKeywordPage />;
}
