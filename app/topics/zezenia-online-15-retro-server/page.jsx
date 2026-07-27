import ZezeniaOnline15RetroServerKeywordPage, { generateMetadata } from './zezenia-online-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline15RetroServerKeywordPage />;
}
