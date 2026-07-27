import Xanteria14CustomMapServerKeywordPage, { generateMetadata } from './xanteria-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14CustomMapServerKeywordPage />;
}
