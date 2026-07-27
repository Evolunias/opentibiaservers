import Xanteria11RealMapServerKeywordPage, { generateMetadata } from './xanteria-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria11RealMapServerKeywordPage />;
}
