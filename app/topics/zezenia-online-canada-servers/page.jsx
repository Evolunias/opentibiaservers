import ZezeniaOnlineCanadaServersKeywordPage, { generateMetadata } from './zezenia-online-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCanadaServersKeywordPage />;
}
