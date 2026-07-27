import Xanteria15BaiakServerKeywordPage, { generateMetadata } from './xanteria-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria15BaiakServerKeywordPage />;
}
