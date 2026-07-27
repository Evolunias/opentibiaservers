import ZezeniaOnlineStatusKeywordPage, { generateMetadata } from './zezenia-online-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineStatusKeywordPage />;
}
