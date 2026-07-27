import ZezeniaOnline13RetroServerKeywordPage, { generateMetadata } from './zezenia-online-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline13RetroServerKeywordPage />;
}
