import Xanteria71CustomMapServerKeywordPage, { generateMetadata } from './xanteria-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria71CustomMapServerKeywordPage />;
}
