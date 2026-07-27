import ZuneraOt14CustomMapServerKeywordPage, { generateMetadata } from './zunera-ot-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt14CustomMapServerKeywordPage />;
}
