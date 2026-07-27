import ZezeniaOnlineRetroServerMexicoKeywordPage, { generateMetadata } from './zezenia-online-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRetroServerMexicoKeywordPage />;
}
