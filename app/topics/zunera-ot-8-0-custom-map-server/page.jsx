import ZuneraOt80CustomMapServerKeywordPage, { generateMetadata } from './zunera-ot-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt80CustomMapServerKeywordPage />;
}
