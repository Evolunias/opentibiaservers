import Yurots11BaiakServerKeywordPage, { generateMetadata } from './yurots-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11BaiakServerKeywordPage />;
}
