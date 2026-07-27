import ZezeniaOnlineUkServerKeywordPage, { generateMetadata } from './zezenia-online-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineUkServerKeywordPage />;
}
