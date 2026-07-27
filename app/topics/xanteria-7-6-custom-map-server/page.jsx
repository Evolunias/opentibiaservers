import Xanteria76CustomMapServerKeywordPage, { generateMetadata } from './xanteria-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria76CustomMapServerKeywordPage />;
}
