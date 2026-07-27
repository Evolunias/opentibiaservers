import ZezeniaOnlinePolandServerKeywordPage, { generateMetadata } from './zezenia-online-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePolandServerKeywordPage />;
}
