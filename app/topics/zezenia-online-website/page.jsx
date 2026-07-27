import ZezeniaOnlineWebsiteKeywordPage, { generateMetadata } from './zezenia-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineWebsiteKeywordPage />;
}
