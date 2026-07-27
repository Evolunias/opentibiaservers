import ZezeniaOnlineForumKeywordPage, { generateMetadata } from './zezenia-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineForumKeywordPage />;
}
