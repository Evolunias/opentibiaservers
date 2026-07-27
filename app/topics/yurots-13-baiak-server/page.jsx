import Yurots13BaiakServerKeywordPage, { generateMetadata } from './yurots-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13BaiakServerKeywordPage />;
}
