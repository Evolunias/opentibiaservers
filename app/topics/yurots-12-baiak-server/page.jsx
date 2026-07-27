import Yurots12BaiakServerKeywordPage, { generateMetadata } from './yurots-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12BaiakServerKeywordPage />;
}
