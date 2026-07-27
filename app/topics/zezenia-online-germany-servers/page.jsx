import ZezeniaOnlineGermanyServersKeywordPage, { generateMetadata } from './zezenia-online-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineGermanyServersKeywordPage />;
}
