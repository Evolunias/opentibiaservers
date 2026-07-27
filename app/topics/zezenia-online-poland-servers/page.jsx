import ZezeniaOnlinePolandServersKeywordPage, { generateMetadata } from './zezenia-online-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlinePolandServersKeywordPage />;
}
