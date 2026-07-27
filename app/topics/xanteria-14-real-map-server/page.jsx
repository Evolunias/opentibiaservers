import Xanteria14RealMapServerKeywordPage, { generateMetadata } from './xanteria-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14RealMapServerKeywordPage />;
}
