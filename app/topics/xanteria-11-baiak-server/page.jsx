import Xanteria11BaiakServerKeywordPage, { generateMetadata } from './xanteria-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11BaiakServerKeywordPage />;
}
