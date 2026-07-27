import ZezeniaOnlineMexicoServersKeywordPage, { generateMetadata } from './zezenia-online-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineMexicoServersKeywordPage />;
}
