import ZuneraOt13CustomMapServerKeywordPage, { generateMetadata } from './zunera-ot-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt13CustomMapServerKeywordPage />;
}
