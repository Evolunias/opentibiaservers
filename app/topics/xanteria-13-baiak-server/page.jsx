import Xanteria13BaiakServerKeywordPage, { generateMetadata } from './xanteria-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13BaiakServerKeywordPage />;
}
