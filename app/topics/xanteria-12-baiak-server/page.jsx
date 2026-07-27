import Xanteria12BaiakServerKeywordPage, { generateMetadata } from './xanteria-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12BaiakServerKeywordPage />;
}
