import ZezeniaOnlineResetKeywordPage, { generateMetadata } from './zezenia-online-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineResetKeywordPage />;
}
