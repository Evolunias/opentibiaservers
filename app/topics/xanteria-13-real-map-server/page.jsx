import Xanteria13RealMapServerKeywordPage, { generateMetadata } from './xanteria-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13RealMapServerKeywordPage />;
}
