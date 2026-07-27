import ZezeniaOnlineCreateAccountKeywordPage, { generateMetadata } from './zezenia-online-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCreateAccountKeywordPage />;
}
