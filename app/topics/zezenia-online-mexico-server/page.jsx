import ZezeniaOnlineMexicoServerKeywordPage, { generateMetadata } from './zezenia-online-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineMexicoServerKeywordPage />;
}
