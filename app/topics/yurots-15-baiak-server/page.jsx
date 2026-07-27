import Yurots15BaiakServerKeywordPage, { generateMetadata } from './yurots-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15BaiakServerKeywordPage />;
}
