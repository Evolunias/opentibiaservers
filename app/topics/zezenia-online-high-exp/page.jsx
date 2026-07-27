import ZezeniaOnlineHighExpKeywordPage, { generateMetadata } from './zezenia-online-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineHighExpKeywordPage />;
}
