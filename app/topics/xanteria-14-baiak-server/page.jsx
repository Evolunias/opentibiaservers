import Xanteria14BaiakServerKeywordPage, { generateMetadata } from './xanteria-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14BaiakServerKeywordPage />;
}
