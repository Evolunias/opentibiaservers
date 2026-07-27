import ZezeniaOnlineOfficialKeywordPage, { generateMetadata } from './zezenia-online-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineOfficialKeywordPage />;
}
