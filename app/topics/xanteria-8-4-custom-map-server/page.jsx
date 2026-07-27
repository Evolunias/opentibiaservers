import Xanteria84CustomMapServerKeywordPage, { generateMetadata } from './xanteria-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria84CustomMapServerKeywordPage />;
}
