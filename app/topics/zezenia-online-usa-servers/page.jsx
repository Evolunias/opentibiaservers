import ZezeniaOnlineUsaServersKeywordPage, { generateMetadata } from './zezenia-online-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineUsaServersKeywordPage />;
}
