import Xanteria80CustomMapServerKeywordPage, { generateMetadata } from './xanteria-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria80CustomMapServerKeywordPage />;
}
