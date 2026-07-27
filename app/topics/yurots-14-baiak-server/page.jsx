import Yurots14BaiakServerKeywordPage, { generateMetadata } from './yurots-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14BaiakServerKeywordPage />;
}
