import Xanteria13CustomMapServerKeywordPage, { generateMetadata } from './xanteria-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13CustomMapServerKeywordPage />;
}
